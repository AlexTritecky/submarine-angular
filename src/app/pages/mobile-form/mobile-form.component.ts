import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../partials/header/header.component';
import {
	ReactiveFormsModule,
	FormsModule,
	FormGroup,
	FormBuilder,
	Validators,
	AbstractControl,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { EmailService } from '../../services/email/email.service';
import { CustomerRequest } from '../../models/customer.model';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-mobile-form',
	standalone: true,
	imports: [HeaderComponent, MatIconModule, ReactiveFormsModule, FormsModule, NgClass],
	templateUrl: './mobile-form.component.html',
	styleUrl: './mobile-form.component.scss',
})
export class MobileFormComponent {
	servicesList: string[] = [
		'Візуал',
		'Айдентика',
		'SMM-стратегія',
		'Комунікаційна стратегія',
		'SMM',
		'Дизайн та веб-розробка сайту',
		'Консультація',
	];

	public showContent = false;

	contactForm: FormGroup;
	private formStateSubscription: Subscription;
	private isPatchingForm = false;

	constructor(
		private fb: FormBuilder,
		private emailService: EmailService,
	) {
		this.contactForm = this.fb.group({
			name: ['', Validators.required],
			phone: ['', [Validators.required, Validators.pattern(/^(\+?\d{1,4}|\d{1,4})?\s?\d{10}$/)]],
			email: ['', [Validators.required, Validators.email]],
			company_name: ['', Validators.required],
			services: [[]],
			description: [''],
		});

		this.formStateSubscription = this.contactForm.valueChanges.subscribe((value) => {
			if (!this.isPatchingForm) {
				this.emailService.saveFormState(value);
			}
		});

		if (typeof window !== 'undefined') {
			window.scrollTo(0, 0);
		}
	}

	get name(): AbstractControl {
		return this.contactForm.get('name') as AbstractControl;
	}

	get phone(): AbstractControl {
		return this.contactForm.get('phone') as AbstractControl;
	}

	get email(): AbstractControl {
		return this.contactForm.get('email') as AbstractControl;
	}

	get companyName(): AbstractControl {
		return this.contactForm.get('company_name') as AbstractControl;
	}

	ngOnInit(): void {
		this.emailService.getFormState().subscribe((state) => {
			if (state) {
				this.isPatchingForm = true;
				this.contactForm.patchValue(state);
				this.isPatchingForm = false;
			}
		});
	}

	ngOnDestroy(): void {
		this.formStateSubscription.unsubscribe();
	}

	isSelected(service: string): boolean {
		const services = this.contactForm.get('services')?.value as string[];
		return services?.includes(service);
	}

	toggleService(service: string): void {
		let services = this.contactForm.get('services')?.value as string[];
		if (!services) {
			services = [];
		}

		const index = services.indexOf(service);
		if (index >= 0) {
			services.splice(index, 1);
		} else {
			services.push(service);
		}

		this.contactForm.get('services')?.setValue(services);
	}

	onSubmit(): void {
		if (this.contactForm.valid) {
			const services = this.contactForm.get('services')?.value as string[];
			if (services.length === 0) {
				this.contactForm.get('services')?.setValue(['Консультація, людина нічого не вибрала']);
			}

			const sendObject: CustomerRequest = {
				name: this.contactForm.value.name,
				phone: this.contactForm.value.phone,
				email: this.contactForm.value.email,
				companyName: this.contactForm.value.company_name,
				services: this.contactForm.value.services,
				message: this.contactForm.value.description,
			};

			this.emailService.sendCustomerRequest(sendObject).subscribe((res) => {
				if (res.complete) {
					this.emailService.clearFormState();
					window.scrollTo(0, 0);
					this.contactForm.reset();
					this.showContent = res.complete;
				}
			});
		}
	}

	close() {
		this.saveFormState();
	}

	private saveFormState(): void {
		this.emailService.saveFormState(this.contactForm.value);
	}
}

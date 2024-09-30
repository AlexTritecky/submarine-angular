import { NgClass } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { EmailService } from '../../services/email/email.service';
import { MatIconModule } from '@angular/material/icon';
import { CustomerRequest } from '../../models/customer.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { FormServiceType, ServiceType } from '../../models/service.model';

@Component({
	selector: 'app-contact-dialog',
	standalone: true,
	imports: [ReactiveFormsModule, FormsModule, NgClass, MatIconModule],
	templateUrl: './contact-dialog.component.html',
	styleUrls: ['./contact-dialog.component.scss'],
})
export class ContactDialogComponent {
	servicesList: string[] = [];

	public showContent = false;

	contactForm                  : FormGroup;
	private formStateSubscription: Subscription;
	private isPatchingForm       = false;

	// Mapping between ServiceType and the corresponding FormServiceType values
	private serviceTypeMapping: Record<ServiceType, FormServiceType[]> = {
		[ServiceType.SMM_SUPROVID]: [FormServiceType.smm_suprovid],
		[ServiceType.COMUNIKATSIYNA_STRATEGIYA]: [FormServiceType.comunikatsiyna_strategiya],
		[ServiceType.SMM_STRATEGIYA]: [FormServiceType.smm_strategiya],
		[ServiceType.BRENDING]: [
			FormServiceType.naming,
			FormServiceType.logo_book,
			FormServiceType.brand_book,
		],
		[ServiceType.PRODUCTION]: [FormServiceType.production],
		[ServiceType.SMM_GUIDE]: [FormServiceType.smm_guide],
		[ServiceType.CAMPAIGN]: [FormServiceType.campaign],
		[ServiceType.PROMOTION]: [FormServiceType.promotion],
		[ServiceType.WEB_DESIGN]: [FormServiceType.web_design],
	};

	constructor(
		private fb: FormBuilder,
		private emailService: EmailService,
		private dialogRef: MatDialogRef<ContactDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { serviceType: ServiceType },
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

		this.servicesList = Object.values(FormServiceType);

		if (this.data?.serviceType) {
			this.autoSelectServices(this.data.serviceType);
		}
		
		this.emailService.getFormState().subscribe((state) => {
			if (state) {
				this.isPatchingForm = true;
				this.contactForm.patchValue(state);
				this.isPatchingForm = false;
			}
		});

		this.dialogRef.backdropClick().subscribe(() => {
			this.saveFormState();
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
					this.contactForm.reset();
					this.showContent = res.complete;
				}
			});
		}
	}

	close() {
		this.saveFormState();
		this.dialogRef.close();
	}

	private saveFormState(): void {
		this.emailService.saveFormState(this.contactForm.value);
	}

	private autoSelectServices(serviceType: ServiceType): void {
		const selectedServices = this.serviceTypeMapping[serviceType];
		if (selectedServices) {
			selectedServices.forEach((service) => this.toggleService(service));
		}
	}
}

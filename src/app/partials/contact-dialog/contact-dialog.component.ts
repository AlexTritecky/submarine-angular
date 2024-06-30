import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmailService } from '../../services/email/email.service';

@Component({
  selector: 'app-contact-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgClass, MatChipsModule],
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss'],
})
export class ContactDialogComponent {
  servicesList: string[] = [
    'Візуал',
    'Айдентика',
    'SMM-стратегія',
    'Комунікаційна стратегія',
    'SMM',
    'Дизайн та веб-розробка сайту',
    'Консультація',
  ];

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(\+?\d{1,4}|\d{1,4})?\s?\d{10}$/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      company_name: ['', Validators.required],
      services: [[]],
      description: [''],
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

  get company_name(): AbstractControl {
    return this.contactForm.get('company_name') as AbstractControl;
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
        this.contactForm
          .get('services')
          ?.setValue(['Консультація, людина нічого не вибрала']);
      }

      console.log('Form Submitted', this.contactForm.value);

      // this.emailService.sendCustomerRequest(this.contactForm.value).subscribe((res) => {
      //   console.log('Email sent successfully', res);
      // });
    }
  }
}

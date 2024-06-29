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
  styleUrl: './contact-dialog.component.scss',
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
      services: ['Консультація'],
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

  onSubmit(): void {
    // if (this.contactForm.valid) {
    //   console.log('Form Submitted', this.contactForm.value);
    // }

    const formvalue = {
      name: 'John Doe',
      phone: '+380123456789',
      email: 'test@email.com',
      companyName: 'Test Company',
      services: [
        'Візуал',
        'Айдентика',
        'SMM-стратегія',
        'Комунікаційна стратегія',
        'SMM',
        'Дизайн та веб-розробка сайту',
        'Консультація',
      ],
      message: 'Test message',
    }

    this.emailService.sendCustomerRequest(formvalue).subscribe( res => {
      console.log(111, res);

    });
  }

  toggleSelection(service: string): void {

    console.log(111, service);

    let selectedServices =
      this.contactForm
        .get('services')
        ?.value.split(',')
        .map((s: string) => s.trim()) || [];
    const index = selectedServices.indexOf(service);

    if (index >= 0) {
      selectedServices.splice(index, 1);
    } else {
      selectedServices.push(service);
    }

    if (selectedServices.length === 0) {
      selectedServices = ['Консультація'];
    }

    console.log(11, selectedServices);

    this.contactForm.get('services')?.setValue(selectedServices.join(', '));
  }
}

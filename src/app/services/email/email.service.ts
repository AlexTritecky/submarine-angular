import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { CustomerRequest, CustomerResponse } from '../../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = environment.apiUrl;
  private formStateSubject = new BehaviorSubject<Partial<CustomerRequest> | null>(null);

  constructor(private http: HttpClient) {}

  sendCustomerRequest(customerData: CustomerRequest): Observable<CustomerResponse> {
    return this.http.post<CustomerResponse>(this.apiUrl, customerData);
  }

  saveFormState(state: Partial<CustomerRequest>): void {
    this.formStateSubject.next(state);
  }

  getFormState(): Observable<Partial<CustomerRequest> | null> {
    return this.formStateSubject.asObservable();
  }

  clearFormState(): void {
    this.formStateSubject.next(null);
  }
}

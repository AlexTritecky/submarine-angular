import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'https://submarinewebtest.azurewebsites.net/api/customer';

  constructor(private http: HttpClient) {}

  sendCustomerRequest(customerData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, customerData);
  }
}

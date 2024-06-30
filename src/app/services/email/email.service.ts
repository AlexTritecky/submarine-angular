import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendCustomerRequest(customerData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, customerData);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICustomer } from '../models/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = `http://localhost:3000/usuarios`;
  public httOpt = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // tslint:disable-next-line: object-literal-key-quotes
      'Accept': 'application/json, text/plain'
    })
  };

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(`${this.apiUrl}`);
  }

  updateCustomer(customer: ICustomer) {
    return this.http.put(`${this.apiUrl}/${customer.id}`, JSON.stringify(customer), this.httOpt);
  }

}

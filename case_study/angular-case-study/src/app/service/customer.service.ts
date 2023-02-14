import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../../../../ss9_web_back_end/bai_tap/angular-product/src/app/model/product";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {

  }

  URL = ("http://localhost:3000/customer")

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL);
  }

  deleteCustomer(id: number): Observable<Customer[]> {
    return this.httpClient.delete<Customer[]>(this.URL + "/" + id);
  }

  saveCustomer(customer: any) {
    return this.httpClient.post<Customer>(this.URL, customer);
  }

  findById(id: number) {
    return this.httpClient.get<Customer>(this.URL + "/" + id);
  }

  updateCustomer(id: number, customer: Customer) {
    return this.httpClient.patch<Customer>(this.URL + "/" + id, customer);
  }

}

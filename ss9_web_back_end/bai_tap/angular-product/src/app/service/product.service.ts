import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient: HttpClient) {
  }

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/product")
  }

  deleteProduct(id: number): Observable<Product> {
    console.log(id)
    return this.httpClient.delete<Product>("http://localhost:3000/product/" + id)
  }

  saveProduct(product:any){
    return this.httpClient.post<Product>("http://localhost:3000/product",product);
  }
}

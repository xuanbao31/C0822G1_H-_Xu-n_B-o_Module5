import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../model/product-type";

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  constructor(private httpClient: HttpClient) {
  }

  getAllProductType(): Observable<ProductType[]> {
    return this.httpClient.get<ProductType[]>("http://localhost:3000/productType")
  }
}

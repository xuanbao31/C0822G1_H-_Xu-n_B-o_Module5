import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {ProductType} from "../../model/product-type";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  product: Product = {};


  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAllProduct().subscribe(next => {
      console.log(next);
      this.productList = next;
    }, error => {

    }, () => {

    });
  }


  deleteProduct(id: number) {
    this.productService.deleteProduct(this.product.id).subscribe(() => {
      this.ngOnInit();
    })
  }

}

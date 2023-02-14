import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {ProductType} from "../../model/product-type";
import {Page} from "ngx-pagination/dist/pagination-controls.directive";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductTypeService} from "../../service/product-type.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    productType: new FormControl("")
  })
  productList: Product[] = [];
  product: Product = {};
  page: number = 0;
  productTypeList: ProductType[] = [];


  constructor(private productService: ProductService, private productTypeService: ProductTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAllProduct("", "").subscribe(next => {
      console.log(next);
      this.productList = next;
    }, error => {

    }, () => {

    })
    this.productTypeService.getAllProductType().subscribe(next => {
      console.log(next);
      this.productTypeList = next;
    }, error => {

    }, () => {

    })

  }


  deleteProduct(id: number) {
    this.productService.deleteProduct(this.product.id).subscribe(() => {
      this.ngOnInit();
    })
  }

  // searchProduct() {
  //   this.productService.getAllProduct(this.searchForm.value.name, this.searchForm.value.class).subscribe(data =>{
  //     this.productList =data;
  //     console.log(data)
  //   })
  // }
  searchProduct() {
    this.productService.getAllProduct(this.searchForm.value.name, this.searchForm.value.productType).subscribe(next => {
      this.productList = next
      console.log(next)
    })

  }

  resetPage() {
    this.ngOnInit();
  }

}

import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductType} from "../../model/product-type";
import {ProductService} from "../../service/product.service";
import {ProductTypeService} from "../../service/product-type.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product[] = [];
  productType: ProductType[] = [];
  productForm:FormGroup;

  constructor(private productService: ProductService,
              private productTypeService: ProductTypeService,
              private router: Router) {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      amount: new FormControl(),
      color: new FormControl(),
      productType: new FormControl()
    });

  }

  ngOnInit(): void {
    this.productTypeService.getAllProductType().subscribe(next => {
      console.log(next);
      this.productType = next;
    })
  }
submit(){
    const product=this.productForm.value;
  console.log(product);
  this.productService.saveProduct(product).subscribe(()=> {
    this.router.navigateByUrl('/')
  })
}
}

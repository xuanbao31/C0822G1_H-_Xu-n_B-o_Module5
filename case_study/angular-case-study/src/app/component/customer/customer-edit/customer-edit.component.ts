import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer";
import {CustomerType} from "../../../model/customer-type";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../service/customer.service";
import {CustomerTypeService} from "../../../service/customer-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductType} from "../../../../../../../ss9_web_back_end/bai_tap/angular-product/src/app/model/product-type";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer = {};
  customerType: CustomerType[] = [];
  updateForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    date: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    customerType: new FormControl(),

  });
  id: number = 0;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = parseInt(<string>paramMap.get("id"))
      if (this.id != null) {
        this.getCustomer(this.id)
      }
    })
  }

  ngOnInit(): void {
    this.customerTypeService.getAllCustomerType().subscribe(next => {
      this.customerType = next;
      console.log(next);
    })
  }

  comparaFn(o1: CustomerType, o2: CustomerType): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  private getCustomer(id: number) {
    console.log(this.customerService.findById(id));
    return this.customerService.findById(id).subscribe(customer => {
      console.log(customer);
      this.updateForm.patchValue(customer);
    })
  }

  update(id: number) {
    if (this.updateForm != undefined && id != null) {
      const customer = this.updateForm.value;
      console.log(customer);
      this.customerService.updateCustomer(id, customer).subscribe(() => {
        if (this.updateForm != undefined) {
          this.updateForm.reset();
          this.router.navigateByUrl("");
        }
      }, error => {
        this.router.navigateByUrl("/update")
      })
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/customer";
import {CustomerType} from "../../../model/customer-type";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../service/customer.service";
import {CustomerTypeService} from "../../../service/customer-type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
customer: Customer[]=[];
customerType:CustomerType[]=[];
customerForm:FormGroup;

  constructor(private customerService:CustomerService,
              private customerTypeService:CustomerTypeService,
              private router:Router) {
    this.customerForm=new FormGroup({
      id: new FormControl(),
      name:new FormControl(),
      date:new FormControl(),
      gender:new FormControl(),
      idCard:new FormControl(),
      phoneNumber:new FormControl(),
      email:new FormControl(),
      address:new FormControl(),
      customerType:new FormControl()
    });
    this.customerTypeService.getAllCustomerType().subscribe(next=>{
      console.log(next);
      this.customerType=next;
    })

  }

  ngOnInit(): void {

  }
  submit(){
    const customer=this.customerForm.value;
    console.log(customer);
    this.customerService.saveCustomer(customer).subscribe(()=>{
      this.router.navigateByUrl("/")
    })
  }

}

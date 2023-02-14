import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer";
import {CustomerType} from "../../../model/customer-type";
import {Router} from "@angular/router";
import {CustomerService} from "../../../service/customer.service";
import {CustomerTypeService} from "../../../service/customer-type.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  item: Customer = {};
  page: number = 0;
  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.customerService.getAllCustomer().subscribe(next => {
      console.log(next);
      this.customerList = next;
    })
    this.customerTypeService.getAllCustomerType().subscribe(next => {
      console.log(next);
      this.customerTypeList = next;
    })
  }

  delete(id: number) {
    this.customerService.deleteCustomer(this.item.id).subscribe(next=>{
      alert("xóa thành công");
      this.ngOnInit();
    })
  }
}

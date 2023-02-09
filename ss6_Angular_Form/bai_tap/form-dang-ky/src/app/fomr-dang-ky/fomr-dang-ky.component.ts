import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormDangKi} from "../model/form-dang-ki";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-fomr-dang-ky',
  templateUrl: './fomr-dang-ky.component.html',
  styleUrls: ['./fomr-dang-ky.component.css']
})
export class FomrDangKyComponent implements OnInit {
  formRegister: FormDangKi = {
    id: 1,
    email: "LeHuy@gmail.com",
    password: "LeHuy@gmail.com",
    confirmPassword: "LeHuy@gmail.com",
    country: "LeHuy@gmail.com",
    age: 18,
    phone: "LeHuy@gmail.com",
    gender: "LeHuy@gmail.com",
    name: "LeHuy@gmail.com",
  }
  @Output() formSubmit = new EventEmitter();
  reactiveForm:FormGroup;

  constructor() {
    this.reactiveForm=new FormGroup({
      id:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
      confirmPassword:new FormControl("",Validators.required),
      country:new FormControl("",Validators.required),
      age:new FormControl("",Validators.required),
      phone:new FormControl("",Validators.required),
      gender:new FormControl("",Validators.required),
      name:new FormControl("",Validators.required),
    })
  }

  ngOnInit(): void {
  }

  createForm() {
    console.log(this.reactiveForm);
    if (this.reactiveForm.valid){
      this.formSubmit.emit(this.reactiveForm.value)
    }


  }

}

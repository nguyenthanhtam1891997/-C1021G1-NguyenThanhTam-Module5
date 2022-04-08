import {Component, OnInit} from '@angular/core';
import {ApiCustomer} from "../api-customer/apiCustomer";
import {Router} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../model/CustomerType";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  // customer: Customer;
  customerTypeList: CustomerType[];

  addForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dayOfBirth: new FormControl('', [Validators.required, this.checkAge]),
    gender: new FormControl('', [Validators.required]),
    card: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{9}$')]),
    phone: new FormControl('', [Validators.required,Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
    address: new FormControl('', [Validators.required,Validators.minLength(5)]),
    customerType: new FormControl('', [Validators.required]),
  })

  constructor(private customerService: ApiCustomer, private router: Router) {
  }

  ngOnInit(): void {
    this.getListType()
  }

  private getListType() {
    this.customerService.getListTypeCustomer().subscribe(data => {
      this.customerTypeList = data;
    })
  }

  save() {
    this.customerService.addCustomer(this.addForm.value).subscribe(() => {
      console.log("a");
      this.router.navigateByUrl("customer");
    })
    // console.log(this.addForm.value);
  }

  checkAge(dayOfBirth: AbstractControl) {
    // let dateNow = Date.now() - (dayOfBirth.value).getTime();
    // let time = new Date(dateNow)
    // let age = Math.abs(time.getUTCFullYear() - 1970)
    // console.log(age)

    const birth = new Date(dayOfBirth.value);
    const birthDay = Date.now() - birth.getTime() - 86400000;
    const time = new Date(birthDay);
    const age = time.getUTCFullYear() - 1970;
    if (age < 18){
      return {"ageEro":true}
    }
    console.log(age);
    return null;
  }
}

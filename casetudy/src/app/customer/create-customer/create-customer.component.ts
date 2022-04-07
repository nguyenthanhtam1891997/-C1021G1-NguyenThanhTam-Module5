import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/Customer";
import {ApiCustomer} from "../api-customer/apiCustomer";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  // customer: Customer;

  addForm = new FormGroup({
    name: new FormControl(''),
    dayOfBirth: new FormControl(''),
    gender: new FormControl(''),
    card: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  })

  constructor(private customerService: ApiCustomer, private router: Router) {
  }

  ngOnInit(): void {
  }

  save() {
    this.customerService.addCustomer(this.addForm.value).subscribe( () => {
      console.log("a");
      this.router.navigateByUrl("customer");
    })
  }
}

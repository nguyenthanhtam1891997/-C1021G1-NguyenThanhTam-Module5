import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../service-customer/CustomerService";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../model/Customer";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  providers: [CustomerService],
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  customerInFor: Customer;

  customerId: number;
  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    dayOfBirth: new FormControl(''),
    gender: new FormControl(''),
    card: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  })

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) {
    console.log(this.route.snapshot.paramMap.get('id'))
    this.customerId = Number(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    this.customerInFor = this.customerService.getId(this.customerId)
    this.loadData()
    console.log(this.customerInFor)
  }

  private loadData() {
    for (const value in this.profileForm.controls) {
      if (value) {
        this.profileForm.controls[value].setValue(this.customerInFor[value])
      }
    }
  }

  public save() {

    const customerEdit = {};
    for (const value in this.profileForm.controls) {
      if (value) {
        console.log(this.profileForm.controls[value].value)
        customerEdit[value] = this.profileForm.controls[value].value;
      }
    }
    this.customerService.updateCustomer(customerEdit as Customer);
    this.router.navigate(['customer'])
  }



}

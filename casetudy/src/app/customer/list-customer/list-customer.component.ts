import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/Customer";
import {CustomerService} from "../service-customer/CustomerService";
import {Router} from "@angular/router";
import {ApiCustomer} from "../api-customer/apiCustomer";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  providers: [CustomerService],
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[];
  customer: Customer;
  private subscription: Subscription;

  constructor(private customerService: ApiCustomer,
              private router: Router) {

  }

  ngOnInit(): void {
    this.customerService.getListCustomer().subscribe(data => {
      console.log(data)
      this.customerList = data;
    }, error => {
      console.log("ddang gawp loi")
    })

  }


  // getInFor(item: Customer) {
  //   this.customer = this.customerService.getInFor(item);
  // }
  //
  //
  // deleteCustomer(customer: Customer) {
  //   this.customerService.deleteCustomer(customer)
  // }
  //
  //
  // editCustomer(id: number) {
  //   this.router.navigate(['customer-edit', id])
  // }
  addCustomer() {
    this.router.navigate(['customer-add'])
  }
}

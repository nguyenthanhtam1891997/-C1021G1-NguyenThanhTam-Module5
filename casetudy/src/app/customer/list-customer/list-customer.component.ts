import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/Customer";
import {CustomerService} from "../service-customer/CustomerService";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  providers: [CustomerService],
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[];
  customer: Customer;

  constructor(private customerService: CustomerService) {

    this.customerList = this.customerService.getCustomer();
    this.customer = this.customerService.customer;


  }

  ngOnInit(): void {

  }


  getInFor(item: Customer) {
    this.customerService.getInFor(item);
  }


  deleteCustomer(customer: Customer) {
    this.customerService.deleteCustomer(customer)
  }


}

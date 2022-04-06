import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../service-customer/CustomerService";
import {ActivatedRoute} from "@angular/router";
import {Customer} from "../model/Customer";


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  providers: [CustomerService],
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  customerInFor: Customer;
  customerId: number;

  constructor(private customerService: CustomerService, private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'))
    this.customerId = Number(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    this.customerInFor = this.customerService.getId(this.customerId)
    console.log(this.customerInFor)
  }

}

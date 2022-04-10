import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/Customer";
import {CustomerService} from "../service-customer/CustomerService";
import {Router} from "@angular/router";
import {ApiCustomer} from "../api-customer/apiCustomer";
import {MatSnackBar} from "@angular/material/snack-bar";
import {validateHorizontalPosition} from "@angular/cdk/overlay";


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  providers: [CustomerService],
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[];
  customer: Customer;


  constructor(private customerService: ApiCustomer,
              private router: Router,
              private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.loadData();

  }

  private loadData() {
    this.customerService.getListCustomer().subscribe(data => {
      console.log(data)
      this.customerList = data;
    }, error => {
      console.log("ddang gawp loi")
    })
  }

  addCustomer() {
    this.router.navigate(['customer-form', -1])
  }


  getInFor(id: number) {
    this.customerService.getInFor(id).subscribe(data => {
      this.customer = data;
    }, error => {
      console.log("dang gawp loi")
    })
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      console.log("da xoa thanh cong");
      this.loadData();
    })


  }

  editCustomer(idCustomer: number) {
    this.router.navigate(['customer-form', idCustomer])
    // this.router.navigateByUrl(`customer-edit/`+idCustomer)
  }
}

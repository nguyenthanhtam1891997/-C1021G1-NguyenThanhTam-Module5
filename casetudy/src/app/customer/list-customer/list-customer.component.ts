import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/Customer";
import {CustomerService} from "../service-customer/CustomerService";
import {Router} from "@angular/router";
import {ApiCustomer} from "../api-customer/apiCustomer";
import {MatSnackBar} from "@angular/material/snack-bar";
import {validateHorizontalPosition} from "@angular/cdk/overlay";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  providers: [CustomerService],
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[];
  customer: Customer;
  p: number = 1;

  constructor(private customerService: ApiCustomer,
              private router: Router,
              private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.loadData();
    this.p = 1

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
    this.router.navigateByUrl('/customer-form/-1')
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
      this.snackBar.open('Đã xáo thành công', 'OK')
      this.loadData();
      this.p = 1
    })


  }

  editCustomer(idCustomer: number) {
    this.router.navigate(['customer-form', idCustomer])
    // this.router.navigateByUrl(`customer-edit/`+idCustomer)
  }

  search(value: string, value2: string) {

    this.customerService.getSearch(value, value2).subscribe(data => {
      console.log(data);
      this.customerList = data;
      this.p = 1;
    })

  }

  goToList() {
    this.loadData()
    this.p = 1
  }
}

import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/Customer";
import {CustomerService} from "../service-customer/CustomerService";
import {Router} from "@angular/router";
import {ApiCustomer} from "../api-customer/apiCustomer";
import {MatSnackBar} from "@angular/material/snack-bar";
import {validateHorizontalPosition} from "@angular/cdk/overlay";
import {MatDialog} from "@angular/material/dialog";
import {DiaglodCustomerComponent} from "../diaglod-customer/diaglod-customer.component";


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
              private snackBar: MatSnackBar,
              private dialog: MatDialog) {

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
    this.router.navigateByUrl('/customer-form/-1')
    // this.router.navigate(['customer-form', -1])
  }


  getInForDelete(id: number) {
    this.customerService.getInFor(id).subscribe(data => {
      // this.customer = data;
      const x = this.dialog.open(DiaglodCustomerComponent, {
        width: '700px',
        data: {datal: data},
      })
      x.afterClosed().subscribe(() => {
        console.log("dong dailog")
        this.ngOnInit();
      })
    }, error => {
      console.log("dang gawp loi")
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
      // this.ngOnInit();

      this.p = 1;
    }, error => {
      this.snackBar.open('Không tìm thấy tên bạn tìm kiếm', 'OK', {
        horizontalPosition: "center",
        duration: 3000,
        panelClass: ['notif-success'],
      });
    })

  }

  goToList() {
    this.loadData()
    this.p = 1
  }

  getInFor(id: number) {
    this.customerService.getInFor(id).subscribe(data => {
      this.customer = data;
    }, () => {
      console.log("dang gap loi")
    })
  }

  close() {
    this.ngOnInit()
  }
}

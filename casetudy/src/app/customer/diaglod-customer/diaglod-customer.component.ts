import {Component, Inject, OnInit} from '@angular/core';
import {CustomerService} from "../service-customer/CustomerService";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {Customer} from "../model/Customer";
import {ApiCustomer} from "../api-customer/apiCustomer";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-diaglod-customer',
  templateUrl: './diaglod-customer.component.html',
  styleUrls: ['./diaglod-customer.component.scss']
})
export class DiaglodCustomerComponent implements OnInit {
  customer: Customer;


  constructor(private customerService: ApiCustomer,
              private dialogRef: MatDialogRef<DiaglodCustomerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    console.log(this.data)
    this.customer = this.data.datal;
  }

  goToList() {
    this.dialogRef.close();
  }

  delete() {
    this.customerService.deleteCustomer(this.customer.id).subscribe(()=>{
      this.dialogRef.close()
      this.snackBar.open('đã xóa thành công','OK')
    })
  }
}

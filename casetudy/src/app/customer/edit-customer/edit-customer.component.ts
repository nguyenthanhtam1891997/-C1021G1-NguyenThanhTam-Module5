import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../model/Customer";
import {FormControl, FormGroup} from "@angular/forms";
import {ApiCustomer} from "../api-customer/apiCustomer";
import {CustomerType} from "../model/CustomerType";


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  providers: [ApiCustomer],
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  customerTypeList: CustomerType[];
  customerId: number;

  updateForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    dayOfBirth: new FormControl(''),
    gender: new FormControl(''),
    card: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    customerType: new FormControl('')
  })

  constructor(private customerService: ApiCustomer, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.customerId = Number(this.route.snapshot.paramMap.get('id'))
    console.log(this.customerId);
    this.getInFor();
    this.getListType()

  }

  private getListType() {
    this.customerService.getListTypeCustomer().subscribe(data => {
      this.customerTypeList = data;
      console.log(this.customerTypeList)
    })
  }

  private getInFor() {
    this.customerService.getInFor(this.customerId).subscribe(data => {
      this.updateForm.setValue(data)
      console.log(data)
    }, error => {
      console.log("dang co loi")
    })
  }

  public save() {
    this.customerService.updateCustomer(this.customerId, this.updateForm.value).subscribe(() => {
      console.log("da thay doi thanh cong");
      this.router.navigateByUrl("customer")
    })
  }

  // compareTech(T1: CustomerType, T2: CustomerType): boolean {
  //   return T1 && T2 ? T1.id === T2.id : T1 === T2
  // }

  // check(item: CustomerType) {
  //   if (item == this.updateForm.get('customerType').value) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}

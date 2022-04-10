import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../model/CustomerType";
import {ApiCustomer} from "../api-customer/apiCustomer";
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.scss']
})
export class FormCustomerComponent implements OnInit {
  customerTypeList: CustomerType[];
  customerId: number;

  customerForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    code: new FormControl('', [Validators.required, Validators.pattern('^(KH-)([0-9]{4})$')]),
    dayOfBirth: new FormControl('', [Validators.required, this.checkAge]),
    gender: new FormControl('', [Validators.required]),
    card: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
    address: new FormControl('', [Validators.required, Validators.minLength(5)]),
    customerType: new FormControl('', [Validators.required]),

  })


  constructor(private customerService: ApiCustomer,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getListType()
    this.customerId = Number(this.route.snapshot.paramMap.get('id'))
    this.checkForm();
  }


  private getListType() {
    this.customerService.getListTypeCustomer().subscribe(data => {
      this.customerTypeList = data;
      console.log(this.customerTypeList)
    })
  }

  private checkForm() {
    if (this.customerId > 0) {
      this.customerService.getInFor(this.customerId).subscribe(data => {
        this.customerForm.setValue(data)
        console.log(data)
      }, error => {
        console.log("dang co loi")
      })
    }
  }


  checkAge(dayOfBirth: AbstractControl) {
    console.log(dayOfBirth.value)
    const birth = new Date(dayOfBirth.value);
    console.log(birth)
    const birthDay = Date.now() - birth.getTime() - 86400000;
    const time = new Date(birthDay);
    const age = time.getUTCFullYear() - 1970;
    if (age < 18) {
      return {"ageEro": true}
    }
    console.log(age);
    return null;
  }

  save() {
    if (!this.customerForm.invalid) {
      if (this.customerId > 0) {
        this.customerService.updateCustomer(this.customerId, this.customerForm.value).subscribe(() => {
          console.log("da thay doi thanh cong");
          this.router.navigateByUrl("customer")
        })
      }
      this.customerService.addCustomer(this.customerForm.value).subscribe(() => {
        console.log("a");
        this.router.navigateByUrl("customer");
      })
    }
  }


}


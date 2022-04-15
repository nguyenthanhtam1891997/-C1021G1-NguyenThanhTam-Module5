import {Component, OnInit, DoCheck} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../model/CustomerType";
import {ApiCustomer} from "../api-customer/apiCustomer";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Customer} from "../model/Customer";


@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.scss']
})
export class FormCustomerComponent implements OnInit {

  customerTypeList: CustomerType[];
  customerId: number;
  customerList: Customer[];
  check: boolean = false;
  firsCode: string;
  checkCard: boolean = false;
  firsCard: string;
  listCard: string[];
  listCode: string[];
  checkInvalid: boolean;
  customerForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    code: new FormControl('', [Validators.required, Validators.pattern('^(KH-)([0-9]{4})$')]),
    dayOfBirth: new FormControl('', [Validators.required, this.checkAge]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    card: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
    address: new FormControl('', [Validators.required, Validators.minLength(5)]),
    customerType: new FormControl('', [Validators.required]),

  })


  constructor(private customerService: ApiCustomer,
              private route: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
    this.getListType()
    this.customerId = Number(this.route.snapshot.paramMap.get('id'));
    this.checkForm();
    this.getList();


  }


  private getListType() {
    this.customerService.getListTypeCustomer().subscribe(data => {
      this.customerTypeList = data;
      console.log(this.customerTypeList)
    })
  }

  getList() {
    this.customerService.getListCustomer().subscribe(data => {
      this.customerList = data
      this.listCode = data.map((item) => {
        return item.code
      })
      this.listCard = data.map((item) => {
        return item.card
      })
      // console.log(this.customerList)
      // console.log(this.listCode)
      // console.log(this.listCard)
    }, () => {
    }, () => {

      // if (this.firsCode == this.customerForm.get('code').value && this.firsCard == this.customerForm.get('card').value) {
      //   this.check = false;
      //   this.checkCard = false;
      // } else if (this.firsCode != this.customerForm.get('code').value && this.firsCard == this.customerForm.get('card').value){
      //    this.check = this.listCode.includes(this.customerForm.get('code').value);
      //   this.checkCard = false
      // }else if (this.firsCode == this.customerForm.get('code').value && this.firsCard != this.customerForm.get('card').value){
      //  this.check=false;
      //  this.checkCard=this.listCode.includes(this.customerForm.get('card').value)
      // }
      console.log(this.check);
      console.log(this.checkCard);
    })
  }


  private checkForm() {
    if (this.customerId > 0) {
      this.customerService.getInFor(this.customerId).subscribe(data => {
        this.customerForm.setValue(data)
        this.firsCode = this.customerForm.get('code').value;
        this.firsCard = this.customerForm.get('card').value;
        console.log(data)
        console.log(this.firsCode)
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
      if (this.customerId <= 0) {
        if (!this.listCode.includes(this.customerForm.get('code').value) &&
          !this.listCard.includes(this.customerForm.get('card').value)) {
          this.customerService.addCustomer(this.customerForm.value).subscribe(() => {
            console.log("a");
          }, () => {
          }, () => {
            this.snackBar.open("Đã thêm thành công", 'OK', {
              horizontalPosition: "center",
              duration: 3000,
              panelClass: ['form-success'],
            })
            this.router.navigateByUrl("customer");
            console.log("ad ok ")
          })
        }
      } else {
        if (this.check == false && this.checkCard == false) {
          this.customerService.updateCustomer(this.customerId, this.customerForm.value).subscribe(() => {
            console.log("đang update customer")
          }, () => {
            console.log("ddang update loi")
          }, () => {
            this.snackBar.open("Đã update thành công", "OK", {
              horizontalPosition: "center",
              duration: 3000,
              panelClass: ['form-success'],
            })
            this.router.navigateByUrl("customer")
          })
        }
      }
    }else {
      this.checkInvalid=true;
    }

  }

  checkCode() {
    if (this.firsCode != this.customerForm.get('code').value) {
      this.check = this.listCode.includes(this.customerForm.get('code').value);
    }

  }

  checkMeCard() {
    if (this.firsCard != this.customerForm.get('card').value) {
      this.checkCard = this.listCard.includes(this.customerForm.get('card').value);
    }

  }

// let a = this.customerForm.get('code').value;
  // let b = this.customerForm.get('card').value
  // this.customerService.searchAll(a, b).subscribe(data => {
  //   if (this.firsCode == data.code && this.firsCard == data.card) {
  //     this.customerService.updateCustomer(this.customerId, this.customerForm.value).subscribe(() => {
  //       console.log("đang update customer")
  //     }, () => {
  //       console.log("ddang update loi")
  //     }, () => {
  //       this.snackBar.open("Đã update thành công", "OK")
  //       this.router.navigateByUrl("customer")
  //     })
  //   }
  // }, () => {
  // this.customerService.updateCustomer(this.customerId, this.customerForm.value).subscribe(() => {
  //   console.log("đang update customer")
  // }, () => {
  //   console.log("ddang update loi")
  // }, () => {
  //   this.snackBar.open("Đã update thành công", "OK")
  //   this.router.navigateByUrl("customer")
  // })
  // console.log("khong tim thay")
  // if (!this.listCode.includes(this.customerForm.get('code').value) &&
  //   !this.listCard.includes(this.customerForm.get('card').value)) {
  // this.check = this.listCode.includes(this.customerForm.get('code').value)
  // this.checkCard = this.listCard.includes(this.customerForm.get('card').value)
  // this.customerService.updateCustomer(this.customerId, this.customerForm.value).subscribe(() => {
  //   console.log("đang update customer")
  // }, () => {
  //   console.log("ddang update loi")
  // }, () => {
  //   this.snackBar.open("Đã update thành công", "OK")
  //   this.router.navigateByUrl("customer")
  // })
  // console.log("update ok")
  // if (){}
  // }
  // })
  // this.checkMeCard();
  // if (!this.customerForm.invalid) {
  //   if (this.customerId <= 0) {
  //     this.customerService.searchCode(this.customerForm.get('code').value).subscribe(() => {
  //       console.log("co gia tri CODE")
  //       this.check = true;
  //     }, () => {
  //       this.check = false;
  //       console.log("không co gia tri CODE")
  //       if (this.checkCard == false) {
  //         this.customerService.addCustomer(this.customerForm.value).subscribe(() => {
  //           console.log("a");
  //         }, () => {
  //         }, () => {
  //           this.snackBar.open("Đã thêm thành công", 'OK')
  //           this.router.navigateByUrl("customer");
  //         })
  //         // console.log("add ok")
  //       }
  //     })
  //   } else {
  //     console.log("update")
  // this.customerService.searchCode(this.customerForm.get('code').value).subscribe(data => {
  //   let x: Customer = data
  //
  //   if (this.firsCode != x.code) {
  //     this.check = true
  //     console.log("co trong da ta ma khoong dung gia tri")
  //   } else {
  //     this.check = false;
  //     console.log("dung gia tri" + this.firsCode)
  //     this.customerService.updateCustomer(this.customerId, this.customerForm.value).subscribe(() => {
  //       console.log("update")
  //     }, () => {
  //     }, () => {
  //       this.snackBar.open("Đã update thành công", 'OK')
  //       this.router.navigateByUrl("customer");
  //     })
  //   }
  // }, () => {
  //   console.log("cai nay co the duoc")
  //   console.log(this.check)
  //   this.customerService.updateCustomer(this.customerId, this.customerForm.value).subscribe(() => {
  //     console.log("update")
  //   }, () => {
  //   }, () => {
  //     this.snackBar.open("Đã update thành công", 'OK')
  //     this.router.navigateByUrl("customer");
  //   })
  // })
  //   }
  // }
  // console.log(this.customerForm.value);

  // if (!this.customerForm.invalid) {
  //   this.checkCode();
  //   this.checkMeCard();
  //   if (this.checkCard == false && this.check == false) {
  //     if (this.customerId <= 0) {
  //       // this.customerService.addCustomer(this.customerForm.value).subscribe(() => {
  //       //   console.log("dang add customer")
  //       // }, () => {
  //       //   console.log("co loi say ra")
  //       // }, () => {
  //       //   this.snackBar.open("Đã thêm thành công", "OK")
  //       //   this.router.navigateByUrl("customer");
  //       // })
  //       console.log("add dduoc roi"+this.checkCard + this.check)
  //
  //     } else {
  //       this.customerService.updateCustomer(this.customerId, this.customerForm.value).subscribe(() => {
  //         console.log("đang update customer")
  //       }, () => {
  //         console.log("ddang update loi")
  //       }, () => {
  //         this.snackBar.open("Đã update thành công", "OK")
  //         this.router.navigateByUrl("customer")
  //       })
  //       console.log("update dduoc roi")
  //     }
  //
  //   }
  // }
}


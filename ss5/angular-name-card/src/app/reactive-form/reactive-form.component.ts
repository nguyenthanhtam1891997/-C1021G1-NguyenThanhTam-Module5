import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, this.checkAge]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)])


  }, {
    validators: (control => {
      if (control.value.password !== control.value.confirmPassword) {
        control.get('confirmPassword').setErrors({'notSame': true});
      }
      return null;
    })
  });

  countryList: string[] = [
    'Việt nam', 'Nhật bản', 'Anh', 'Pháp', 'Mỹ'
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  checkAge(dayOfBirth: AbstractControl) {
    console.log(dayOfBirth.value);
    const birth = new Date(dayOfBirth.value);
    console.log(birth);
    const birthDay = Date.now() - birth.getTime() - 86400000;
    const time = new Date(birthDay);
    const age = time.getUTCFullYear() - 1970;
    if (age < 18) {
      return {'ageEro': true};
    }
    console.log(age);
    return null;
  }

  // checkPassword(group: AbstractControl) {
  //   // : { invalid: boolean }
  //   console.log(group.value);
  //   console.log(group.get('confirmPassword').value);
  //   console.log();
  //   return null;
  //
  // }


  save() {
    if (!this.signUpForm.invalid) {
      console.log('đã dang ký thàng công');
    }
  }

  getValue(confirmPassword: AbstractControl) {
    console.log(this.signUpForm.get('password').value);

    return null;
  }


}

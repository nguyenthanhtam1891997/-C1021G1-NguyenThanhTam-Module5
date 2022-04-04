import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  tex = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  showValue(event) {
    console.log(event.target.defaultValue);
    this.tex += event.target.defaultValue;
  }

  showTarget() {
    // tslint:disable-next-line:no-eval
    this.tex = eval(this.tex);
  }

  delete() {
    this.tex = '';
  }

}

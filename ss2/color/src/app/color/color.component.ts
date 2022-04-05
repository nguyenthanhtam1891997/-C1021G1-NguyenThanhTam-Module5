import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  name: string;
  check: string;

  constructor() {

  }

  ngOnInit(): void {

  }

  click(value) {
    console.log(value.target.style.color);
    this.check = value.target.style.color;
  }

  tex() {
    console.log(this.check);
  }
}

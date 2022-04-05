import {Component, OnInit} from '@angular/core';
import {IStudent} from '../models/IStudent';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student1: IStudent = {
    id: 1,
    name: 'tâm',
    age: 22,
    address: 'đà năng',
    scores: 7
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  getValue(value: string) {
    this.student1.scores = Number(value);
  }
}

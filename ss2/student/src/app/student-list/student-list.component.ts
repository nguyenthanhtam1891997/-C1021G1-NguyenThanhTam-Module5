import {Component, OnInit} from '@angular/core';
import {IStudent} from '../models/IStudent';
import {StudentDao} from '../studentDao/StudentDao';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList: IStudent[];
  valueColor: string;

  constructor(private studentDao: StudentDao) {
    this.studentList = this.studentDao.getValue();
  }

  ngOnInit(): void {
  }

  changeColor(value: string) {
    this.valueColor = value;
  }
}

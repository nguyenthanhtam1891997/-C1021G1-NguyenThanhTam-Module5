import {IStudent} from '../models/IStudent';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDao {

  studentList: IStudent[] = [
    new IStudent(1, 'Thanh tam', 18, 'Đà nẵng', 4),
    new IStudent(2, 'le minh ho', 30, 'Đà nẵng', 8),
    new IStudent(3, 'oc sun hy', 24, 'Đà nẵng', 8),
    new IStudent(4, 'kim tan', 18, 'Đà nẵng', 3),
    new IStudent(5, 'maria okinaqa', 20, 'Đà nẵng', 8),
    new IStudent(6, 'kim te hi', 16, 'Đà nẵng', 8),
    new IStudent(7, 'bu dong suc', 18, 'Đà nẵng', 4),
    new IStudent(8, 'co da ma', 18, 'Đà nẵng', 8),
    new IStudent(9, 'khang co hinh', 18, 'Đà nẵng', 8),
  ];

  public getValue() {

    return this.studentList;
  }


}

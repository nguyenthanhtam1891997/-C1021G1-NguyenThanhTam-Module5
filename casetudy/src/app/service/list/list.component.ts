import {Component, OnInit} from '@angular/core';
import {Service} from "./service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  array: Service[] = [
    {
      name: "Phòng hoa hồng",
      image: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
    },
    {
      name: "Phòng hoa hồng",
      image: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
    },
    {
      name: "Phòng hoa hồng",
      image: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
    },
    {
      name: "Phòng hoa hồng",
      image: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
    },
    {
      name: "Phòng hoa hồng",
      image: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
    },
    {
      name: "Phòng hoa hồng",
      image: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
    }
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}

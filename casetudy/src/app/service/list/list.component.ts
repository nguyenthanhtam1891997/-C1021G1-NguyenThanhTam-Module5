import {Component, OnInit} from '@angular/core';
import {Service} from "../../models/service/service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  array: Service[] = [
    {
      id: 1,
      name: "Phòng hoa hồng",
      image: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
    },
    {
      id: 2,
      name: "Phòng hoa lài",
      image: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
    },
    {
      id: 3,
      name: "Phòng hoa vip",
      image: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
    },
    {
      id: 4,
      name: "Phòng hoa tình yeu",
      image: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
    },
    {
      id: 5,
      name: "Phòng hoa thang thiên",
      image: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
    },
    {
      id: 6,
      name: "Phòng hoa don tho",
      image: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
    }
  ];
  public tex: Service = {};

  constructor() {
  }

  ngOnInit(): void {
  }

  getValue(id: number) {
    for (let item of this.array) {
      if (id == item.id) {
        this.tex = item;
      }
    }
  }

  deleteValue() {
    this.array.splice(this.tex.id-1,1);
   // this.array.slice(this.tex.id-1,1);
  }
}

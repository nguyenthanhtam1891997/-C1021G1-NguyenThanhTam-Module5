import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from "../service/product-service.service";
import {Product} from "../model/Product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  constructor(private productService: ProductServiceService, private route: Router) {
  }

  ngOnInit(): void {
    this.productList = this.productService.getAll();
    console.log(this.productList)
  }

  add() {
    this.route.navigateByUrl("add");
  }

  eidt(id: number) {
    this.route.navigate(['edit', id])
  }
}

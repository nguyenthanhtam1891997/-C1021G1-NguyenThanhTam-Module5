import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from "../service/product-service.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  productForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private productService: ProductServiceService,private route:Router) {

  }

  ngOnInit(): void {
  }

  save(){
    this.productService.save(this.productForm.value)
    this.route.navigateByUrl("");
  }

}

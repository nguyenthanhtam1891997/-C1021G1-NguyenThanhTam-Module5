import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from "../service/product-service.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/Product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {



  productForm: FormGroup = new FormGroup({
    _id: new FormControl(''),
    _name: new FormControl(''),
    _price: new FormControl(''),
    _description: new FormControl(''),
  })
  idProduct: number;

  constructor(private productService: ProductServiceService,
              private route: Router,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.idProduct = Number(this.router.snapshot.paramMap.get('id'))
    console.log(this.idProduct)
    // this.productFormEdit.setValue(this.productService.getInFor(this.idProduct))
    // this.productService.getInFor(this.idProduct)
    const x = this.productService.getInFor(this.idProduct)
    this.productForm.setValue(x)
    console.log(this.productForm.value)

  }

  save() {
    console.log(this.productForm.value)
    this.productService.update( this.productForm.value)
    this.route.navigate([''])

    // for (let item in this.productList) {
    //   if (this.productList[item].id == this.idProduct) {
    //     this.productList[item] = this.productForm.value;
    //     this.productService.update(this.productList);
    //     break;
    //
    //   }
    // }
    // this.route.navigate([''])

  }
}

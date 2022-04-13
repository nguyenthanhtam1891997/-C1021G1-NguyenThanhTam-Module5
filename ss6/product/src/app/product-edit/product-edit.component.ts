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

  idProduct: number;

  productForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
  })


  constructor(private productService: ProductServiceService,
              private route: Router,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.idProduct = Number(this.router.snapshot.paramMap.get('id'));
    console.log(this.idProduct)
    this.checkForm()
  }

  save() {
    if (this.idProduct <= 0) {
      this.productService.add(this.productForm.value).subscribe(() => {
        console.log("da add")
      }, () => {
      }, () => {
        this.route.navigateByUrl('');
      })
    } else {
      this.productService.update(this.idProduct, this.productForm.value).subscribe(() => {
        console.log("da update");
      }, () => {
      }, () => {
        this.route.navigateByUrl('')
      })
    }
  }

  checkForm() {
    if (this.idProduct > 0) {
      this.productService.getInFor(this.idProduct).subscribe(data => {
        this.productForm.setValue(data)
      })
    }
  }
}

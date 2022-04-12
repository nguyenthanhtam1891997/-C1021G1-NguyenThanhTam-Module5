import {Injectable} from '@angular/core';
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  productList: Product[] = [
    new Product(1, 'IPhone 12', 2400000, 'New'),
    new Product(2, 'IPhone 11', 1560000, 'Like new'),
    new Product(3, 'IPhone X', 968000, '97%'),
    new Product(4, 'IPhone 8', 7540000, '98%'),
    new Product(1, 'IPhone 11 Pro', 1895000, 'Like new'),

  ]


  constructor() {
  }

  getAll() {
    return this.productList;
  }

  save(product: Product) {
    this.productList.push(product);
  }

  update(product: Product) {
    for (let i in this.productList) {
      if (this.productList[i].id == product.id) {
        this.productList[i] = product;
        console.log(this.productList)
      }
    }
    // this.productList = productList;
  }

  getInFor(id: number) {

    console.log(id)
    for (let item of this.productList) {
      if (item.id == id) {
        console.log(item)
        return item;
      }
    }

  }
}

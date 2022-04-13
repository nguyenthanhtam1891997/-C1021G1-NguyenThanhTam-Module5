import {Injectable} from '@angular/core';
import {Product} from "../model/Product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private readonly API_URL = 'http://localhost:3000/Product'

  constructor(private http: HttpClient) {
  }

  getList() {
    // return this.http.get<Customer[]>(this.API_URL)
    return this.http.get<Product[]>(this.API_URL);
  }

  getInFor(id: number) {
    return this.http.get<Product>(`${this.API_URL}/` + id)
  }

  add(product: Product) {
    return this.http.post(this.API_URL, product)
  }

  update(id: number, product: Product) {
    return this.http.put(`${this.API_URL}/` + id, product)
  }

  delete(id: number) {
    return this.http.delete(`${this.API_URL}/` + id)
  }
}

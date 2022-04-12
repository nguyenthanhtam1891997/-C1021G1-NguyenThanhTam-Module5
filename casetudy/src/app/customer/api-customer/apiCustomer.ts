import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

import {CustomerType} from "../model/CustomerType";
import {Customer} from "../model/Customer";

@Injectable({
  providedIn: 'root'
})
export class ApiCustomer {
  private readonly API_URL = 'http://localhost:3000/customerList'
  private readonly API_TYPE_URL = 'http://localhost:3000/customerType'
  private readonly API_SPRING = 'http://localhost:8080/api/'

  constructor(private http: HttpClient) {
  }


  getListCustomer() {
    // return this.http.get<Customer[]>(this.API_URL)
    return this.http.get<Customer[]>(`${this.API_SPRING}customer`);
  }

  addCustomer(data) {
    return this.http.post<Customer>(`${this.API_SPRING}creat`, data);
  }

  deleteCustomer(idCustomer: number) {
    // return this.http.delete(`${this.API_URL}/` + idCustomer);
    return this.http.delete(`${this.API_SPRING}customer/` + idCustomer);
  }

  getInFor(idCustomer: number) {
    // return this.http.get<Customer>(`${this.API_URL}/` + idCustomer);
    return this.http.get<Customer>(`${this.API_SPRING}customer/` + idCustomer);
  }

  updateCustomer(idCustomer: number, value: Customer) {
    // return this.http.put(`${this.API_URL}/` + idCustomer, value);
    return this.http.put(`${this.API_SPRING}customer/` + idCustomer, value);
  }

  getListTypeCustomer() {

    return this.http.get<CustomerType[]>(`${this.API_SPRING}type`);
    // return this.http.get<CustomerType[]>(this.API_TYPE_URL);
  }

  getSearch(name: string, address: string) {

    // return this.http.get<Customer[]>(this.API_URL,{params:httpParams})
    return this.http.get<Customer[]>(this.API_SPRING +"search?" + "name="+name +"&address=" + address )
  }

}

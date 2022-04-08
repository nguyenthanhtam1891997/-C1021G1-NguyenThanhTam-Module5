  import {Injectable} from "@angular/core";
  import {HttpClient} from "@angular/common/http";
  import {Observable} from "rxjs";

  import {CustomerType} from "../model/CustomerType";
  import {Customer} from "../model/Customer";

  @Injectable({
    providedIn: 'root'
  })
  export class ApiCustomer {
    private readonly API_URL = 'http://localhost:3000/customerList'
    private readonly API_TYPE_URL = 'http://localhost:3000/customerType'

    constructor(private http: HttpClient) {
    }


    getListCustomer() {
      return this.http.get<Customer[]>(this.API_URL)
    }

    addCustomer(data) {
      return this.http.post<Customer>(this.API_URL, data);
    }

    deleteCustomer(idCustomer: number) {
      return this.http.delete(`${this.API_URL}/` + idCustomer);
    }

    getInFor(idCustomer: number) {
      return this.http.get<Customer>(`${this.API_URL}/` + idCustomer);
    }

    updateCustomer(idCustomer: number, value: Customer) {
      return this.http.put(`${this.API_URL}/` + idCustomer, value);
    }

    getListTypeCustomer() {
      return this.http.get<CustomerType[]>(this.API_TYPE_URL);
    }
  }

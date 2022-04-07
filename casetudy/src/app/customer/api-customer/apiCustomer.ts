import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/Customer";

@Injectable({
  providedIn: 'root'
})
export class ApiCustomer {
  private readonly API_URL = 'http://localhost:3000/customerList'

  constructor(private http: HttpClient) {
  }


  getListCustomer() {
    return this.http.get<Customer[]>(this.API_URL)
  }

  addCustomer(data)  {
    return this.http.post<Customer>(this.API_URL, data)
  }
}

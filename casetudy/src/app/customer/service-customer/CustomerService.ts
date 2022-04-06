import {Injectable} from '@angular/core';
import {Customer} from "../model/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [
    new Customer(1, "tam", "18/10/1997", "nam", "123456789", "1345689", "danang"),
  new Customer(2, "tam", "18/10/1997", "nam", "123456789", "1345689", "danang"),
  new Customer(3, "tam", "18/10/1997", "nam", "123456789", "1345689", "danang"),
  new Customer(4, "tam", "18/10/1997", "nam", "123456789", "1345689", "danang"),
  new Customer(5, "tam", "18/10/1997", "nam", "123456789", "1345689", "danang"),
  new Customer(6, "tam", "18/10/1997", "nam", "123456789", "1345689", "danang"),
];
  customer: Customer;

  public getCustomer() {
    return this.customers;
  }

  public getInFor(customer: Customer) {
    for (let item of this.customers) {
      if (item == customer) {
        this.customer = item;
        console.log(this.customer)
      }
    }
  }


  deleteCustomer(customer: Customer) {
    this.customers.splice(customer.id - 1, 1);
  }

  addCustomer(customer: Customer) {

  }

  getId(id: number) {
    for (let item of this.customers){
      if (item.id==id){
        return item;
      }
    }
  }
}

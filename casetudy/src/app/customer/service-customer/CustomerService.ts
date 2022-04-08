import {Injectable} from '@angular/core';
import {Customer} from "../model/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // customers: Customer[] = [
  //   new Customer(1, "asdasdas", "18/10/1997", "nam", "123456789", "1345689", "danang"),
  //   new Customer(2, "tam", "18/10/1997", "nam", "123456789", "1345689", "danang"),
  //   new Customer(3, "tam", "18/10/1997", "nam", "123456789", "1345689", "danang"),
  //   new Customer(4, "tam", "18/10/1997", "nam", "123456789", "1345689", "danang"),
  //   new Customer(5, "tam", "18/10/1997", "nam", "123456789", "1345689", "danang"),
  //   new Customer(6, "tam", "18/10/1997", "nam", "123456789", "1345689", "danang"),
  // ];
  // customer: Customer;
  //
  //
  //
  //
  // // public getCustomer() {
  // //   for (let item of this.customers) {
  // //     console.log(item)
  // //
  // //   }
  // //   console.log("day la get cútomers")
  // //   return this.customers;
  // // }
  //
  // public getInFor(customer: Customer) {
  //   console.log("day la getcustomer")
  //   for (let item of this.customers) {
  //     if (item == customer) {
  //       return item;
  //       console.log(this.customer)
  //     }
  //   }
  // }
  //
  //
  // deleteCustomer(customer: Customer) {
  //   this.customers.splice(customer.id - 1, 1);
  // }
  //
  // addCustomer(customer: Customer) {
  //   this.customers.push(customer)
  // }
  //
  // getId(id: number) {
  //   for (let item of this.customers) {
  //     if (item.id == id) {
  //       return item;
  //     }
  //   }
  // }
  //
  // updateCustomer(customerEdit: Customer) {
  //   // this.customers.splice(customerEdit.id - 1, 1, customerEdit)
  //
  //   // console.log("ben sẻvice")
  //   // for (let item of this.customers) {
  //   //   if (item.id == customerEdit.id) {
  //   //     item.name = customerEdit.name;
  //   //     item.gender = customerEdit.gender;
  //   //     item.dayOfBirth = customerEdit.dayOfBirth;
  //   //     item.card = customerEdit.card;
  //   //     item.phone = customerEdit.phone;
  //   //     item.address = customerEdit.address;
  //   //   }
  //   // }
  //   // for (let item of this.customers) {
  //   //   console.log(item);
  //   // }
  //   //
  //   console.log(customerEdit)
  //   console.log("ben sẻvice")
  //   this.customers.map((todo, i) => {
  //     if (todo.id == customerEdit.id) {
  //       this.customers[i] = customerEdit
  //     }
  //   })
  //   return this.customers;
  // }
  //
  // getList(){
  //   console.log(this.customers)
  //   return this.customers;
  // }
}

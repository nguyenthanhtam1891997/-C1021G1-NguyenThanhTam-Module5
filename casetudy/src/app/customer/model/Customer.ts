// import {CustomerType} from "./CustomerType";

export class Customer {
  id:number;
  name:string;
  dayOfBirth:string;
  gender:string;
  card:string;
  phone:string;
  address:string;
  // customerType:CustomerType;

  constructor(id: number, name: string, dayOfBirth: string, gender: string, card: string, phone: string, address: string) {
    this.id = id;
    this.name = name;
    this.dayOfBirth = dayOfBirth;
    this.gender = gender;
    this.card = card;
    this.phone = phone;
    this.address = address;
    // this.customerType = customerType;
  }
}

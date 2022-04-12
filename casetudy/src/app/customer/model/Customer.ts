import {CustomerType} from "./CustomerType";

export class Customer {
  private _id: number;
  private _code:string;
  private _name: string;
  private _dayOfBirth: string;
  private _gender: string;
  private _card: string;
  private _phone: string;
  private _address: string;
  private _email:string;
  private _customerType: CustomerType;


  constructor(id: number, code: string, name: string, dayOfBirth: string, gender: string, card: string, phone: string, address: string, email: string, customerType: CustomerType) {
    this._id = id;
    this._code = code;
    this._name = name;
    this._dayOfBirth = dayOfBirth;
    this._gender = gender;
    this._card = card;
    this._phone = phone;
    this._address = address;
    this._email = email;
    this._customerType = customerType;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get dayOfBirth(): string {
    return this._dayOfBirth;
  }

  set dayOfBirth(value: string) {
    this._dayOfBirth = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get card(): string {
    return this._card;
  }

  set card(value: string) {
    this._card = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get customerType(): CustomerType {
    return this._customerType;
  }

  set customerType(value: CustomerType) {
    this._customerType = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}

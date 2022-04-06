export class IStudent {
  id?: number;
  name?: string;
  age?: number;
  address?: string;
  scores?: number;

  constructor(id: number, name: string, age: number, address: string, scores: number) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
    this.scores = scores;
  }
}




export class CustomerType {
  private _id: number;
  private _nameType: string

  constructor(id: number, nameType: string) {
    this._id = id;
    this._nameType = nameType;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nameType(): string {
    return this._nameType;
  }

  set nameType(value: string) {
    this._nameType = value;
  }
}

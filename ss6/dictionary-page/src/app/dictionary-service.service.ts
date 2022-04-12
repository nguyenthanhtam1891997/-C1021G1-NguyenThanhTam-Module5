import { Injectable } from '@angular/core';
import {IWord} from './model/IWord';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  dictionaries: IWord[] = [{
    word: 'Hello',
    mean: 'Xin chào'
  },
    {
      word: 'Mango',
      mean: 'Quả xoài'
    },
    {
      word: 'Helicopter',
      mean: 'Trực thăng'
    },
    {
      word: 'Alligator',
      mean: 'Cá sấu'
    },
    {
      word: 'Turtle',
      mean: 'Con rùa'
    },
    {
      word: 'cucumber',
      mean: 'Dưa chuột'
    },
    {
      word: 'Bear',
      mean: 'Con gấu'
    },
    {
      word: 'Fruits',
      mean: 'Trái cây'
    },
  ];


  constructor() { }

  getAll() {
    return this.dictionaries;
  }
}

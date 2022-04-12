import { Component, OnInit } from '@angular/core';
import {IWord} from '../model/IWord';
import {DictionaryServiceService} from '../dictionary-service.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  dictionaries: IWord[] = [];
  constructor(private DictionaryServiceService: DictionaryServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.dictionaries = this.DictionaryServiceService.getAll();
  }

  // onsubmit() {
  //   this.dictionaries =
  // }
}

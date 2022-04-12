import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DictionaryServiceService} from '../dictionary-service.service';
import {IWord} from '../model/IWord';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  result = '';
  value: IWord[];
  test: string;
  constructor(private route: ActivatedRoute, private dictionaryService: DictionaryServiceService) { }

  ngOnInit(): void {
    this.result = this.route.snapshot.paramMap.get('value');
    console.log(this.result);
    this.getValue();
  }
  getValue() {
    this.value = this.dictionaryService.dictionaries;
    for (let item of this.value){
      if (this.result == item.word) {
          this.test = item.mean;
      }
    }
  }

}

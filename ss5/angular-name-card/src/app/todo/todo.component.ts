import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
  constructor() {
  }

  ngOnInit(): void {
  }
  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { TodoService } from '../service/todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-creat-todo',
  templateUrl: './creat-todo.component.html',
  styleUrls: ['./creat-todo.component.css']
})
export class CreatTodoComponent implements OnInit {
  createForm: FormGroup;

  constructor(private todoService: TodoService, private router: Router) {
  }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      id: new   FormControl(),
      content: new FormControl(),
      complete: new FormControl(),
    });
    this.createForm.patchValue({
        complete: false
      }
    );
  }

  createTodo() {
    console.log(this.createForm.value);
    this.todoService.create(this.createForm.value).subscribe(() => {
      this.router.navigateByUrl('');
    });
  }

}

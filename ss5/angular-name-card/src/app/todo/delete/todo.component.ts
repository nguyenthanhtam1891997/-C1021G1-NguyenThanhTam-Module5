import {Component, OnInit} from '@angular/core';
import {Todo} from '../../todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../service/todo.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: Todo;

  // @ts-ignore
  constructor(private todoService: TodoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.todoService.findById(id).subscribe(value => {
      this.todo = value;
    });
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe(() =>
      this.router.navigateByUrl(''));
  }

}

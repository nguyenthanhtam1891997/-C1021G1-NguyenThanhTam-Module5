import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  updateForm: FormGroup;
  todo = new Todo();
  constructor(private todoService: TodoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.todoService.findById(id).subscribe(value => {
        this.todo = value;
      }, error => {
      },
      () => this.updateForm.patchValue(this.todo));
    this.updateForm = new FormGroup({
      id: new FormControl(),
      content: new FormControl(),
      complete: new FormControl()
    });
  }

  updateTodo() {
    this.todoService.update(this.updateForm.value).subscribe(() =>
      this.router.navigateByUrl(''));
  }


}

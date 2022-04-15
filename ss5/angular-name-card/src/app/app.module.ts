import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoComponent} from './todo/delete/todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {LoginformComponent} from './loginform/loginform.component';
import { CreatTodoComponent } from './todo/creat-todo/creat-todo.component';
import { EditTodoComponent } from './todo/edit-todo/edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ReactiveFormComponent,
    LoginformComponent,
    CreatTodoComponent,
    EditTodoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoComponent} from './todo/delete/todo.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {LoginformComponent} from './loginform/loginform.component';


const routes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'form', component: ReactiveFormComponent},
  {path: 'login', component: LoginformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from "./body/body.component";
import {ListComponent} from "./service/list/list.component";


const routes: Routes = [
  {path:"",component:BodyComponent},
  {path:"home",component:BodyComponent},
  {path:"service",component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

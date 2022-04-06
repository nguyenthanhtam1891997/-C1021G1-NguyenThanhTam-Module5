import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from "./body/body.component";
import {ListComponent} from "./service/list/list.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {EditCustomerComponent} from "./customer/edit-customer/edit-customer.component";


const routes: Routes = [
  {path:"",component:BodyComponent},
  {path:"home",component:BodyComponent},
  {path:"customer",component:ListCustomerComponent},
  {path:"customer-edit/:id",component:EditCustomerComponent},
  {path:"service",component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

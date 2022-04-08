import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from "./body/body.component";
import {ListComponent} from "./service/list/list.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {EditCustomerComponent} from "./customer/edit-customer/edit-customer.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {FormCustomerComponent} from "./customer/form-customer/form-customer.component";


const routes: Routes = [
  {path:"",component:BodyComponent},
  {path:"home",component:BodyComponent},
  {path:"customer",component:ListCustomerComponent},
  {path:"customer-add",component:CreateCustomerComponent},
  {path:"customer-edit/:id",component:EditCustomerComponent},
  {path:"customer-form/:id",component:FormCustomerComponent},
  {path:"service",component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

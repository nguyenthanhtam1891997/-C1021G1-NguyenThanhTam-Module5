import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadedComponent } from './headed/headed.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ListComponent } from './service/list/list.component';
import { CreatServiceComponent } from './service/creat-service/creat-service.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormCustomerComponent } from './customer/form-customer/form-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadedComponent,
    FooterComponent,
    BodyComponent,
    ListComponent,
    CreatServiceComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    FormCustomerComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

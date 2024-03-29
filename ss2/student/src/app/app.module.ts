import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StudentComponent} from './student/student.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

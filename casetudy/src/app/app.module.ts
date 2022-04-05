import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadedComponent } from './headed/headed.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ListComponent } from './service/list/list.component';
import { CreatServiceComponent } from './service/creat-service/creat-service.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadedComponent,
    FooterComponent,
    BodyComponent,
    ListComponent,
    CreatServiceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

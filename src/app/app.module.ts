import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpcreateComponent } from './empcreate/empcreate.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmpeditComponent } from './empedit/empedit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpcreateComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    EmployeelistComponent,
    EmpdetailComponent,
    EmpeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

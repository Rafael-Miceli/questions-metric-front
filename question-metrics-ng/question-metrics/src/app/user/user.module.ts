import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';


const userRoutes: Routes = [
  { path: 'Login', component: LoginComponent }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [

  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class UserModule { }

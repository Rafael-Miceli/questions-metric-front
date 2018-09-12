import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';


const userRoutes: Routes = [{ path: 'login', component: LoginComponent }];

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatOptionModule,
  MatSelectModule
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(userRoutes),
    FormsModule,
    ...modules],
  providers: [AuthGuard, UserService]
})
export class UserModule {}

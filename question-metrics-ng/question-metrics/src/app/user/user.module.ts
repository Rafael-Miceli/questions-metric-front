import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';

const userRoutes: Routes = [{ path: 'login', component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  imports: [RouterModule.forChild(userRoutes)],
  providers: [AuthGuard, UserService]
})
export class UserModule {}

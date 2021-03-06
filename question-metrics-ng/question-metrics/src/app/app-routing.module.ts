import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './dashboard/shell.component';
import { PageNotFoundComponent } from './dashboard/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './user/auth-guard.service';

const appRoutes: Routes = [
    { path: '', component: ShellComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
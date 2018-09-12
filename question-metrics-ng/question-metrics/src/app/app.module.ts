import { APP_INITIALIZER } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShellComponent } from './dashboard/shell.component';
import { PageNotFoundComponent } from './dashboard/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppSettingsService } from './app-settings.service';

export function configFactory(config: AppSettingsService) {
  return () => config.load();
}

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [
    AppSettingsService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [AppSettingsService],
      multi: true
    }
  ]
})
export class AppModule {}

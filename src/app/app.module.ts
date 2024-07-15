import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KansasDashboardComponent } from './kansas-dashboard/kansas-dashboard.component';
import { ColumbiaDashboardComponent } from './columbia-dashboard/columbia-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KansasDashboardComponent,
    ColumbiaDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

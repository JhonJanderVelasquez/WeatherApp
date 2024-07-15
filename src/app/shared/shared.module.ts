import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    WeatherDashboardComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherDashboardComponent,
    HeaderComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ReturnHomeComponent } from './return-home/return-home.component';


@NgModule({
  declarations: [
    WeatherDashboardComponent,
    HeaderComponent,
    ReturnHomeComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherDashboardComponent,
    HeaderComponent,
    ReturnHomeComponent
  ]
})
export class SharedModule { }

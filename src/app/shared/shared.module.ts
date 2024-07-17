import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ReturnHomeComponent } from './return-home/return-home.component';
import { CloudIconComponent } from './resources/cloud-icon/cloud-icon.component';
import { WeatherCityCardComponent } from './weather-city-card/weather-city-card.component';


@NgModule({
  declarations: [
    WeatherDashboardComponent,
    HeaderComponent,
    ReturnHomeComponent,
    CloudIconComponent,
    WeatherCityCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherDashboardComponent,
    HeaderComponent,
    ReturnHomeComponent,
    CloudIconComponent,
    WeatherCityCardComponent
  ]
})
export class SharedModule { }

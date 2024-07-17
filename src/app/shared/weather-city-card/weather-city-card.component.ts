import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-city-card',
  templateUrl: './weather-city-card.component.html',
  styleUrls: ['./weather-city-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherCityCardComponent {

  @Input() city!: string;

}

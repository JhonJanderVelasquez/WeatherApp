import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly URL_KANSAS_WEATHER = 'https://api.weather.gov/gridpoints/TOP/31,80/forecast'
  private readonly URL_COLUMBIA_WEATHER = 'https://api.weather.gov/gridpoints/LWX/31,80/forecast'

  constructor(private http: HttpClient) { }

  LoadWeatherByCity(city: string){
    if (city == 'kansas'){
      return this.http.get<any>(this.URL_KANSAS_WEATHER)
    }
    if (city == 'columbia') {
      return this.http.get<any>(this.URL_COLUMBIA_WEATHER)
    } else {
      return null
    }
  }
}

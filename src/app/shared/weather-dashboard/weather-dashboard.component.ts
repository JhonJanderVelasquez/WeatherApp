import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js/auto';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherInfo } from 'src/app/interfaces/weatherInfo';
Chart.register(...registerables)


@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherDashboardComponent implements OnInit {
  @Input() titleChart!: string;
  @Input() city!: string;
  
  public chart!: Chart;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.LoadWeatherByCity(this.city)?.subscribe(

      (result) => {
        if (result){
          console.log(result);

          const new_data: WeatherInfo = result.properties.periods.reduce((acc: any, { name, temperature, isDaytime }: any) => {
            if (isDaytime){
              acc.isDay.name.push(name);
              acc.isDay.temperature.push(temperature);
              acc.isNight.name.push(name);
              acc.isNight.temperature.push(null);
            } else if (!isDaytime){
              acc.isNight.name.push(name);
              acc.isNight.temperature.push(temperature);
              acc.isDay.name.push(name);
              acc.isDay.temperature.push(null);
            }
            return acc;

          }, { isDay: {name: [], temperature: []}, isNight: {name: [], temperature: []} });

          console.log(new_data);

          const data = {
            labels: new_data.isNight.name,
            datasets: [{
              label: 'Day Temperature',
              data: new_data.isDay.temperature,
              fill: false,
              borderColor: '#AFD2E9',
              backgroundColor: '#fff',
              spanGaps:true,
              // scaleFontColor: "#FFFFFF",
              // pointLabelFontColor : "#FFFFFF",
              // pointLabelFontSize : 30,
              tension: 0.1
            },
            {
              label: 'Night Temperature',
              data: new_data.isNight.temperature,
              fill: false,
              borderColor: '#000',
              backgroundColor: 'rgb(48, 59, 94)',
              scaleFontColor: "#000",
              pointLabelFontColor : "#000",
              pointLabelFontSize : 30,
              spanGaps:true,
              tension: 0.1
            }]
          };

          this.chart = new Chart("chart", {
            type: 'line' as ChartType,
            data: data,
            options: {
              plugins: {
                legend: {
                  labels: {
                    color: 'rgb(230,230,230)',
                    font: {
                        size: 12,
                    }
                  }
                },
                title:{
                  display: true,
                  text: this.titleChart,
                  color: '#fff',
                  font:{
                    size:20
                  }
                },
                tooltip: {
                  backgroundColor: '#004984',
                  titleColor: '#000',
                  footerColor: '#000',
                  borderColor: 'rgba(100, 100, 100, 100)'
                }
              },
              scales: {
                x: {
                  title: {
                    text: 'Next 7 days',
                    display: true,
                    color: '#AFD2E9'
                  },
                  ticks: {
                    color: "white"
                  },
                  grid: {
                    color: 'rgba(100,100,100,0.5)',
                  }
                },
                y: {
                  title: {
                    text: 'Temperature',
                    display: true,
                    color: '#AFD2E9'
                  },
                  ticks: {
                    color: "white",
                    callback: function(value, index, ticks) {
                      return value + ' °F';
                    }
                  },
                  grid: {
                    color: 'rgba(100,100,100,0.5)',
                  }
                },

              }
          }
          })
          Chart.defaults.color = 'rgb(100,100,100)';
          Chart.defaults.backgroundColor = '#000';

        }
      }
    )
  }
}

export interface WeatherInfo {
    isDay: {
      name: string[];
      temperature: number[];
    },
    isNight: {
      name: string[];
      temperature: number[];
    }
  }
export interface MainData {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface WeatherData {
  main: string;
}

export interface DataInterface {
  main: MainData[];
  weather: WeatherData[];
  name: string;
  speed: number;
}

export {};

import { WeatherData } from "store/weatherApp/types";

export interface CardProps {
 CityWeather?: WeatherData;
 isHomePage?: boolean;
 error?: string;
}

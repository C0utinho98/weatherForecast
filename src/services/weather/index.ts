import { api } from "../api";
import { PropsgetWeatherByLocation, WeatherResponse } from "./model";



export const getWeatherByLocation = async ({ city, lat, lon }: PropsgetWeatherByLocation) => {
    const response = await api.get<WeatherResponse>("weather", { params: { lat, lon, q: city } })
    return response;
}


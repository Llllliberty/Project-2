import axios from "axios";

export const getForecastData = async () => {
    const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=73c2689e5118ec15d2b087424c70cf17&units=metric");
    return response.data;   
}
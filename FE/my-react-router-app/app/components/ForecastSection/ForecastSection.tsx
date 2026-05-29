import { useEffect, useState, type ComponentType } from "react";
import { getForecastData } from "~/api/openWeatherApi";

type WeatherIcon = ComponentType<{
    size?: number | string;
    color?: string;
}>;

type WeatherIcons = {
    sunny: WeatherIcon;
    cloudy: WeatherIcon;
    rain: WeatherIcon;
};

const getIconForWeather = (description: string, icons: WeatherIcons) => {
    const weatherMap: Record<string, WeatherIcon> = {
        "clear sky": icons.sunny,
        "few clouds": icons.cloudy,
        "broken clouds": icons.cloudy,
        "overcast clouds": icons.cloudy,
        "light rain": icons.rain,
    };

    return weatherMap[description] ?? icons.cloudy;
};

const getWeatherKeyword = (description: string) => {
    const words = description.trim().split(/\s+/);

    return (words[words.length - 1] ?? description).toUpperCase();
};

const getWeekdayLabel = (timestamp: number) => {
    return new Date(timestamp * 1000)
        .toLocaleDateString("en-US", {
            weekday: "short",
        })
        .toUpperCase();
};

const ForecastSection = () => {
    const [forecastData, setForecastData] = useState<any[]>([]);
    const [icons, setIcons] = useState<WeatherIcons | null>(null);

    useEffect(() => {
        const loadIcons = async () => {
            const {
                WiDaySunny,
                WiDaySunnyOvercast,
                WiRainMix,
            } = await import("weather-icons-react");

            setIcons({
                sunny: WiDaySunny,
                cloudy: WiDaySunnyOvercast,
                rain: WiRainMix,
            });
        };

        loadIcons();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const forecastData = await getForecastData();
            setForecastData(
                forecastData.list.filter((item: any) => item.dt_txt.includes("12:00:00"))
            );
        }
        fetchData();

    }, [])

    return (
        <div className="flex basis-[60%] justify-between gap-8 p-10">
            {forecastData.map((item: any) => (
                <div className="flex min-w-24 flex-col items-center" key={item.dt}>
                    <h2 className="text-2xl font-bold">
                        {getWeekdayLabel(item.dt)}
                    </h2>
                    {icons ? (
                        (() => {
                            const Icon = getIconForWeather(
                                item.weather[0].description,
                                icons
                            );

                            return <Icon size={100} color="#0f172a" />;
                        })()
                    ) : null}
                    <p className="text-xl font-bold">{parseInt(item.main.temp,10)}°C</p>
                    <p className="text-lg font-extralight">
                        {getWeatherKeyword(item.weather[0].description)}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ForecastSection;

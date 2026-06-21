export const getForecastData = async () => {
    const response = await fetch("/api/weather");

    if (!response.ok) {
        throw new Error("Failed to fetch forecast data");
    }

    return response.json();
};

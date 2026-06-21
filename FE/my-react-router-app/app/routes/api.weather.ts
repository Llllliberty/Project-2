export const loader = async () => {
    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!apiKey) {
        return Response.json(
            { error: "OPENWEATHER_API_KEY is not configured" },
            { status: 500 }
        );
    }

    const params = new URLSearchParams({
        lat: "44.34",
        lon: "10.99",
        appid: apiKey,
        units: "metric",
    });

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?${params.toString()}`
    );

    if (!response.ok) {
        return Response.json(
            { error: "Failed to fetch OpenWeather forecast" },
            { status: response.status }
        );
    }

    return Response.json(await response.json());
};

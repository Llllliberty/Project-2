import "./Currentweathersection.css"

const CurrentWeatherSection = () => {
    return (
        <div
            className="flex items-start justify-between gap-28 px-28 pt-16 pb-36 text-white"
            style={{
                background:
                    "linear-gradient(to bottom, #777eb7 0%, #a99bc3 18%, #f4b8b9 100%)",
            }}
        >
            <div className="text-center">
                <div>
                    <h2 className="text-9xl leading-none">12</h2>
                    <p className="mt-6 text-4xl tracking-wide">CLOUDY</p>
                </div>
                <div className="mt-12 flex items-center justify-center gap-8">
                    <div>
                        <p>Humidity </p>
                        <p>80%</p>
                    </div>
                    <hr style={{background: "white", width: "2px", height: "45px"}}/>
                    <div>
                        <p>Wind </p>
                        <p>15 km/h</p>
                    </div>
                </div>
            </div>
            <div className="pt-2">
                <h2 className="text-4xl city-title">FRANCE</h2>
            </div>
        </div>
    );
};

export default CurrentWeatherSection;

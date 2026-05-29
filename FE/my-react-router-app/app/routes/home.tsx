import type { Route } from "./+types/home";
import SocialMediaSection from "~/components/SocialMediaSection/SocialMediaSection";
import CurrentWeatherSection from "~/components/CurrentWeatherSection/CurrentWeatherSection";
import ForecastSection from "~/components/ForecastSection/ForecastSection";
import "./home.css"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg flex items-center justify-center">
      <div className="w-[1200px] overflow-hidden rounded-lg bg-white text-black">
        <CurrentWeatherSection />
        <div className="flex">
          <SocialMediaSection />
          <ForecastSection />
        </div>
      </div>
    </div>
  )
}

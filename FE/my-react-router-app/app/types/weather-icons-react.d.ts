declare module "weather-icons-react" {
  import type { ComponentType, SVGProps } from "react";

  type WeatherIconProps = SVGProps<SVGSVGElement> & {
    size?: number | string;
    color?: string;
  };

  export const WiDaySunny: ComponentType<WeatherIconProps>;
  export const WiDaySunnyOvercast: ComponentType<WeatherIconProps>;
  export const WiRainMix: ComponentType<WeatherIconProps>;
}

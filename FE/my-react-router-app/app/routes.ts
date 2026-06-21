import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("api/weather", "routes/api.weather.ts"),
] satisfies RouteConfig;

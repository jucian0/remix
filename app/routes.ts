import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("/about", "./routes/about.tsx"),
    route("/contact", "./routes/contact.tsx"),
    route("/color-scheme", "./routes/color-scheme.tsx")
] satisfies RouteConfig;

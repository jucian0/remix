import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "react-router";

import { Toast } from "ui"
import { AppNavbar } from "~/app-navbar"
import { Footer } from "~/components/footer"
import stylesheet from "~/tailwind.css?url"

import type { Route } from "./+types/root";
import { parseColorScheme } from "./modules/color-scheme/server";
import { useColorScheme } from "./modules/color-scheme/component";

export async function loader({ request }: Route.LoaderArgs) {
	let colorScheme = await parseColorScheme(request);

	return { colorScheme };
}

export const links: Route.LinksFunction = () => [
	{ rel: "stylesheet", href: stylesheet },
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
];

export default function App() {
	return <Outlet />;
}

export function Layout({ children }: { children: React.ReactNode }) {
	let colorScheme = useColorScheme();

	return (
		<html
			lang="en"
			className={colorScheme === "dark" ? "dark" : ""}
			suppressHydrationWarning
		>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="min-h-svh bg-tertiary font-sans antialiased">
				<Toast />
				<AppNavbar />
				{children}
				<Footer />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}
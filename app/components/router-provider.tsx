import { RouterProvider as Provider } from "react-aria-components"
import { useHref, useNavigate, type NavigateOptions } from "react-router"

declare module "react-aria-components" {
	interface RouterConfig {
		routerOptions: NavigateOptions
	}
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
	const navigate = useNavigate()
	return (
		<Provider navigate={navigate} useHref={useHref}>
			{children}
		</Provider>
	)
}

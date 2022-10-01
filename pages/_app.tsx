import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../styles";
import { AppBar } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;

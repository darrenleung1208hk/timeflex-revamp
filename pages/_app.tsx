import { Box, CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createMixins";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { AppBar } from "../components";
import { store } from "../core";
import { theme } from "../styles";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<AppBar />
				<Box
					height={({ mixins }: Theme) =>
						`calc(100vh - ${
							(mixins.toolbar["@media (min-width:600px)"] as CSSProperties)
								.minHeight
						}px)`
					}
				>
					<Component {...pageProps} />
				</Box>
			</ThemeProvider>
		</Provider>
	);
}

export default MyApp;

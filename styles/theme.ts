import { createTheme, ThemeOptions } from "@mui/material";
import breakpoints from "./breakpoints";
import components from "./components";
import palette from "./palette";
import typography from "./typography";

export const theme = createTheme({
	breakpoints,
	components,
	palette,
	typography,
} as ThemeOptions);

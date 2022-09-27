import { createTheme, ThemeOptions } from "@mui/material";
import breakpoints from "./breakpoints";
import palette from "./palette";
import typography from "./typography";

export const theme = createTheme({
	breakpoints,
	palette,
	typography,
} as ThemeOptions);

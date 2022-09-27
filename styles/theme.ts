import { createTheme, ThemeOptions } from "@mui/material";
import palette from "./palette";
import typography from "./typography";

export const theme = createTheme({ palette, typography } as ThemeOptions);

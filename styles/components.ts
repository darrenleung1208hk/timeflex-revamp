import { ThemeOptions } from "@mui/material";

const components: ThemeOptions["components"] = {
	MuiCssBaseline: {
		styleOverrides: {
			body: {
				m: 0,
			},
		},
	},
};

export default components;

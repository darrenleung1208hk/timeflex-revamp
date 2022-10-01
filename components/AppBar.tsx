import React from "react";
import {
	AppBar as MuiAppBar,
	Box,
	Button,
	IconButton,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

export const AppBar = () => {
	return (
		<div>
			<Toolbar />
			<MuiAppBar color="transparent" elevation={0}>
				<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography
						variant="subtitle1"
						color={(theme) => theme.palette.grey[700]}
					>
						TimeFlex
					</Typography>
					<Stack direction="row" spacing={2}>
						<Box>
							<IconButton color="primary">
								<KeyboardArrowLeftRoundedIcon />
							</IconButton>
							<Button>Today</Button>
							<IconButton color="primary">
								<KeyboardArrowRightRoundedIcon />
							</IconButton>
						</Box>
					</Stack>
				</Toolbar>
			</MuiAppBar>
		</div>
	);
};

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import {
	AppBar as MuiAppBar,
	Box,
	Button,
	IconButton,
	ListItemText,
	Menu,
	MenuItem,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import { MouseEvent, useState } from "react";

const views = ["day", "week", "month"];

export const AppBar = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const toggleViewSelect = (e: MouseEvent<HTMLElement>) => {
		if (Boolean(anchorEl)) {
			setAnchorEl(null);
		} else {
			setAnchorEl(e.currentTarget);
		}
	};

	return (
		<div>
			<Toolbar />
			<MuiAppBar color="inherit" elevation={0}>
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
						<Button
							endIcon={<KeyboardArrowDownRoundedIcon />}
							onClick={toggleViewSelect}
							variant={Boolean(anchorEl) ? "contained" : "outlined"}
						>
							Week
						</Button>
						<Menu
							open={Boolean(anchorEl)}
							anchorEl={anchorEl}
							onClose={() => setAnchorEl(null)}
							PaperProps={{
								sx: {
									minWidth: "180px",
									borderRadius: 0,
									mt: 1,
								},
							}}
						>
							{views.map((view) => (
								<MenuItem key={view}>
									<ListItemText
										primary={view}
										primaryTypographyProps={{
											variant: "body2",
											textTransform: "capitalize",
										}}
									/>
								</MenuItem>
							))}
						</Menu>
					</Stack>
				</Toolbar>
			</MuiAppBar>
		</div>
	);
};

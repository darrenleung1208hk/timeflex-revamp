import { Grid, Stack, Typography } from "@mui/material";

const events = new Array(35).fill({});

const MonthView = () => {
	return (
		<Grid bgcolor="background.default" height="100%" container>
			{events.map((event, index) => (
				<Grid key={`event-${index}`} item sm={12 / 7}>
					<Stack
						height="100%"
						sx={[
							{ py: 1 },
							({ palette }) => ({
								borderLeft: "0.5px solid",
								borderTop: "0.5px solid",
								borderColor: palette.grey["300"],
							}),
						]}
					>
						<Typography align="center" variant="subtitle2">
							{(index + 1) % 30}
						</Typography>
					</Stack>
				</Grid>
			))}
		</Grid>
	);
};

export default MonthView;

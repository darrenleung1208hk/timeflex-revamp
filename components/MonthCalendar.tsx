import { Box, Grid, Stack, Typography } from "@mui/material";
import { Event } from "../core";
import { format } from "date-fns";

const events: Event[] = new Array(30).fill({
	title: "Event 1",
	startDate: new Date(),
});

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const daysOfWeekBarHeight = "30px";

export const MonthCalendar = () => {
	return (
		<Box height="100%">
			<Grid
				bgcolor="background.default"
				height={daysOfWeekBarHeight}
				container
				alignItems="center"
			>
				{daysOfWeek.map((day) => (
					<Grid
						item
						sm={12 / 7}
						sx={({ palette }) => ({
							borderLeft: "0.5px solid",
							borderTop: "0.5px solid",
							borderColor: palette.grey["300"],
						})}
					>
						<Typography
							variant="subtitle1"
							align="center"
							textTransform="uppercase"
						>
							{day}
						</Typography>
					</Grid>
				))}
			</Grid>
			<Grid
				bgcolor="background.default"
				height={`calc(100% - ${daysOfWeekBarHeight})`}
				container
			>
				{events.map(({ title, startDate }: Event, index) => (
					<Grid key={`event-${index}`} item sm={12 / 7}>
						<Stack
							height="100%"
							sx={[
								{ p: 1 },
								({ palette }) => ({
									borderLeft: "0.5px solid",
									borderTop: "0.5px solid",
									borderColor: palette.grey["300"],
								}),
							]}
						>
							<Stack direction="row" justifyContent="center">
								<Box
									typography="body2"
									bgcolor={
										new Date().getDate() === (index + 1) % 31
											? "primary.main"
											: undefined
									}
									color={
										new Date().getDate() === (index + 1) % 31
											? "primary.contrastText"
											: undefined
									}
									width={25}
									height={25}
									borderRadius={999}
									display="flex"
									justifyContent="center"
									alignItems="center"
								>
									{(index + 1) % 31}
								</Box>
							</Stack>
							<div>
								<Typography
									variant="body2"
									component="span"
									textTransform="lowercase"
								>
									{format(startDate, "p").replace(" ", "")}{" "}
								</Typography>
								<Typography variant="body2" component="span">
									{title}
								</Typography>
							</div>
						</Stack>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

import { Box, Grid, Stack, Typography } from "@mui/material";
import { Event, getMonthCalendarDays } from "../core";
import { format } from "date-fns";

const events: Event[] = new Array(35).fill({
	title: "Event 1",
	startDate: new Date(),
});

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const daysOfWeekBarHeight = "30px";

const month = 9;

export const MonthCalendar = () => {
	const dates = getMonthCalendarDays(month);

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
				{dates.map((date, index) => (
					<Grid key={`event-${index}`} item sm={12 / 7}>
						<Stack
							height="100%"
							sx={[
								{ p: 1 },
								({ palette }) => ({
									borderLeft: "0.5px solid",
									borderBottom: "0.5px solid",
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
									{date.getDate()}
								</Box>
							</Stack>
							<div>
								<Typography
									variant="body2"
									component="span"
									textTransform="lowercase"
								>
									{format(events[index].startDate, "p").replace(" ", "")}{" "}
								</Typography>
								<Typography variant="body2" component="span">
									{events[index].title}
								</Typography>
							</div>
						</Stack>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

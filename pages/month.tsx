import { Box } from "@mui/material";
import { NextPage } from "next";
import { MonthCalendar } from "../components";
import { Event } from "../core";

const events: Event[] = new Array(60).fill({
	title: "Event 1",
	startDate: new Date(),
	endDate: new Date(),
});

const Month: NextPage = () => {
	return (
		<Box height="100vh">
			<MonthCalendar month={8} events={events} />
		</Box>
	);
};

export default Month;

import { Box } from "@mui/material";
import { NextPage } from "next";
import { MonthCalendar } from "../components";
import { Event } from "../core";

const events: Event[] = [
	{ title: "Event 1", startDate: new Date(2022, 8, 15), endDate: new Date() },
	{ title: "Event 2", startDate: new Date(2022, 8, 28), endDate: new Date() },
];

const Month: NextPage = () => {
	return (
		<Box height="100%">
			<MonthCalendar month={8} events={events} />
		</Box>
	);
};

export default Month;

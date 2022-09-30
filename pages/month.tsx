import { Box } from "@mui/material";
import { NextPage } from "next";
import { MonthCalendar } from "../components";

const Month: NextPage = () => {
	return (
		<Box height="100vh">
			<MonthCalendar />
		</Box>
	);
};

export default Month;

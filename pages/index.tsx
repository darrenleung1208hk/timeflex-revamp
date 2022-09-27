import { Box } from "@mui/material";
import type { NextPage } from "next";
import { Calendar } from "../components";

const Home: NextPage = () => {
	return (
		<Box bgcolor="primary.light" height="100vh">
			<Calendar />
		</Box>
	);
};

export default Home;

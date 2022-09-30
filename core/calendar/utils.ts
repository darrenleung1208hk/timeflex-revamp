import { Month } from "./interface";
import { addDays, set, startOfWeek } from "date-fns";

export const getMonthCalendarDays = (month: Month): Date[] => {
	const firstDayOfMonth = set(new Date(), { month, date: 1 });
	const firstMonthCalendarDay = startOfWeek(firstDayOfMonth);
	return new Array(35)
		.fill(firstMonthCalendarDay)
		.map((day, index) => addDays(day, index));
};

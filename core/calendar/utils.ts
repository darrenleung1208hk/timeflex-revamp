import { Month } from "./interface";
import { addDays, set, startOfWeek, getWeeksInMonth } from "date-fns";

export const getMonthCalendarDays = (month: Month): Date[] => {
	const firstDayOfMonth = set(new Date(), { month, date: 1 });
	const numberOfWeeks = getWeeksInMonth(firstDayOfMonth);
	const firstMonthCalendarDay = startOfWeek(firstDayOfMonth);
	return new Array(numberOfWeeks * 7)
		.fill(firstMonthCalendarDay)
		.map((day, index) => addDays(day, index));
};

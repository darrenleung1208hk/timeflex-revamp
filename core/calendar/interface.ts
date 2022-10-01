export interface Event {
	title: string;
	startDate: Date;
	endDate: Date;
	description?: string;
	location?: string;
}

export interface CalendarDayCell {
	date: Date;
	events: Event[];
}

// January => 0, ..., December => 11
export type Month = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

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

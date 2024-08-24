export const differenceDays = (dateStart: string, dateEnd: string) => {
	const date1 = new Date(dateStart);
	const date2 = new Date(dateEnd);
	const timeDiff = Math.abs(date2.getTime() - date1.getTime());

	return Math.ceil(timeDiff / (1000 * 3600 * 24)).toString();
};

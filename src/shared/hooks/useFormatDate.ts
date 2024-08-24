import { useFormatter } from 'next-intl';

/* Format value: month/day/year */
export const useFormatDate = (value: string): string => {
	const format = useFormatter();
	return format.dateTime(Date.parse(value), {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
	});
};

import { useFormatter } from 'next-intl';
import { useEffect, useState } from 'react';

import { Locale } from '@/config';

export const useNowDate = (locale: Locale): [time: string, date: string] => {
	const format = useFormatter();
	const [date, setDate] = useState<string>('');
	const [time, setTime] = useState<string>('');

	useEffect(() => {
		const interval = setInterval(() => {
			const fullDate = new Date();
			setDate(
				format.dateTime(fullDate, {
					day: 'numeric',
					month: 'long',
					year: 'numeric',
				}),
			);
			setTime(
				format.dateTime(fullDate, {
					hour: 'numeric',
					minute: 'numeric',
				}),
			);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [locale]);

	return [time, date];
};

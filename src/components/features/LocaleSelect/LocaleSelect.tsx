'use client';

import { useEffect, useState } from 'react';

import { Locale } from '@/shared/config/localeConfig';
import { getUserLocale, setUserLocale } from '@/shared/service/locale';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/select';

export const LocaleSelect = () => {
	const [value, setValue] = useState<string>('EN');

	useEffect(() => {
		getUserLocale().then((value) => setValue(value));
	}, []);

	const handleChange = (value: Locale) => {
		setValue(value);
		setUserLocale(value);
	};

	return (
		<div>
			<Select value={value} onValueChange={handleChange}>
				<SelectTrigger>
					<SelectValue placeholder='EN' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='en'>EN</SelectItem>
					<SelectItem value='ru'>RU</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};

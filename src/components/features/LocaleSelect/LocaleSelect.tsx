'use client';

import { FC } from 'react';

import { Locale } from '@/shared/config/localeConfig';
import { setUserLocale } from '@/shared/service/locale';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/select';

interface LocaleSelectProps {
	locale: Locale;
}

export const LocaleSelect: FC<LocaleSelectProps> = ({ locale }) => {
	const handleChange = (value: Locale) => {
		setUserLocale(value);
	};

	return (
		<div>
			<Select onValueChange={handleChange}>
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

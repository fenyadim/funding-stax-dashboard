import { FC, useState } from 'react';

import { Select, SelectItemProps } from '@/components/ui';
import { Locale } from '@/config';
import { setUserLocale } from '@/service/locale';

interface LocaleSelectProps {
	locale: Locale;
}

const optionsLocales: SelectItemProps<Locale>[] = [
	{ value: 'en', content: 'EN' },
	{ value: 'ru', content: 'RU' },
];

export const LocaleSelect: FC<LocaleSelectProps> = ({ locale }) => {
	const [selectValue, setSelectValue] = useState(locale);

	const handleChange = (value: Locale) => {
		setSelectValue(value);
		setUserLocale(value);
	};

	return (
		<Select
			options={optionsLocales}
			value={selectValue}
			name='localeSelect'
			onChange={handleChange}
		/>
	);
};

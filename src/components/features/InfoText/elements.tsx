import cn from 'classnames';
import { ReactNode } from 'react';

import { Modes } from '@/components/features/InfoText/types';
import { Locale } from '@/shared/config/localeConfig';
import { calcPercentOf } from '@/shared/utils/calcPercentOf';
import { formatLocaleNumber } from '@/shared/utils/formatLocale';
import { minusOrPlusSign } from '@/shared/utils/minusOrPlusSign';

const pnlElement = (
	valueElement: number,
	localeElement: Locale,
	percentOf?: number,
) => {
	const minusStyle = {
		'!text-error': minusOrPlusSign(valueElement) === '-',
	};

	return (
		<>
			<h3 className={cn(minusStyle)}>
				{minusOrPlusSign(valueElement)}
				{localeElement ? '$ ' : ''}
				<span>{formatLocaleNumber(localeElement, valueElement)}</span>{' '}
			</h3>
			{percentOf && (
				<p className={cn('text-xl self-end', minusStyle)}>
					{minusOrPlusSign(valueElement)}
					<span className='text-foreground'>
						{calcPercentOf(percentOf, valueElement)}
					</span>
					%
				</p>
			)}
		</>
	);
};

const currencyElement = (valueElement: number, localeElement: Locale) => {
	return (
		<>
			<h3>
				{'$ '}
				<span>{formatLocaleNumber(localeElement, valueElement)}</span>{' '}
			</h3>
		</>
	);
};

const percentElement = (valueElement: number, localeElement: Locale) => {
	const minusStyle = {
		'!text-error': minusOrPlusSign(valueElement) === '-',
	};

	return (
		<>
			<h3 className={cn(minusStyle)}>
				{minusOrPlusSign(valueElement)}
				<span>{formatLocaleNumber(localeElement, valueElement)}</span> {'%'}
			</h3>
		</>
	);
};

const textElement = (valueElement: string, before?: string, after?: string) => {
	return (
		<>
			<h3>
				{before} <span>{valueElement}</span> {after}
			</h3>
		</>
	);
};

export const modeElement = (
	mode: Modes,
	value: string | number,
	before?: string,
	after?: string,
	locale?: Locale,
	percentOf?: number,
): ReactNode => {
	switch (mode) {
		case 'text':
			return textElement(value as string, before, after);
		case 'pnl':
			return pnlElement(value as number, locale as Locale, percentOf);
		case 'currency':
			return currencyElement(value as number, locale as Locale);
		case 'percent':
			return percentElement(value as number, locale as Locale);
	}
};

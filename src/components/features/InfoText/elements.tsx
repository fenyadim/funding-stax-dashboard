import cn from 'classnames';
import { ReactNode } from 'react';

import { Modes } from '@/components/features/InfoText/types';
import { Locale } from '@/shared/config/localeConfig';
import { calcPercentOf } from '@/shared/utils/calcPercentOf';
import { formatLocaleNumber } from '@/shared/utils/formatLocale';
import { minusOrPlusSign } from '@/shared/utils/minusOrPlusSign';

import styles from './InfoText.module.scss';

const pnlElement = (
	valueElement: number,
	localeElement: Locale,
	percentOf?: number,
) => {
	const minusStyle = {
		[styles.minus]: minusOrPlusSign(valueElement) === '-',
	};

	return (
		<>
			<h3 className={cn(styles.value, minusStyle)}>
				{minusOrPlusSign(valueElement)}
				{localeElement ? '$ ' : ''}
				<span>
					{formatLocaleNumber(localeElement, valueElement)}
				</span>{' '}
			</h3>
			{percentOf && (
				<p className={cn(styles.percent, minusStyle)}>
					{minusOrPlusSign(valueElement)}
					<span>{calcPercentOf(percentOf, valueElement)}</span>%
				</p>
			)}
		</>
	);
};

const currencyElement = (valueElement: number, localeElement: Locale) => {
	return (
		<>
			<h3 className={cn(styles.value)}>
				{'$ '}
				<span>
					{formatLocaleNumber(localeElement, valueElement)}
				</span>{' '}
			</h3>
		</>
	);
};

const percentElement = (valueElement: number, localeElement: Locale) => {
	const minusStyle = {
		[styles.minus]: minusOrPlusSign(valueElement) === '-',
	};

	return (
		<>
			<h3 className={cn(styles.value, minusStyle)}>
				{minusOrPlusSign(valueElement)}
				<span>
					{formatLocaleNumber(localeElement, valueElement)}
				</span>{' '}
				{'%'}
			</h3>
		</>
	);
};

const textElement = (valueElement: string, before?: string, after?: string) => {
	return (
		<>
			<h3 className={cn(styles.value)}>
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

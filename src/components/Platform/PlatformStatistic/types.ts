import { Locale } from '@/config/localeConfig';

interface PlatformStatisticPropsBase {
	title: string;
	before?: string;
	after?: string;
	size?: 'small' | 'large';
	className?: string;
}

interface PlatformStatisticPropsWithoutLocale
	extends PlatformStatisticPropsBase {
	mode?: 'text';
	value: string;
	locale?: Locale;
}

interface PlatformStatisticPropsWithLocale extends PlatformStatisticPropsBase {
	mode: 'currency' | 'percent' | 'pnl';
	value: number;
	locale: Locale;
}

export type PlatformStatisticProps =
	| PlatformStatisticPropsWithoutLocale
	| PlatformStatisticPropsWithLocale;

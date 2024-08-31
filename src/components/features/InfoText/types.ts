import { VariantProps } from 'class-variance-authority';

import { infoTextVariants } from '@/components/features/InfoText/InfoText';
import { Locale } from '@/shared/config/localeConfig';

export type Modes = 'currency' | 'percent' | 'pnl' | 'text';

export type NumberModes = 'currency' | 'percent' | 'pnl';
type StringModes = 'text';

interface PlatformStatisticPropsBase
	extends VariantProps<typeof infoTextVariants> {
	title: string;
	before?: string;
	after?: string;
	// size?: 'small' | 'medium' | 'large';
	className?: string;
	/* Сумма челледжа, от которого посчитается процент */
	percentOf?: number;
	/* Текст для подсказки */
	info?: string;
	// align?: 'start' | 'center' | 'end';
}

interface PlatformStatisticPropsWithoutLocale
	extends PlatformStatisticPropsBase {
	mode?: StringModes;
	value: string;
	locale?: Locale;
}

interface PlatformStatisticPropsWithLocale extends PlatformStatisticPropsBase {
	mode: NumberModes;
	value: number;
	locale: Locale;
}

export type PlatformStatisticProps =
	| PlatformStatisticPropsWithoutLocale
	| PlatformStatisticPropsWithLocale;

import { Locale } from '@/shared/config/localeConfig';
import { CardProps } from '@/shared/ui';

export interface ChallengeItemListProps {
	locale: Locale;
	title: string;
	challengeItems: Array<Omit<ChallengeItemProps, 'locale' | 'theme'>>;
}

export interface ChallengeItemProps {
	id: string;
	locale: Locale;
	accountId: string;
	challengeCount: number;
	todayPnl: number;
	stageCount: string;
	result: 'Failed' | 'Success';
	theme: CardProps['variant'];
}

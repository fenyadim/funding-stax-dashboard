import { CardProps } from '@/components/ui';
import { Locale } from '@/config/localeConfig';

export interface ChallengeItemListProps {
	locale: Locale;
	title: string;
	challengeItems: Array<Omit<ChallengeItemProps, 'locale' | 'theme'>>;
}

export interface ChallengeItemProps {
	locale: Locale;
	accountId: string;
	challengeCount: number;
	todayPnl: number;
	stageCount: string;
	result: 'Failed' | 'Success';
	theme: CardProps['theme'];
}

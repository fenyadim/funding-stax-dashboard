import { useLocale } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';

import { PlatformStatistic } from '@/components/Platform';
import { Block, Card, Flex } from '@/components/ui';
import { Locale } from '@/shared/config/localeConfig';
import { useFormatDate } from '@/shared/hooks/useFormatDate';
import { differenceDays } from '@/shared/utils/differenceDays';

import styles from './ChallengeDetails.module.scss';

interface ChallengeDetailsProps {
	id: string;
}

export const ChallengeDetails: FC<ChallengeDetailsProps> = ({ id }) => {
	const locale = useLocale() as Locale;
	const dateNow = new Date().toDateString();

	const dateRemaining = useFormatDate('04.25.2027');

	return (
		<Flex>
			<Block className={styles.wrapper} gap='16' title='Performance' max>
				<Card size='small' direction='column' align='start' gap='16'>
					<PlatformStatistic
						size='medium'
						value='Trade Locker'
						title='Platform'
					/>
					<PlatformStatistic
						size='medium'
						value={5665.69}
						title='Balance'
						mode='currency'
						locale={locale}
					/>
				</Card>
				<Card size='small' direction='column' align='start' gap='16'>
					<PlatformStatistic
						size='medium'
						before={`${differenceDays(dateNow, dateRemaining)} days`}
						value={dateRemaining}
						title='Time Remaining'
					/>
					<PlatformStatistic
						size='medium'
						value={-11.24}
						title='Ovreall Profit/Loss'
						mode='pnl'
						locale={locale}
						info='Что-то пробует. Что-то пробует. Что-то пробует.'
					/>
				</Card>
				<Card size='small' direction='column' align='start' gap='16'>
					<PlatformStatistic
						size='medium'
						value={-347.64}
						mode={'pnl'}
						locale={locale}
						title='24hr Profit/Loss'
						info='Что-то пробует. Что-то пробует. Что-то пробует.'
					/>
					<PlatformStatistic
						size='medium'
						value={5665.69}
						title='Daily Lowest Equity'
						mode='currency'
						locale={locale}
						info='Что-то пробует. Что-то пробует. Что-то пробует.'
					/>
				</Card>
				<Card size='small' direction='column' align='start' gap='16'>
					<Flex max justify='between'>
						<PlatformStatistic
							size='medium'
							value={-11.24}
							after='%'
							mode='percent'
							title='Average Loss'
							locale={locale}
							info='Что-то пробует. Что-то пробует. Что-то пробует.'
						/>
						<Image
							src='/average-loss.svg'
							alt='Average Loss'
							width={70}
							height={55}
						/>
					</Flex>
					<Flex max justify='between'>
						<PlatformStatistic
							size='medium'
							value={11.24}
							after='%'
							title='Average Win'
							mode='percent'
							locale={locale}
							info='Что-то пробует. Что-то пробует. Что-то пробует.'
						/>
						<Image
							src='/average-win.svg'
							alt='Average Win'
							width={70}
							height={55}
						/>
					</Flex>
				</Card>
			</Block>
		</Flex>
	);
};

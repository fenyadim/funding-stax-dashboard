'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';

import { InfoText } from '@/components/features';
import {
	LinearChart,
	linearDataForChallengeDetails,
} from '@/components/features/LinearChart';
import { Block, Card } from '@/components/ui';
import { Locale } from '@/shared/config/localeConfig';
import { useFormatDate } from '@/shared/hooks/useFormatDate';
import { Flex } from '@/shared/ui';
import { differenceDays } from '@/shared/utils/differenceDays';

import styles from './PerformanceBlock.module.scss';

interface PerformanceBlockProps {
	className?: string;
}

export const PerformanceBlock: FC<PerformanceBlockProps> = ({}) => {
	const locale = useLocale() as Locale;
	const dateNow = new Date().toDateString();
	const dateRemaining = '04/25/2027';

	const dateFormating = useFormatDate(dateRemaining);

	return (
		<Block direction='column' align='start' gap={16} title='Performance' max>
			<Flex gap={16} max className={styles.wrapper}>
				<Card size='small'>
					<InfoText size='md' value='Trade Locker' title='Platform' />
					<InfoText
						size='md'
						value={5665.69}
						title='Balance'
						mode='currency'
						locale={locale}
					/>
				</Card>
				<Card size='small'>
					<InfoText
						size='md'
						before={`${differenceDays(dateNow, dateRemaining)} days`}
						value={dateFormating}
						title='Time Remaining'
					/>
					<InfoText
						size='md'
						value={-11.24}
						title='Ovreall Profit/Loss'
						mode='pnl'
						locale={locale}
						info='Что-то пробует. Что-то пробует. Что-то пробует.'
					/>
				</Card>
				<Card size='small'>
					<InfoText
						size='md'
						value={-347.64}
						mode={'pnl'}
						locale={locale}
						title='24hr Profit/Loss'
						info='Что-то пробует. Что-то пробует. Что-то пробует.'
					/>
					<InfoText
						size='md'
						value={5665.69}
						title='Daily Lowest Equity'
						mode='currency'
						locale={locale}
						info='Что-то пробует. Что-то пробует. Что-то пробует.'
					/>
				</Card>
				<Card size='small'>
					<Flex max justify='between'>
						<InfoText
							size='md'
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
						<InfoText
							size='md'
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
			</Flex>
			<Flex gap={16} max>
				<Flex
					className={styles.chartsLeftInfo}
					gap={16}
					direction='column'
					align='stretch'
				>
					<Card size='small'>
						<Flex max justify='between'>
							<InfoText
								size='md'
								value={0}
								after='%'
								mode='percent'
								title='Win Rate'
								locale={locale}
								info='Что-то пробует. Что-то пробует. Что-то пробует.'
							/>
							<Image
								src='/win-rate.svg'
								alt='Win Rate'
								width={70}
								height={55}
							/>
						</Flex>
						<Flex max justify='between'>
							<InfoText
								size='md'
								value={`${differenceDays(dateNow, dateRemaining)} days`}
								title='Average Trade Duration'
								info='Что-то пробует. Что-то пробует. Что-то пробует.'
							/>
							<Image
								src='/clock.svg'
								alt='Average Trade Duration'
								width={70}
								height={55}
							/>
						</Flex>
					</Card>
					<Card size='small'>
						<Flex max justify='between'>
							<InfoText
								size='md'
								value='_ _'
								title='Profit Factor'
								info='Что-то пробует. Что-то пробует. Что-то пробует.'
							/>
							<Image
								src='/profit.svg'
								alt='Profit Factor'
								width={70}
								height={55}
							/>
						</Flex>
						<Flex max justify='between'>
							<InfoText
								size='md'
								value='_ _'
								title='Lots'
								info='Что-то пробует. Что-то пробует. Что-то пробует.'
							/>
							<Image src='/lots.svg' alt='Lots' width={90} height={55} />
						</Flex>
					</Card>
				</Flex>
				<Card className={styles.chartsWrapper}>
					<h3>Charts</h3>
					<LinearChart data={linearDataForChallengeDetails} theme='full' />
				</Card>
			</Flex>
		</Block>
	);
};

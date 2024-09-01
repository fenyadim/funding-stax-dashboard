import { useTranslations } from 'next-intl';
import { FC, HTMLAttributes } from 'react';

import { DoughnutChart, InfoText } from '@/components/features';
import {
	LinearChart,
	linearDataForDetailInfo,
} from '@/components/features/LinearChart';
import { Card } from '@/components/ui';
import { Locale } from '@/shared/config/localeConfig';
import { Flex } from '@/shared/ui';
import { cn } from '@/shared/utils/utils';

interface PlatformDetailInfoProps extends HTMLAttributes<HTMLDivElement> {
	locale: Locale;
}

export const PlatformDetailInfo: FC<PlatformDetailInfoProps> = ({
	locale,
	className,
	...otherProps
}) => {
	const t = useTranslations('PlatformPage');

	return (
		<div
			className={cn('grid grid-cols-[1.5fr_1fr_1fr] gap-4 w-full', className)}
			{...otherProps}
		>
			<Card size='small'>
				<InfoText
					size='xl'
					value={5665.69}
					title='Account Balance'
					mode='currency'
					locale={locale}
				/>
				<LinearChart data={linearDataForDetailInfo} theme='mini' />
			</Card>
			<Flex direction='column' gap={16}>
				<Card size='small' className='flex-row h-1/2 w-full justify-between'>
					<Flex justify='between' direction='column' gap={16}>
						<InfoText
							value={20}
							title={t('Winning Trades')}
							locale={locale}
							mode='percent'
							after='%'
						/>
						<InfoText
							value={-80}
							title={t('Losing Trades')}
							locale={locale}
							mode='percent'
							after='%'
						/>
					</Flex>
					<DoughnutChart winValue={20} loseValue={80} />
				</Card>
				<Card size='small' className='gap-4 w-full'>
					<InfoText
						value={814.31}
						title={t('Target Amount Left to Earn')}
						locale={locale}
						mode='currency'
					/>
					<InfoText
						value={-334.31}
						title={t('Total P/L')}
						locale={locale}
						mode='pnl'
						percentOf={6000}
					/>
				</Card>
			</Flex>
			<div className='grid grid-cols-2 auto-rows-min gap-4'>
				<Card size='small'>
					<InfoText value='07/29/2024' title={t('No limit')} />
				</Card>
				<Card variant='negative' size='small'>
					<InfoText
						value={300.67}
						mode='currency'
						locale={locale}
						title={t('Today’s Permitted Loss')}
					/>
				</Card>
				<Card variant='negative' size='small'>
					<InfoText value='19' title={t('Active Trading Days')} />
				</Card>
				<Card variant='positive' size='small'>
					<InfoText
						value={600}
						mode='currency'
						locale={locale}
						title={t('Max Permitted Loss')}
					/>
				</Card>
			</div>
		</div>
	);
};

import { FC } from 'react';

import { Block, Table } from '@/components/ui';
import { TableDataType } from '@/components/ui/Table/Table';

import styles from './TradingLogBlock.module.scss';

interface TradingLogBlockProps {
	className?: string;
}

const tableDate: TableDataType<12> = {
	labels: [
		'Open',
		'Symbol',
		'Position ID',
		'Type',
		'Volume',
		'Price',
		'S/L',
		'T/P',
		'Close',
		'Close Price',
		'P/L',
		'Change',
	],
	rows: [
		[
			'10:00',
			'BTC',
			'123456',
			'Long',
			'1.0000',
			'0.0000',
			'0.0000',
			'0.0000',
			'10:00',
			'0.0000',
			'0.0000',
			'0.0000',
		],
		[
			'10:00',
			'BTC',
			'123456',
			'Long',
			'1.0000',
			'0.0000',
			'0.0000',
			'0.0000',
			'10:00',
			'0.0000',
			'0.0000',
			'0.0000',
		],
	],
};

export const TradingLogBlock: FC<TradingLogBlockProps> = ({}) => {
	return (
		<Block max title='Trading Log' className={styles.wrapper}>
			<Table data={tableDate} />
		</Block>
	);
};

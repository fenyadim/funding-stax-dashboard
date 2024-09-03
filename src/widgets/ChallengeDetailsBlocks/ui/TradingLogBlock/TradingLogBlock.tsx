import { FC } from 'react';

import { Block, Card } from '@/components/ui';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/shared/ui/table';

interface TradingLogBlockProps {
	className?: string;
}

const tableDate = {
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
		<Block max title='Trading Log'>
			<Card className='w-full' size='small'>
				<Table>
					<TableCaption>A list of your recent invoices.</TableCaption>
					<TableHeader>
						<TableRow>
							{tableDate.labels.map((label) => (
								<TableHead key={label}>{label}</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{tableDate.rows?.map((row, index) => (
							<TableRow
								className='border-accent/40 hover:bg-accent/10'
								key={index}
							>
								{row.map((cell) => (
									<TableCell key={cell}>{cell}</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Card>
		</Block>
	);
};

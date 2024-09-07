import { AppTable } from '@/entities/AppTable';
import { Block } from '@/shared/ui';

import { ILogColumns, columnsLog } from '../../model/columnsLog';

async function getData(): Promise<ILogColumns[]> {
	// Fetch data from your API here.
	return [
		{
			id: '728ed52f',
			open: '10:00',
			symbol: 'BTC',
			positionId: '123456',
			type: 'Long',
			volume: '1.0000',
			price: '0.0000',
			sl: '0.0000',
			tp: '0.0000',
			close: '10:00',
			closePrice: '0.0000',
			pl: '0.0000',
			change: '0.0000',
		},
		{
			id: '242',
			open: '10:00',
			symbol: 'BTC',
			positionId: '123456',
			type: 'Long',
			volume: '1.0000',
			price: '0.0000',
			sl: '0.0000',
			tp: '0.0000',
			close: '10:00',
			closePrice: '0.0000',
			pl: '0.0000',
			change: '0.0000',
		},
	];
}

export const TradingLogBlock = async () => {
	const data = await getData();

	return (
		<Block max title='Trading Log'>
			<AppTable columns={columnsLog} data={data} />
		</Block>
	);
};

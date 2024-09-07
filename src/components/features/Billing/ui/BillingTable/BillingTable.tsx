import { AppTable } from '@/shared/ui';

import { IBilling, columnsBilling } from '../../model/columnsBilling';
import { optionSort } from '../../../../../entities/AppTable/model/optionSort';

async function getData(): Promise<IBilling[]> {
    // Fetch data from your API here.
    return [
        {
            id: '728ed52f',
            status: 'waiting',
            date: new Date('08/17/2024 17:36'),
            order: 'bee15494-cb4a-457',
            product: 'Purchase - 200K Swing Challenge - TL Challenge',
            payment: 'Crypto Currency',
            amount: 1176,
        },
        {
            id: '728ed',
            status: 'completed',
            date: new Date('07/29/2024 19:39'),
            order: 'bee15494-cb4a-457',
            product: 'Purchase - 200K Swing Challenge - TL Challenge',
            payment: 'Crypto Currency',
            amount: 45,
        },
        {
            id: '728ed23',
            status: 'incomplete',
            date: new Date('07/25/2024 19:39'),
            order: 'bee15494-cb4a-457',
            product: 'Purchase - 200K Swing Challenge - TL Challenge',
            payment: 'Crypto Currency',
            amount: 45,
        },
        {
            id: '7283',
            status: 'completed',
            date: new Date('07/30/2024 19:39'),
            order: 'biba',
            product: 'Test - 200K Swing Challenge - TL Challenge',
            payment: 'Crypto Currency',
            amount: 45245,
        },
        {
            id: '7283',
            status: 'processing',
            date: new Date('07/30/2024 19:39'),
            order: 'biba',
            product: 'Test - 200K Swing Challenge - TL Challenge',
            payment: 'Crypto Currency',
            amount: 45245,
        },
    ];
}

export async function BillingTable() {
    const data = await getData();

    return (
        <AppTable columns={columnsBilling} data={data} optionsFilter={optionSort} />
    );
}

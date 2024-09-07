import { FC } from 'react';

import { IReferralsList, columnsReferralsList } from '../../model/column';
import { AppTable } from '@/entities/AppTable';

const data: IReferralsList[] = [
    {
        id: '123',
        name: 'John Doe',
        joiningDate: new Date(),
        received: 1000,
    },
    {
        id: '12',
        name: 'John Doe',
        joiningDate: new Date(),
        received: 1000,
    },
];

export const ReferralsListTable: FC = () => {
    return (
        <AppTable
            columns={columnsReferralsList}
            data={data}
        />
    );
};

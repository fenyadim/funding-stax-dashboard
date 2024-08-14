'use client';

import { useState } from 'react';

import { PlatformOption } from '@/components';
import { Card } from '@/components/ui';

import styles from './PlatformPage.module.scss';

const challengeTypes = [
	{ id: 'one-phase', name: 'One Phase' },
	{ id: 'two-phase', name: 'Two Phase' },
	{ id: 'swing', name: 'Swing' },
];

export const PlatformPage = () => {
	const [type, setType] = useState('one-phase');

	console.log(type);

	return (
		<Card direction='column' align='start' max className={styles.wrapper}>
			<PlatformOption
				title='Challenge Type'
				items={challengeTypes}
				idActive={type}
				setIdActive={setType}
			/>
		</Card>
	);
};

'use client';

import { Map, YMaps } from '@pbe/react-yandex-maps';

export const GoogleMap = () => {
	return (
		<YMaps>
			<div className='w-full rounded-3xl overflow-hidden'>
				<Map
					width='100%'
					height={500}
					defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
				/>
			</div>
		</YMaps>
	);
};

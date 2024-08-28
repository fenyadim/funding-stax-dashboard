import type { PluginOptionsByType } from 'chart.js';

import { Locale } from '@/shared/config/localeConfig';
import { roboto } from '@/shared/fonts';
import { DeepPartial } from '@/shared/types/global';
import { formatLocaleNumber } from '@/shared/utils/formatLocale';

export const pluginMiniMode = (
	locale: Locale,
): DeepPartial<PluginOptionsByType<'line'>> => ({
	datalabels: {
		font: {
			size: 16,
			weight: 500,
			family: roboto.style.fontFamily,
		},
		color: '#FFFFFF',
		align: 250,
		anchor: 'end',
		formatter: (value, context) => {
			if (context.dataIndex === context.dataset.data.length - 1) {
				return '$ ' + formatLocaleNumber(locale, value);
			}
			return '';
		},
	},
});

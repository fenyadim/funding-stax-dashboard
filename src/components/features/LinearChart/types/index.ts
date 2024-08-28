import type { CartesianScaleTypeRegistry, ScaleOptionsByType } from 'chart.js';

import { DeepPartial } from '@/shared/types/global';

export type ScaleType = DeepPartial<{
	[p: string]: ScaleOptionsByType<keyof CartesianScaleTypeRegistry>;
}>;

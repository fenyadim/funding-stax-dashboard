import type {
	ChartTypeRegistry,
	ScriptableContext,
	ScriptableScaleContext,
} from 'chart.js';

export const linearGradientChart = <T extends keyof ChartTypeRegistry>(
	context: ScriptableContext<T> | ScriptableScaleContext,
	startColor: string,
	endColor: string,
) => {
	const ctx = context.chart.ctx;
	const gradient = ctx.createLinearGradient(0, 0, 0, 350);
	gradient.addColorStop(0, startColor);
	gradient.addColorStop(1, endColor);
	return gradient;
};

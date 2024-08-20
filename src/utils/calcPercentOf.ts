export const calcPercentOf = (sumChallenge: number, sumPnl: number): string => {
	return Math.abs((sumPnl / sumChallenge) * 100).toFixed(2);
};

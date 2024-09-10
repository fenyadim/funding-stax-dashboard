import dynamic from 'next/dynamic';

import { PlatformCreateChallengeLoader } from './PlatformCreateChallenge/PlatformCreateChallengeLoader';

export const PlatformCreateChallenge = dynamic(
	() => import('./PlatformCreateChallenge/PlatformCreateChallenge'),
	{
		loading: () => <PlatformCreateChallengeLoader />,
		ssr: false,
	},
);

export { PlatformDetailInfo } from './PlatformDetailInfo/PlatformDetailInfo';
export { PlatformOption } from './PlatformOption/PlatformOption';
export type { PlatformItemType } from './PlatformOption/PlatformOption';

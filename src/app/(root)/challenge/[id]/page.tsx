import { ChallengeDetails } from '@/(pages)';

export default function ChallengeDetailsRoute({
	params,
}: {
	params: { id: string };
}) {
	return <ChallengeDetails id={params.id} />;
}

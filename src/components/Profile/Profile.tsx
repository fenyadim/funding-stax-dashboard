import Link from 'next/link';
import { FC } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';

interface ProfileProps {
	avatarUrl: string;
	name: string;
	email: string;
}

const Profile: FC<ProfileProps> = ({ avatarUrl, name, email }) => {
	const firstLetters = name
		.split(' ')
		.map((n) => n[0])
		.join('');

	return (
		<Link href='#' className='flex gap-3 items-center'>
			<Avatar>
				<AvatarImage src={avatarUrl} />
				<AvatarFallback>{firstLetters}</AvatarFallback>
			</Avatar>
			<div>
				<h2 className='text-lg'>{name}</h2>
				<p className='text-sm text-muted-foreground'>{email}</p>
			</div>
		</Link>
	);
};

export default Profile;

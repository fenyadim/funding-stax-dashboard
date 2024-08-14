import Link from 'next/link';
import { FC } from 'react';

import styles from './Profile.module.scss';

interface ProfileProps {
	avatarUrl: string;
	name: string;
	email: string;
}

const Profile: FC<ProfileProps> = ({ avatarUrl, name, email }) => {
	return (
		<Link className={styles.profileWrapper} href='#'>
			<img
				className={styles.profileAvatar}
				src={avatarUrl}
				alt={name}
				width={44}
				height={44}
			/>
			<div className={styles.profileInfo}>
				<h2 className={styles.profileName}>{name}</h2>
				<p className={styles.profileEmail}>{email}</p>
			</div>
		</Link>
	);
};

export default Profile;

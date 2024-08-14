'use client';

import { Bell, Bolt, LogOut, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Profile } from '@/components';
import { Button, Input } from '@/components/ui';
import { useNowDate } from '@/hooks/useNowDate';

import styles from './Header.module.scss';

const Header: FC = () => {
	const [time, date] = useNowDate('ru');

	return (
		<header className={styles.headerWrapper}>
			<div className={styles.logoWrapper}>
				<Link href='/'>
					<Image
						src={'/logo.svg'}
						alt='Funding Stax'
						width={149}
						height={63}
					/>
				</Link>
			</div>
			<div className={styles.rightSide}>
				<div className={styles.welcomeWrapper}>
					<h2 className={styles.welcomeTitle}>Good morning, John!</h2>
					<p className={styles.welcomeDate}>{`${time} • ${date}`}</p>
				</div>
				<div className={styles.searchWrapper}>
					<Input
						className={styles.searchInput}
						type='text'
						placeholder='Search'
					/>
					<Button isRound theme='transparent'>
						<Search />
					</Button>
				</div>
				<Button isRound size='small'>
					<Bell />
				</Button>
				<Profile
					avatarUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwq7veP7WNzW-9UA4KJLXesrdwyp1GVURweg&sF'
					name='John Doe'
					email='johndoe@ex.com'
				/>
				<div className={styles.navigation}>
					<Button isRound size='small'>
						<Bolt />
					</Button>
					<Button isRound size='small'>
						<LogOut />
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;

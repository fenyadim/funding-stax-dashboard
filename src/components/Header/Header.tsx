'use client';

import { Bell, LogOut, Search } from 'lucide-react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Profile } from '@/components';
import { LocaleSelect } from '@/components/features';
import { Button, Flex, Input } from '@/components/ui';
import { Locale } from '@/config/localeConfig';
import { useNowDate } from '@/hooks/useNowDate';

import styles from './Header.module.scss';

const Header: FC = () => {
	const locale = useLocale() as Locale;
	const [time, date] = useNowDate(locale);

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
			<Flex max justify='between'>
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
				<Button isRound size='medium'>
					<Bell />
				</Button>
				<Profile
					avatarUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwq7veP7WNzW-9UA4KJLXesrdwyp1GVURweg&sF'
					name='John Doe'
					email='johndoe@ex.com'
				/>
				<Flex gap='16'>
					<LocaleSelect locale={locale} />
					<Button isRound size='medium'>
						<LogOut />
					</Button>
				</Flex>
			</Flex>
		</header>
	);
};

export default Header;

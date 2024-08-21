import cn from 'classnames';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

import styles from './ALink.module.scss';

interface ALinkProps {
	href: string;
	children: ReactNode;
	className?: string;
}

export const ALink: FC<ALinkProps> = ({ href, children, className }) => {
	return (
		<Link className={cn(styles.wrapper, className)} href={href}>
			{children}
		</Link>
	);
};

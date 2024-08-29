import { FC } from 'react';

import styles from './Loading.module.scss';

interface LoadingProps {
	className?: string;
}

export const Loading: FC<LoadingProps> = ({}) => {
	return (
		<div className={styles.wrapper}>
			<span className={styles.loader} />
		</div>
	);
};

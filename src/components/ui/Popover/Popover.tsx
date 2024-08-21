'use client';

import { FC, useState } from 'react';
import { Popover as PopoverTiny } from 'react-tiny-popover';

import { Button, ButtonProps } from '@/components/ui';

import styles from './Popover.module.scss';

interface PopoverProps {
	content: string;
	size?: ButtonProps['size'];
}

export const Popover: FC<PopoverProps> = ({ content, size = 'small' }) => {
	const [open, setOpen] = useState(false);

	return (
		<PopoverTiny
			isOpen={open}
			content={<p className={styles.popoverWrapper}>{content}</p>}
			reposition={true}
			padding={10}
		>
			<Button
				onMouseEnter={() => setOpen(true)}
				onMouseLeave={() => setOpen(false)}
				isRound
				size={size}
			>
				!
			</Button>
		</PopoverTiny>
	);
};

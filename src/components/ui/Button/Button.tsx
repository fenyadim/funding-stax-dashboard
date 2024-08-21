import cn from 'classnames';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

import styles from './Button.module.scss';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	theme?: 'primary' | 'transparent' | 'accent';
	size?: 'extraSmall' | 'small' | 'medium' | 'large';
	isRound?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			className,
			theme = 'primary',
			size = 'large',
			isRound,
			...props
		},
		ref,
	) => {
		const mods = {
			[styles.round]: isRound,
		};

		return (
			<button
				ref={ref}
				type='button'
				className={cn(
					styles.button,
					styles[theme],
					styles[size],
					mods,
					className,
				)}
				{...props}
			>
				{children}
			</button>
		);
	},
);

Button.displayName = 'Button';

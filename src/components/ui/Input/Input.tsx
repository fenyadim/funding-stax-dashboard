import cn from 'classnames';
import React, { ComponentPropsWithoutRef, forwardRef } from 'react';

import styles from './Input.module.scss';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
	theme?: 'grey' | 'dark';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, theme = 'grey', ...props }, ref) => {
		return (
			<>
				<input
					ref={ref}
					className={cn(styles.input, className, styles[theme])}
					{...props}
				/>
			</>
		);
	},
);

Input.displayName = 'Input';

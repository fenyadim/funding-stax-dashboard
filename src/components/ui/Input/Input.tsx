import cn from 'classnames';
import React, { ComponentPropsWithoutRef, forwardRef } from 'react';

import styles from './Input.module.scss';

interface InputProps extends ComponentPropsWithoutRef<'input'> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => {
		return (
			<>
				<input
					ref={ref}
					className={cn(styles.input, className)}
					{...props}
				/>
			</>
		);
	},
);

Input.displayName = 'Input';

import React, { ComponentPropsWithoutRef, forwardRef } from 'react';

import styles from './Checkbox.module.scss';

interface CheckboxProps extends ComponentPropsWithoutRef<'input'> {
	label: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ label, ...props }, ref) => {
		return (
			<label className={styles.wrapper}>
				<input
					className={styles.checkbox}
					ref={ref}
					type='checkbox'
					{...props}
				/>
				{label}
			</label>
		);
	},
);

Checkbox.displayName = 'Checkbox';

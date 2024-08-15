import cn from 'classnames';
import { ChangeEvent, useMemo } from 'react';

import styles from './Select.module.scss';

export interface SelectItemProps<T> {
	value: T;
	content: string;
}

interface SelectProps<T> {
	options: SelectItemProps<T>[];
	value: T;
	name: string;
	onChange: (value: T) => void;
	className?: string;
}

export const Select = <T extends string>({
	name,
	options,
	value,
	onChange,
	className,
}: SelectProps<T>) => {
	const optionsList = useMemo(() => {
		return options?.map((opt) => (
			<option key={opt.value} className={styles.option} value={opt.value}>
				{opt.content}
			</option>
		));
	}, [options]);

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value as T);
	};

	return (
		<div className={cn(styles.select, className)}>
			<select name={name} onChange={onChangeHandler} value={value}>
				{optionsList}
			</select>
		</div>
	);
};

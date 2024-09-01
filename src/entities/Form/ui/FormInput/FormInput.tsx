import React, { FC, InputHTMLAttributes } from 'react';

import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	label?: string;
}

export const FormInput: FC<FormInputProps> = ({ id, label, ...otherProps }) => {
	return (
		<div>
			<Label htmlFor={id}>{label}</Label>
			<Input id={id} {...otherProps} />
		</div>
	);
};

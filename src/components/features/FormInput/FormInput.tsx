'use client';

import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { Input } from '@/components/ui';
import { InputProps } from '@/components/ui/Input/Input';

// import styles from './FormInput.module.scss';

interface FormInputProps extends InputProps {
	className?: string;
	name: string;
}

export const FormInput: FC<FormInputProps> = (props) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<>
			<Input {...props} {...register(props.name)} />
			{errors[props.name] && (
				<p>{errors[props.name]?.message?.toString()}</p>
			)}
		</>
	);
};

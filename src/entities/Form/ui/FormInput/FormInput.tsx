'use client';

import { InputHTMLAttributes } from 'react';
import type { FieldValues, Path } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Textarea,
} from '@/shared/ui';
import { Input } from '@/shared/ui/input';

interface FormInputProps<T extends FieldValues>
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'form'> {
	className?: string;
	name: Path<T>;
	label: string;
	description?: string;
	type?: InputHTMLAttributes<HTMLInputElement>['type'] | 'textarea';
}

export const FormInput = <T extends FieldValues>({
	label,
	name,
	type,
	description,
	...otherProps
}: FormInputProps<T>) => {
	const { control } = useFormContext();

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel className='text-muted-foreground ml-3'>{label}</FormLabel>
					<FormControl>
						{type === 'textarea' ? (
							<Textarea
								className='aria-[invalid=true]:bg-error/10  aria-[invalid=true]:ring-error'
								{...field}
							/>
						) : (
							<Input
								className='aria-[invalid=true]:bg-error/10  aria-[invalid=true]:ring-error'
								{...field}
								{...otherProps}
							/>
						)}
						{}
					</FormControl>
					{description && <FormDescription>{description}</FormDescription>}
					<FormMessage className='text-xs ml-3' />
				</FormItem>
			)}
		/>
	);
};

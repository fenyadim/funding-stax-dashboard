'use client';

import { InputHTMLAttributes } from 'react';
import type { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import InputMask from 'react-input-mask';

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

	const content = (field: ControllerRenderProps<FieldValues, string>) => {
		switch (type) {
			case 'textarea':
				return (
					<Textarea
						className='aria-[invalid=true]:bg-error/10  aria-[invalid=true]:ring-error'
						{...field}
					/>
				);
			case 'date':
				return (
					<InputMask
						className='flex h-10 w-full rounded-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
						mask='99/99/9999'
						placeholder='__/__/____'
						{...field}
						{...otherProps}
					/>
				);
			default:
				return (
					<Input
						className='aria-[invalid=true]:bg-error/10  aria-[invalid=true]:ring-error'
						{...field}
						{...otherProps}
					/>
				);
		}
	};

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className='flex flex-col gap-0.5'>
					<FormLabel className='text-muted-foreground ml-3'>{label}</FormLabel>
					<FormControl>{content(field)}</FormControl>
					{description && <FormDescription>{description}</FormDescription>}
					<FormMessage className='text-xs ml-3' />
				</FormItem>
			)}
		/>
	);
};

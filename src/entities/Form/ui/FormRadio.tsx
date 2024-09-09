import { InputHTMLAttributes } from 'react';
import { type FieldValues, type Path, useFormContext } from 'react-hook-form';

import {
	Flex,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/shared/ui';

export interface RadioOption {
	key: string | number;
	value: string | number;
}

interface FormRadioProps<T extends FieldValues>
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'form'> {
	className?: string;
	options: RadioOption[];
	defaultValue: RadioOption['key'];
	groupName: Path<T>;
}

export const FormRadio = <T extends FieldValues>({
	groupName,
	options,
	defaultValue,
	className,
	...otherProps
}: FormRadioProps<T>) => {
	const { control } = useFormContext();

	return (
		<FormField
			control={control}
			name={groupName}
			render={({ field }) => (
				<FormItem className='w-full'>
					<FormControl>
						<Flex onChange={field.onChange} className={className}>
							{options.map(({ key, value }) => (
								<FormItem className='block' key={String(key)}>
									<FormControl>
										<input
											className='hidden peer'
											type='radio'
											id={String(key)}
											value={key}
											name={groupName}
											defaultChecked={defaultValue === key}
											{...otherProps}
										/>
									</FormControl>
									<label
										className='inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-semibold text-base bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full h-11 px-8 peer-checked:bg-accent peer-checked:text-accent-foreground w-full !mt-0 cursor-pointer'
										htmlFor={String(key)}
									>
										{value}
									</label>
								</FormItem>
							))}
						</Flex>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

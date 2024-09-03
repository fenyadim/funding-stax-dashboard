'use client';

import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import type { FieldValues, Path, } from 'react-hook-form';

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/shared/ui';
import { Input } from '@/shared/ui/input';

interface FormInputProps<T extends FieldValues>
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'form'> {
    className?: string;
    name: Path<T>;
    label: string;
    description?: string;
}

export const FormInput = <T extends FieldValues>({
    label,
    name,
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
                        <Input
                            className='aria-[invalid=true]:bg-error/10  aria-[invalid=true]:ring-error'
                            {...field}
                            {...otherProps}
                        />
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage className='text-xs ml-3' />
                </FormItem>
            )}
        />
    );
};

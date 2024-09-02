'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormInput } from '@/entities/Form';
import { Button, Flex, Form } from '@/shared/ui';

import { changePasswordFormSchema } from '../../model/zod';

interface ChangeFormProps {}

export const ChangeForm: FC<ChangeFormProps> = () => {
	const form = useForm<z.infer<typeof changePasswordFormSchema>>({
		resolver: zodResolver(changePasswordFormSchema),
		defaultValues: {
			currentPassword: '*******',
			newPassword: '*******',
			confirmPassword: '*******',
		},
	});

	const onSubmit = (data: z.infer<typeof changePasswordFormSchema>) => {
		console.log(data);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<Flex align='stretch' direction='column' gap={8}>
					<FormInput
						type='password'
						name='currentPassword'
						label='Current password'
					/>
					<FormInput type='password' name='newPassword' label='New password' />
					<FormInput
						type='password'
						name='confirmPassword'
						label='Confirm password'
					/>
					<Button className='mt-4' variant='secondary'>
						Save
					</Button>
				</Flex>
			</form>
		</Form>
	);
};

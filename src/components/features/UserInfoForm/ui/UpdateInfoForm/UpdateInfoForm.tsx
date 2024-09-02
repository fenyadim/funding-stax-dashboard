'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormInput } from '@/entities/Form';
import { Button, Flex, Form } from '@/shared/ui';

import { updateInfoFormSchema } from '../../model/zod';

interface UpdateInfoProps {
	className?: string;
	email: string;
	firstName: string;
	lastName: string;
	phone: string;
}

export const UpdateInfoForm: FC<UpdateInfoProps> = ({
	email,
	firstName,
	lastName,
	phone,
}) => {
	const form = useForm<z.infer<typeof updateInfoFormSchema>>({
		resolver: zodResolver(updateInfoFormSchema),
		defaultValues: {
			email,
			firstName,
			lastName,
			phone,
		},
	});

	const onSubmit = (data: z.infer<typeof updateInfoFormSchema>) => {
		console.log(data);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<Flex align='stretch' direction='column' gap={8}>
					<div className='grid grid-cols-2 gap-4'>
						<FormInput name='firstName' label='First name' />
						<FormInput name='lastName' label='Last name' />
					</div>
					<FormInput name='email' label='Email' />
					<FormInput name='phone' label='Phone' type='tel' />
					<Button className='mt-4' variant='secondary'>
						Save
					</Button>
				</Flex>
			</form>
		</Form>
	);
};

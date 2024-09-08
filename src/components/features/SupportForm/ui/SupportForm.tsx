'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormInput } from '@/entities/Form';
import { Button, Card, Flex, Form } from '@/shared/ui';

import { supportFormSchema } from '../model/zod';

export const SupportForm = () => {
	const form = useForm<z.infer<typeof supportFormSchema>>({
		resolver: zodResolver(supportFormSchema),
		defaultValues: {
			email: '',
			firstName: '',
			lastName: '',
			text: '',
		},
	});

	const onSubmit = (data: z.infer<typeof supportFormSchema>) => {
		console.log(data);
	};

	return (
		<Card className='w-[400px]' size='small'>
			<h2 className='text-3xl font-semibold text-center'>Write to us</h2>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<Flex align='stretch' direction='column' gap={8}>
						<FormInput name='email' label='Email' />
						<div className='grid grid-cols-2 gap-2'>
							<FormInput name='firstName' label='First name' />
							<FormInput name='lastName' label='Last name' />
						</div>
						<FormInput name='text' label='Text' type='textarea' />
						<Button className='mt-4' variant='secondary'>
							Send
						</Button>
					</Flex>
				</form>
			</Form>
		</Card>
	);
};

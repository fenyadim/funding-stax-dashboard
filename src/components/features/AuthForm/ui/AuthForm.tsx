'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormInput } from '@/entities/Form';
import { Button, Flex, Form } from '@/shared/ui';

import { authFormSchema } from '../model/zod';

export const AuthForm = () => {
	const refId = useSearchParams().get('ref');

	const form = useForm<z.infer<typeof authFormSchema>>({
		resolver: zodResolver(authFormSchema),
		defaultValues: {
			email: '',
		},
	});

	const onSubmit = async (data: z.infer<typeof authFormSchema>) => {
		await signIn('nodemailer', {
			email: data.email,
			callbackUrl: refId ? `/api/auth/registerRef?ref=${refId}` : '/',
		});
		// await createUser({ email: data.email, refId });
		console.log(data);
	};

	return (
		<Form {...form}>
			<form className='w-full' onSubmit={form.handleSubmit(onSubmit)}>
				<Flex align='stretch' direction='column' gap={8} max>
					<FormInput type='email' name='email' label='Email' />
					<Button className='mt-4' variant='secondary'>
						Sign in with email
					</Button>
				</Flex>
			</form>
		</Form>
	);
};

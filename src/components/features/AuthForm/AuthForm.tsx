'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { FormInput } from '@/components/features/FormInput/FormInput';
import { Button, Card, Flex } from '@/components/ui';
import { TFormLoginValues, loginSchema } from '@/shared/lib/zod';

import styles from './AuthForm.module.scss';

interface AuthFormProps {
	className?: string;
}

export const AuthForm: FC<AuthFormProps> = ({}) => {
	const form = useForm<TFormLoginValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<TFormLoginValues> = async (data) => {
		try {
			await signIn('credentials', {
				...data,
				redirect: false,
			});
		} catch (e: any) {
			throw Error('Что-то пошло не так', e);
		}
	};

	return (
		<Card direction='column' gap='32' className={styles.wrapper}>
			<h1 className={styles.title}>Войти в личный кабинет</h1>
			<FormProvider {...form}>
				<form
					style={{ width: '100%' }}
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<Flex max direction='column' gap='32' align='stretch'>
						<FormInput
							name='email'
							theme='dark'
							type='email'
							placeholder='Email'
						/>

						<FormInput
							name='password'
							theme='dark'
							type='password'
							placeholder='Password'
						/>
						<Button theme='accent' type='submit'>
							{form.formState.isSubmitting ? 'Вход...' : 'Войти'}
						</Button>
					</Flex>
				</form>
			</FormProvider>
		</Card>
	);
};

// 'use client';
//
// import { signIn } from 'next-auth/react';
// import { FC, useState } from 'react';
//
// import { Button, Card } from '@/components/ui';
// import { LoginForm, RegisterForm } from '@/entities/Auth';
// import { Flex } from '@/shared/ui';
//
// import styles from './AuthForm.module.scss';
//
// interface AuthFormProps {
// 	className?: string;
// }
//
// export const AuthForm: FC<AuthFormProps> = ({}) => {
// 	const [mode, setMode] = useState<'login' | 'register'>('login');
//
// 	return (
// 		<Card className={styles.wrapper}>
// 			<h1 className={styles.title}>
// 				{mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
// 			</h1>
// 			<Flex>
// 				<Button onClick={() => setMode('login')}>Войти</Button>
// 				<Button onClick={() => setMode('register')}>Зарегистрироваться</Button>
// 			</Flex>
// 			{mode === 'login' ? <LoginForm /> : <RegisterForm />}
// 			<Button
// 				onClick={() => {
// 					signIn('google');
// 				}}
// 			>
// 				Вход через Google
// 			</Button>
// 		</Card>
// 	);
// };

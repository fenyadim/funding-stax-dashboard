import { FC } from 'react';

import { RegisterForm } from '@/components/features/RegisterForm/RegisterForm';

interface SignInPageProps {
	className?: string;
}

export const AuthPage: FC<SignInPageProps> = ({}) => {
	return <RegisterForm />;
};

import Image from 'next/image';
import Logo from 'public/logo.svg';

import { AuthForm } from '@/components/features/AuthForm';
import { Card } from '@/shared/ui';

export const LoginPage = () => {
	return (
		<Card className='items-center w-1/4'>
			<Image src={Logo} alt='Funding stax' />
			<AuthForm />
		</Card>
	);
};

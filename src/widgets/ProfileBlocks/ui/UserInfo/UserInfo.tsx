import { FC } from 'react';

import { InfoText } from '@/components/features';
import { Block, Button, Card, Input } from '@/components/ui';
import { Flex } from '@/shared/ui';

import styles from './UserInfo.module.scss';

interface UserInfoProps {
	className?: string;
}

export const UserInfo: FC<UserInfoProps> = ({}) => {
	return (
		<Block
			direction='column'
			align='start'
			gap={32}
			max
			className={styles.wrapper}
			title='User Info'
		>
			<p className={styles.note}>
				<span>Note: </span>Your full name & country of residence must match
				those on your government-issued documents
			</p>

			<Flex className={styles.cardWrapper} max>
				<Flex gap={32}>
					{/*TODO: Поменять на Image*/}
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwq7veP7WNzW-9UA4KJLXesrdwyp1GVURweg&sF'
						alt='John Doe'
						width={200}
						height={200}
						className={styles.avatar}
					/>
					<Flex className={styles.userInfo} direction='column' align='start'>
						<h3>John Doe</h3>
						<p>+7 (999) 339-39-33</p>
						<p>johndoe@gmail.com</p>
					</Flex>
				</Flex>
				<Card variant='negative'>
					<InfoText size='md' value='Not required' title='KYC Status' />
					<Button className={styles.cardButton} theme='accent'>
						Verify
					</Button>
				</Card>
			</Flex>

			<Flex align='start' className={styles.changeWrapper} max gap={32}>
				<Card size='small'>
					<h3>Change profile</h3>
					<form>
						<Flex direction='column' gap={16}>
							<Input theme='dark' name='First name' placeholder='First name' />
							<Input theme='dark' name='Last name' placeholder='Last name' />
							<Button className={styles.formButton} theme='accent'>
								Save
							</Button>
						</Flex>
					</form>
				</Card>
				<Card size='small'>
					<h3>Change password</h3>
					<form>
						<Flex direction='column' gap={16}>
							<Input
								theme='dark'
								type='password'
								name='Current password'
								placeholder='Current password'
							/>
							<Input
								theme='dark'
								type='password'
								name='New password'
								placeholder='New password'
							/>
							<Input
								theme='dark'
								type='password'
								name='Confirm new password'
								placeholder='Confirm new password'
							/>
							<Button className={styles.formButton} theme='accent'>
								Update
							</Button>
						</Flex>
					</form>
				</Card>
			</Flex>
		</Block>
	);
};

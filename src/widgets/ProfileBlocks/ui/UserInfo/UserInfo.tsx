import React, { FC } from 'react';

import { InfoText } from '@/components/features';
import { Block, Card } from '@/components/ui';
import { FormInput } from '@/entities/Form';
import { Flex } from '@/shared/ui';
import { Button } from '@/shared/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';

interface UserInfoProps {
	className?: string;
}

export const UserInfo: FC<UserInfoProps> = ({}) => {
	return (
		<Block direction='column' align='start' gap={32} max title='User Info'>
			<Card size='small'>
				<Flex justify='between' gap={32}>
					<Flex gap={32}>
						{/*TODO: Поменять на Image*/}
						<img
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwq7veP7WNzW-9UA4KJLXesrdwyp1GVURweg&sF'
							alt='John Doe'
							width={150}
							height={150}
							className='rounded-full'
						/>
						<Flex direction='column' align='start'>
							<h3 className='text-2xl'>John Doe</h3>
							<p className='text-base text-muted-foreground'>
								+7 (999) 339-39-33
							</p>
							<p className='text-base text-muted-foreground'>
								johndoe@gmail.com
							</p>
						</Flex>
					</Flex>
					<Card variant='negative'>
						<InfoText size='md' value='Not required' title='KYC Status' />
						<Button variant='secondary'>Verify</Button>
					</Card>
				</Flex>
				<p className='text-sm text-muted-foreground w-3/4'>
					<span className='text-accent'>Note: </span>Your full name & country of
					residence must match those on your government-issued documents
				</p>
				<div className='flex justify-center'>
					<Tabs defaultValue='info' className='w-[400px]'>
						<TabsList>
							<TabsTrigger value='info'>Change info</TabsTrigger>
							<TabsTrigger value='password'>Change password</TabsTrigger>
						</TabsList>
						<TabsContent value='info'>
							<form>
								<Flex align='stretch' direction='column' gap={8}>
									<FormInput
										label='First name'
										id='first-name'
										name='First name'
										placeholder='John'
									/>
									<FormInput
										label='Last name'
										id='last-name'
										name='Last name'
										placeholder='Doe'
									/>
									<FormInput
										label='Email'
										id='email'
										name='Email'
										placeholder='johndoe@gmail.com'
									/>
									<FormInput
										label='Phone'
										id='phone'
										name='Phone'
										type='tel'
										placeholder='+7 (999) 339-39-33'
									/>
									<Button className='mt-4' variant='secondary'>
										Save
									</Button>
								</Flex>
							</form>
						</TabsContent>
						<TabsContent value='password'>
							<form>
								<Flex align='stretch' direction='column' gap={16}>
									<FormInput
										label='Current password'
										id='current-password'
										name='Current password'
										type='password'
									/>
									<FormInput
										label='New password'
										id='new-password'
										name='New password'
										type='password'
									/>
									<FormInput
										label='Confirm new password'
										id='confirm-password'
										name='Confirm new password'
										type='password'
									/>
									<Button variant='secondary'>Update</Button>
								</Flex>
							</form>
						</TabsContent>
					</Tabs>
				</div>
			</Card>
		</Block>
	);
};

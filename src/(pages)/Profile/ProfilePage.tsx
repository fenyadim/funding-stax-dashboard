import { FC } from 'react';

import { UserTable } from '@/components/features/Profile';
import { ChangeForm, UpdateInfoForm } from '@/components/features/UserInfoForm';
import {
	Block,
	Button,
	Card,
	Flex,
	Separator,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/shared/ui';

export const ProfilePage: FC = () => {
	return (
		<Block
			className='grid grid-cols-3'
			align='start'
			gap={32}
			max
			title='User Info'
		>
			<Card size='small'>
				<Flex justify='between' gap={32}>
					<Flex gap={32}>
						{/*TODO: Поменять на Image и сделать редактируемым*/}
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
				</Flex>
				<p className='text-sm text-muted-foreground'>
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
							<UpdateInfoForm
								email='johndoe@gmail.com'
								firstName='John'
								lastName='Doe'
								phone='+7 (999) 339-39-33'
							/>
						</TabsContent>
						<TabsContent value='password'>
							<ChangeForm />
						</TabsContent>
					</Tabs>
				</div>
			</Card>
			<Card className='p-0'>
				<Flex className='flex-row items-center justify-between w-full p-6 pb-0'>
					<Flex direction='column' align='start' gap={4}>
						<p className='text-base font-medium'>KYC</p>
						<h3 className='text-3xl text-error font-semibold font-roboto'>
							Not verified
						</h3>
					</Flex>
					<Button variant='secondary'>Verify</Button>
				</Flex>
				<Separator className='bg-muted-foreground mx-3 w-[calc(100%-(0.75rem*2))]' />
				<div className='p-6 pt-0'>
					<p className='text-base font-normal'>
						KYC (Know Your Customer) - процедура идентификации клиентов. Она
						включает проверку личности пользователя через предоставление
						документов, перечень документов необходимых для прохождения
						процедуры:
					</p>
					<ul className='text-base text-muted-foreground my-3 mt-0 ml-6 list-disc [&>li]:mt-2'>
						<li>Паспорт/ID</li>
						<li>Имя</li>
						<li>Фамилия</li>
						<li>Отчество (если имеется)</li>
						<li>Платежный адрес (адрес фактического проживания)</li>
						<li>Номер телефона</li>
					</ul>
				</div>
			</Card>
			<Flex direction='column' align='stretch' gap={8}>
				<Card className='flex-row items-center justify-between' size='small'>
					<h3 className='text-2xl font-medium'>Referrals</h3>
					<Button variant='secondary'>Invite</Button>
				</Card>
				<UserTable />
			</Flex>
		</Block>
	);
};

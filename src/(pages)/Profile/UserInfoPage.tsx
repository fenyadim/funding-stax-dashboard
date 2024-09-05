import { FC } from 'react';

import { ChangeForm, UpdateInfoForm } from '@/components/features/UserInfoForm';
import { Block, Card } from '@/components/ui';
import {
	Button,
	Flex,
	Separator,
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/shared/ui';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';

const tableHead = ['ID', 'Name'];

const tableData: { name: string; id: string }[] = [
	{
		id: '1232',
		name: 'Vadim',
	},
	{
		id: '12345',
		name: 'Jorik',
	},
	{
		id: '123456',
		name: 'John',
	},
];

export const UserInfoPage: FC = () => {
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
			<Card className='gap-0' size='small'>
				<Flex className='mb-4' justify='between'>
					<h3 className='text-2xl font-medium'>Referrals</h3>
					<Button variant='secondary'>Invite</Button>
				</Flex>
				<Separator className='bg-muted-foreground' />
				<div className='px-5'>
					<Table>
						{tableData ? (
							<>
								<TableHeader>
									<TableRow className='border-muted-foreground hover:bg-transparent'>
										{tableHead.map((label) => (
											<TableHead key={label}>{label}</TableHead>
										))}
									</TableRow>
								</TableHeader>
								<TableBody>
									{tableData.map(({ id, name }) => (
										<TableRow className='hover:bg-accent/10' key={id}>
											<TableCell>{id}</TableCell>
											<TableCell>{name}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</>
						) : (
							<TableCaption>A list of your recent invites.</TableCaption>
						)}
					</Table>
				</div>
			</Card>
		</Block>
	);
};

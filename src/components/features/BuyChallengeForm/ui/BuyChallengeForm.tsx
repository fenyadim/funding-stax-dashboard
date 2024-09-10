'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { FormInput, FormRadio, FormSelect } from '@/entities/Form';
import { Locale } from '@/shared/config/localeConfig';
import {
	ADOffer,
	Block,
	Button,
	Card,
	Flex,
	Form,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/shared/ui';

import { InfoText } from '../../InfoText';
import { PromocodeInput } from '../../PromocodeInput';
import {
	challengeTypes,
	challengeValues,
	depositOption,
	paymentOptions,
} from '../model/options';

export const BuyChallengeForm = () => {
	const form = useForm({
		defaultValues: {
			type: 'one-phase',
			value: 6000,
			country: '',
			firstName: '',
			lastName: '',
			city: '',
			street: '',
			dateOfBrith: '',
			postalCode: '',
			payment: '',
			depositType: '',
			promo: '',
		},
	});

	const stepParam = useSearchParams().get('tab');

	const onSubmit = (data: any) => {
		console.log(data);
	};

	const t = useTranslations('PlatformPage');

	const locale = useLocale() as Locale;

	const handlePromocodeChange = (value: string) => {
		form.setValue('promo', value);
	};

	return (
		<div className='grid grid-cols-2 gap-10 h-[490px]'>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<Tabs defaultValue='step-1' value={stepParam ?? 'step-1'}>
						<TabsList>
							<TabsTrigger disabled={stepParam !== null} value='step-1'>
								Step 1
							</TabsTrigger>
							<TabsTrigger disabled={stepParam !== 'step-2'} value='step-2'>
								Step 2
							</TabsTrigger>
							<TabsTrigger disabled={stepParam !== 'step-3'} value='step-3'>
								Step 3
							</TabsTrigger>
						</TabsList>
						<TabsContent value='step-1'>
							{/*TODO: Связать страничку New Challenge с этой формой*/}
							<Block
								title='1. Choose a tariff'
								direction='column'
								gap={16}
								align='start'
								max
							>
								<Card size='small'>
									<Flex direction='column' align='start' gap={8} max>
										<h3 className='text-muted-foreground text-base font-normal'>
											Challenge type
										</h3>
										<FormRadio
											className='grid grid-cols-3 gap-4 w-full'
											defaultValue={
												form.formState.defaultValues?.type ?? 'one-phase'
											}
											groupName='type'
											options={challengeTypes}
										/>
									</Flex>
									<Flex direction='column' align='start' gap={8} max>
										<h3 className='text-muted-foreground text-base font-normal'>
											Challenge value
										</h3>
										<FormRadio
											className='grid grid-cols-3 gap-4 w-full'
											defaultValue={form.formState.defaultValues?.value ?? 6000}
											groupName='value'
											options={challengeValues}
										/>
									</Flex>
								</Card>
								<Button asChild>
									<Link href='?tab=step-2'>Next</Link>
								</Button>
							</Block>
						</TabsContent>
						<TabsContent value='step-2'>
							<Block
								title='2. Billing details'
								direction='column'
								gap={16}
								align='start'
							>
								<Card className='grid grid-cols-2 gap-4' size='small'>
									<FormInput name='firstName' label='First name' />
									<FormInput name='lastName' label='Last name' />
									<FormInput name='city' label='City' />
									<FormInput name='street' label='Street' />
									<FormInput
										name='dateOfBrith'
										label='Date of brith'
										type='date'
									/>
									<FormInput name='postalCode' label='Postal code' />
								</Card>
								<Flex gap={8}>
									<Button asChild>
										<Link href='/buy-challenge'>Past</Link>
									</Button>
									<Button asChild>
										<Link href='?tab=step-3'>Next</Link>
									</Button>
								</Flex>
							</Block>
						</TabsContent>
						<TabsContent value='step-3'>
							<Block
								title='3. Payment'
								direction='column'
								gap={16}
								align='start'
								max
							>
								<Card className='w-11/12' size='small'>
									<InfoText
										mode='currency'
										locale={locale}
										value={1176}
										title='Payment Due'
									/>
									<FormSelect
										className='w-full'
										label='Payment method'
										placeholder='Select method'
										name='payment'
										options={paymentOptions}
									/>
									<FormSelect
										className='w-full'
										label='Deposit type'
										placeholder='Select type'
										name='depositType'
										options={depositOption}
									/>
									<PromocodeInput onChange={handlePromocodeChange} />
								</Card>
								<Flex gap={8}>
									<Button asChild>
										<Link href='?tab=step-2'>Past</Link>
									</Button>
									<Button type='submit' variant='secondary'>
										Proceed to pay
									</Button>
								</Flex>
							</Block>
						</TabsContent>
					</Tabs>
				</form>
			</Form>
			<ADOffer />
		</div>
	);
};

'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { InfoText } from '@/components/features';
import { FormInput, FormRadio, RadioOption } from '@/entities/Form';
import { Locale } from '@/shared/config/localeConfig';
import { Block, Button, Flex, Form } from '@/shared/ui';
import { formatLocaleNumber } from '@/shared/utils/formatLocale';

export const BuyChallengePage = () => {
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

	const onSubmit = (data: any) => {
		console.log(data);
	};

	const t = useTranslations('PlatformPage');

	const locale = useLocale() as Locale;

	const challengeTypes: RadioOption[] = [
		{ key: 'one-phase', value: t('One Phase') },
		{ key: 'two-phase', value: t('Two Phase') },
		{ key: 'swing', value: t('Swing') },
	];

	const challengeValues: RadioOption[] = [
		{ key: 6000, value: `$ ${formatLocaleNumber(locale, 6000)}` },
		{ key: 15000, value: `$ ${formatLocaleNumber(locale, 15000)}` },
		{ key: 25000, value: `$ ${formatLocaleNumber(locale, 25000)}` },
		{ key: 50000, value: `$ ${formatLocaleNumber(locale, 50000)}` },
		{ key: 100000, value: `$ ${formatLocaleNumber(locale, 100000)}` },
		{ key: 200000, value: `$ ${formatLocaleNumber(locale, 200000)}` },
	];

	return (
		<Form {...form}>
			<form className='w-full' onSubmit={form.handleSubmit(onSubmit)}>
				<Flex className='pl-1' direction='column' align='start' gap={32}>
					<Block
						title='1. Choose a tariff'
						direction='column'
						align='start'
						gap={32}
						max
					>
						<Flex direction='column' align='start' gap={8} max>
							<h3 className='text-muted-foreground text-base font-normal'>
								Challenge type
							</h3>
							<FormRadio
								className='grid grid-cols-3 gap-4 w-1/2'
								defaultValue={form.formState.defaultValues?.type ?? 'one-phase'}
								groupName='type'
								options={challengeTypes}
							/>
						</Flex>
						<Flex direction='column' align='start' gap={8} max>
							<h3 className='text-muted-foreground text-base font-normal'>
								Challenge value
							</h3>
							<FormRadio
								className='grid grid-cols-3 gap-4 w-1/2'
								defaultValue={form.formState.defaultValues?.value ?? 6000}
								groupName='value'
								options={challengeValues}
							/>
						</Flex>
					</Block>
					<Block
						title='2. Billing details'
						className='grid grid-cols-2 gap-4'
						gap={8}
					>
						<FormInput name='firstName' label='First name' />
						<FormInput name='lastName' label='Last name' />
						<FormInput name='city' label='City' />
						<FormInput name='street' label='Street' />
						<FormInput name='dateOfBrith' label='Date of brith' type='date' />
						<FormInput name='postalCode' label='Postal code' />
					</Block>
					<Block title='3. Payment'>
						<InfoText
							mode='currency'
							locale={locale}
							value={1176}
							title='Payment Due'
						/>
					</Block>
					<Button type='submit' variant='secondary'>
						Submit
					</Button>
				</Flex>
			</form>
		</Form>
	);
};

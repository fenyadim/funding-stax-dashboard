import { useLocale, useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { FormInput, FormRadio, FormSelect } from '@/entities/Form';
import { Locale } from '@/shared/config/localeConfig';
import { Block, Button, Card, Flex, Form } from '@/shared/ui';
import { InfoText } from '../../InfoText';
import { PromocodeInput } from '../../PromocodeInput';
import { challengeTypes, challengeValues, depositOption, paymentOptions } from '../model/options';

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

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const t = useTranslations('PlatformPage');

  const locale = useLocale() as Locale;


  const handlePromocodeChange = (value: string) => {
    form.setValue('promo', value)
  }

  return (
    <Form {...form}>
      <form className='w-full' onSubmit={form.handleSubmit(onSubmit)}>
        <Flex className='pl-1' direction='column' align='start' gap={32}>
          <Block
            title='1. Choose a tariff'
            max
          >
            <Card size='small'>
              <Flex direction='column' align='start' gap={8} max>
                <h3 className='text-muted-foreground text-base font-normal'>
                  Challenge type
                </h3>
                <FormRadio
                  className='grid grid-cols-3 gap-4 w-full'
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
                  className='grid grid-cols-3 gap-4 w-full'
                  defaultValue={form.formState.defaultValues?.value ?? 6000}
                  groupName='value'
                  options={challengeValues}
                />
              </Flex>
            </Card>
          </Block>
          <Block
            title='2. Billing details'

          >
            <Card className='grid grid-cols-2 gap-4' size='small'>
              <FormInput name='firstName' label='First name' />
              <FormInput name='lastName' label='Last name' />
              <FormInput name='city' label='City' />
              <FormInput name='street' label='Street' />
              <FormInput name='dateOfBrith' label='Date of brith' type='date' />
              <FormInput name='postalCode' label='Postal code' />
            </Card>
          </Block>
          <Block title='3. Payment' direction='column' gap={16} align='start' max>
            <Card className='w-1/3' size='small'>
              <InfoText
                mode='currency'
                locale={locale}
                value={1176}
                title='Payment Due'
              />
              <FormSelect className='w-full' label='Payment method' placeholder='Select method' name='payment' options={paymentOptions} />
              <FormSelect className='w-full' label='Deposit type' placeholder='Select type' name='depositType' options={depositOption} />
              <PromocodeInput onChange={handlePromocodeChange} />
            </Card>
          </Block>
          <Button type='submit' variant='secondary'>
            Proceed to pay
          </Button>
        </Flex>
      </form>

    </Form>
  )
}
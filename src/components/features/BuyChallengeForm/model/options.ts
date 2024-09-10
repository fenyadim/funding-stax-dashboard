import { IRadioOption, ISelectOption } from "@/entities/Form";
import { formatLocaleNumber } from "@/shared/utils/formatLocale";

export const challengeTypes: IRadioOption[] = [
  { key: 'one-phase', value: 'One Phase' },
  { key: 'two-phase', value: 'Two Phase' },
  { key: 'swing', value: 'Swing' }
];

export const challengeValues: IRadioOption[] = [
  { key: 6000, value: `$ ${formatLocaleNumber('en', 6000)}` },
  { key: 15000, value: `$ ${formatLocaleNumber('en', 15000)}` },
  { key: 25000, value: `$ ${formatLocaleNumber('en', 25000)}` },
  { key: 50000, value: `$ ${formatLocaleNumber('en', 50000)}` },
  { key: 100000, value: `$ ${formatLocaleNumber('en', 100000)}` },
  { key: 200000, value: `$ ${formatLocaleNumber('en', 200000)}` },
];

export const paymentOptions: ISelectOption[] = [
  {
    key: 'card',
    value: 'Card'
  }
]

export const depositOption: ISelectOption[] = [
  {
    key: 'currency',
    value: 'Currency'
  }
]
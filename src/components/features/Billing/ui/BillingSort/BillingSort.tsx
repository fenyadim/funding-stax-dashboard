import { ArrowDownWideNarrow, Search } from 'lucide-react';
import { FC } from 'react';

import { Button, DatePickerWithRange, Flex, Input } from '@/shared/ui';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/select';

interface BillingSortProps {}

export const BillingSort: FC<BillingSortProps> = ({}) => {
	return (
		<Flex direction='column' align='start' gap={16} max>
			<Flex className='w-full' gap={16}>
				<Button className='flex-none' size='icon'>
					<ArrowDownWideNarrow />
				</Button>
				<Input placeholder='Order number' />
				<DatePickerWithRange />
				<Select>
					<SelectTrigger>
						<SelectValue placeholder='Status' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='expired'>Expired</SelectItem>
						<SelectItem value='completed'>Completed</SelectItem>
						<SelectItem value='incomplete'>Payment incomplete</SelectItem>
					</SelectContent>
				</Select>
				<Select>
					<SelectTrigger>
						<SelectValue placeholder='Crypto currency' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='expired'>Expired</SelectItem>
						<SelectItem value='completed'>Completed</SelectItem>
						<SelectItem value='incomplete'>Payment incomplete</SelectItem>
					</SelectContent>
				</Select>
				<Button variant='secondary'>
					<Search />
				</Button>
			</Flex>
		</Flex>
	);
};

import Image from 'next/image';
import Link from 'next/link';

import { Button, Card, Checkbox, Flex, Label } from '@/shared/ui';
import { cn } from '@/shared/utils/utils';

export const ADOffer = ({ className }: { className?: string }) => {
	return (
		<Card
			className={cn('self-center items-center gap-2 w-fit', className)}
			size='small'
		>
			<h3 className='font-roboto text-5xl'>
				<span className='text-accent text-3xl pr-2'>$</span>299
			</h3>
			<h4>50K One Step Student</h4>
			<p className='text-base text-muted-foreground'>Account Size 50000 USD</p>
			<Image
				src='/trade-locker.png'
				alt='Trade loceker'
				width={142}
				height={50}
			/>
			<Flex direction='column' align='start' gap={8}>
				<Flex gap={8}>
					<Checkbox checked />
					<Label className='text-muted-foreground text-base'>
						10% Profit Target*
					</Label>
				</Flex>
				<Flex gap={8}>
					<Checkbox checked />
					<Label className='text-muted-foreground text-base'>
						6% Max Overall Loss*
					</Label>
				</Flex>
				<Flex gap={8}>
					<Checkbox checked />
					<Label className='text-muted-foreground text-base'>
						4% Max daily Loss*
					</Label>
				</Flex>
			</Flex>
			<p className='text-base text-muted-foreground font-normal'>
				*For a more detailer overview visit our{' '}
				<Button className='p-0' variant='link' asChild>
					<Link href='#'>website</Link>
				</Button>
			</p>
		</Card>
	);
};

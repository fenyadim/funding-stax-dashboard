import { Mail, MapPin } from 'lucide-react';

import { GoogleMap } from '@/entities/GoogleMap';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Block,
	Flex,
} from '@/shared/ui';

const faqConfig: { question: string; answer: string }[] = [
	{
		question: 'What is Funding stax?',
		answer:
			'Funding Stax is a Proprietary trading firm that is looking for promising traders to join our growing global trading community.',
	},
	{
		question: 'What is the maximum number of accounts allowed?',
		answer:
			'Funding Stax is a Proprietary trading firm that is looking for promising traders to join our growing global trading community.',
	},
	{
		question: 'Why choose Funding stax?',
		answer:
			'Funding Stax is a Proprietary trading firm that is looking for promising traders to join our growing global trading community.',
	},
	{
		question: 'What payment methods does cove funded offer?',
		answer:
			'Funding Stax is a Proprietary trading firm that is looking for promising traders to join our growing global trading community.',
	},
	{
		question: 'Who can join Funding stax?',
		answer:
			'Funding Stax is a Proprietary trading firm that is looking for promising traders to join our growing global trading community.',
	},
	{
		question: 'What leverage does cove funded offer?',
		answer:
			'Funding Stax is a Proprietary trading firm that is looking for promising traders to join our growing global trading community.',
	},
	{
		question: 'Do you have an affiliate scheme?',
		answer:
			'Funding Stax is a Proprietary trading firm that is looking for promising traders to join our growing global trading community.',
	},
	{
		question: 'How can i reset my funded account challenge trading password?',
		answer:
			'Funding Stax is a Proprietary trading firm that is looking for promising traders to join our growing global trading community.',
	},
	{
		question: 'What features & platforms can i use to Trade With?',
		answer:
			'Funding Stax is a Proprietary trading firm that is looking for promising traders to join our growing global trading community.',
	},
	{
		question: 'How do i start?',
		answer:
			'Funding Stax is a Proprietary trading firm that is looking for promising traders to join our growing global trading community.',
	},
];

export const FaqPage = () => {
	return (
		<Flex direction='column' align='start' gap={32}>
			<Flex max justify='between' gap={32}>
				<Flex className='w-1/3 pl-10' direction='column' align='start' gap={16}>
					<Flex gap={16} className='text-accent'>
						<Mail />
						<h3 className='text-foreground'>fundingstax@gmail.com</h3>
					</Flex>
					<Flex gap={16} className='text-accent'>
						<MapPin />
						<h3 className='text-foreground'>Moscow, Lenina 100</h3>
					</Flex>
				</Flex>
				<GoogleMap />
			</Flex>
			<Block title='FAQ' max gap={16}>
				<Accordion className='flex gap-4 w-full' type='single' collapsible>
					<Flex direction='column' align='stretch' gap={16} max>
						{faqConfig.map(
							({ question, answer }, index) =>
								index % 2 === 0 && (
									<AccordionItem key={question} value={`item-${index}`}>
										<AccordionTrigger>{question}</AccordionTrigger>
										<AccordionContent>{answer}</AccordionContent>
									</AccordionItem>
								),
						)}
					</Flex>
					<Flex direction='column' align='stretch' gap={16} max>
						{faqConfig.map(
							({ question, answer }, index) =>
								index % 2 === 1 && (
									<AccordionItem key={question} value={`item-${index}`}>
										<AccordionTrigger>{question}</AccordionTrigger>
										<AccordionContent>{answer}</AccordionContent>
									</AccordionItem>
								),
						)}
					</Flex>
				</Accordion>
			</Block>
		</Flex>
	);
};

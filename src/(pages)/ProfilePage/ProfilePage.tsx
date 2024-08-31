'use client';

import { FC, ReactNode, useState } from 'react';

import { Block, TabItem, Tabs } from '@/components/ui';
import { Flex } from '@/shared/ui';
import { UserInfo } from '@/widgets/ProfileBlocks';

interface ProfilePageProps {
	className?: string;
}

const tabs: TabItem[] = [
	{
		label: 'User Info',
		value: 'user-info',
	},
	{
		label: 'Affiliates',
		value: 'affiliates',
	},
	{
		label: 'Billing',
		value: 'billing',
	},
];

export const ProfilePage: FC<ProfilePageProps> = ({}) => {
	const [activeTab, setActiveTab] = useState(tabs[0].value);

	const elements: Record<string, ReactNode> = {
		'user-info': <UserInfo />,
		affiliates: <Block title='Affiliates'>Affiliates</Block>,
		billing: <Block title='Billing'>Billing</Block>,
	};

	return (
		<Flex align='start' direction='column' gap={32}>
			<Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			{elements[activeTab]}
		</Flex>
	);
};

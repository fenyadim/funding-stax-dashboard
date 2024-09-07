export interface SubMenuType extends MenuConfig {
	parentPath: string;
}

export interface MenuConfig {
	path?: string;
	name: string;
	submenu?: SubMenuType[];
}

export const menuConfig: MenuConfig[] = [
	{
		path: '/',
		name: 'New Challenge',
	},
	{
		name: 'Affiliates',
		submenu: [
			{
				path: '/affiliates/referrals',
				name: 'Referrals',
				parentPath: 'affiliates',
			},
			{
				path: '/affiliates/referrals-list',
				name: 'Referrals List',
				parentPath: 'affiliates',
			},
		],
	},
	{
		path: '/challenge-history',
		name: 'Challenge History',
	},
	{
		name: 'Payouts',
		submenu: [
			{
				path: '/payouts/challenge',
				name: 'Challenge Payouts',
				parentPath: 'payouts',
			},
			{
				path: '/payouts/referral',
				name: 'Referral Payouts',
				parentPath: 'payouts',
			},
		],
	},
	{
		name: 'My Profile',
		path: '/profile',
	},
	{
		path: '/faq',
		name: 'FAQ & Support',
	},
];

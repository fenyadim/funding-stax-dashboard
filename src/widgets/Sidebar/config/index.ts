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
			{
				path: '/affiliates/payouts',
				name: 'Payouts',
				parentPath: 'affiliates',
			},
		],
	},
	{
		path: '/leaderboard',
		name: 'Leaderboard',
	},
	{
		path: '/challenge-history',
		name: 'Challenge History',
	},
	{
		name: 'My Profile',
		submenu: [
			{
				path: '/profile/user-info',
				name: 'User Info',
				parentPath: 'profile',
			},
			{
				path: '/profile/billing',
				name: 'Billing',
				parentPath: 'profile',
			},
		],
	},
	{
		path: '/faq',
		name: 'FAQ & Support',
	},
];

export interface MenuConfig {
	path?: string;
	name: string;
	submenu?: MenuConfig[];
}

export const menuConfig: MenuConfig[] = [
	{
		path: '/',
		name: 'New Challenge',
	},
	{
		path: '/affiliates',
		name: 'Affiliates',
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
			},
			{
				path: '/profile/billing',
				name: 'Billing',
			},
		],
	},
	{
		path: '/faq',
		name: 'FAQ & Support',
	},
];

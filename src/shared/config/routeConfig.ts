interface IRouteConfig {
	path: string;
	name: string;
}

export const routeConfig = (): IRouteConfig[] => [
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
		path: '/profile',
		name: 'My Profile',
	},
	{
		path: '/faq',
		name: 'FAQ & Support',
	},
];

export type LinkProps = {
	to: string;
	icon: string;
	label: string;
};

export const NavListItems: LinkProps[] = [
	{
		to: '/',
		icon: 'material-symbols:home-app-logo',
		label: 'Home',
	},
	{
		to: '/swisslife',
		icon: 'carbon:building-insights-3',
		label: 'Swiss Life',
	},
	{
		to: '/frontend',
		icon: 'mdi:react',
		label: 'FrontEnd',
	},
	{
		to: '/backend',
		icon: 'simple-icons:dotnet',
		label: 'BackEnd',
	},
	{
		to: '/marketing',
		icon: 'icon-park-outline:customer',
		label: 'Marketing',
	},
	{
		to: '/knowhow',
		icon: 'simple-icons:knowledgebase',
		label: 'Know-how',
	},
	{
		to: '/shortcuts',
		icon: 'material-symbols:keyboard',
		label: 'Shortcuts',
	},
];

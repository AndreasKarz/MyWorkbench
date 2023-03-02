import NavBarLink from './NavBarLink';

export default function NavBar() {
	return (
		<div className='bg-gray-200'>
			<NavBarLink
				to='/'
				icon='fluent:home-12-regular'
				label='Home'
			/>
			<NavBarLink
				to='/services'
				icon='fluent:service-bell-20-regular'
				label='Services'
			/>
			<NavBarLink
				to='/pricing'
				icon='fluent:money-24-regular'
				label='Pricing'
			/>
			<NavBarLink
				to='/contact'
				icon='fluent:contact-card-ribbon-16-regular'
				label='Contact'
			/>
			<NavBarLink
				to='/about'
				icon='fluent:people-team-20-regular'
				label='About'
			/>
		</div>
	);
}

import { Divider, List, Paper, Typography } from '@mui/material';
import { NavListItems } from './NavListItems';
import NavListLink from './NavListLink';

export default function NavList() {
	return (
		<Paper
			id='nav'
			square={true}
			elevation={16}
		>
			<Typography
				variant='h5'
				align='center'
				mt={2}
				sx={{
					fontWeight: '200',
					fontFamily: "'Open Sans', sans-serif",
				}}
			>
				MyWorkbench
			</Typography>
			;
			<List>
				{NavListItems.map(({ to, icon, label }, idx: number) => {
					return (
						<NavListLink
							key={idx.toString() + to}
							to={to}
							label={label}
							icon={icon}
						/>
					);
				})}
			</List>
			<Divider />
			<List>
				<NavListLink
					to='/settings'
					label='Settings'
					icon='material-symbols:settings-outline'
				/>
				<NavListLink
					to='/about'
					label='About'
					icon='mdi:about-circle-outline'
				/>
			</List>
		</Paper>
	);
}

import {
	Paper,
	Typography,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from '@mui/material';
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
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemText primary='Trash' />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton
						component='a'
						href='#simple-list'
					>
						<ListItemText primary='Spam' />
					</ListItemButton>
				</ListItem>
			</List>
		</Paper>
	);
}

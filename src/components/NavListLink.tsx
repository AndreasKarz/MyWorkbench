import { Icon } from '@iconify/react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { LinkProps } from './NavListItems';

export default function NavListLink({ to, icon, label }: LinkProps) {
	return (
		<ListItem disablePadding>
			<ListItemButton
				component={RouterLink}
				to={to}
			>
				<ListItemIcon>
					<Icon
						icon={icon}
						width='24'
						height='24'
					/>
				</ListItemIcon>
				<ListItemText primary={label} />
			</ListItemButton>
		</ListItem>
	);
}

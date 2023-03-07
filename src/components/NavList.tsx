import DraftsIcon from '@mui/icons-material/Drafts';
import InboxIcon from '@mui/icons-material/Inbox';
import { Paper } from '@mui/material';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import NavBarLink from './NavBarLink';

export default function NavList() {
	return (
		<Paper
			id='nav'
			square={true}
			elevation={16}
		>
			<List>
				<ListItem disablePadding>
					<ListItemButton
						component={RouterLink}
						to='/'
					>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary='Inbox' />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton
						component={RouterLink}
						to='/services'
					>
						<ListItemIcon>
							<DraftsIcon />
						</ListItemIcon>
						<ListItemText primary='Drafts' />
					</ListItemButton>
				</ListItem>
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

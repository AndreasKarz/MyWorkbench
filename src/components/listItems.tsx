import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export const mainListItems = (
	<React.Fragment>
		<ListItemButton
			component={Link}
			to={'/'}
		>
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText primary='Dashboard' />
		</ListItemButton>
		<ListItemButton
			component={Link}
			to={'policy'}
		>
			<ListItemIcon>
				<ShoppingCartIcon />
			</ListItemIcon>
			<ListItemText primary='Policy' />
		</ListItemButton>
		<ListItemButton>
			<ListItemIcon>
				<Icon
					icon='fluent:money-24-regular'
					height={18}
					className='inline-block float-left mr-1'
					inline={true}
				/>
			</ListItemIcon>
			<ListItemText primary='Customers' />
		</ListItemButton>
		<ListItemButton>
			<ListItemIcon>
				<BarChartIcon />
			</ListItemIcon>
			<ListItemText primary='Reports' />
		</ListItemButton>
		<ListItemButton>
			<ListItemIcon>
				<LayersIcon />
			</ListItemIcon>
			<ListItemText primary='Integrations' />
		</ListItemButton>
	</React.Fragment>
);

export const secondaryListItems = (
	<React.Fragment>
		<ListSubheader
			component='div'
			inset
		>
			Saved reports
		</ListSubheader>
		<ListItemButton>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary='Current month' />
		</ListItemButton>
		<ListItemButton>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary='Last quarter' />
		</ListItemButton>
		<ListItemButton>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary='Year-end sale' />
		</ListItemButton>
	</React.Fragment>
);
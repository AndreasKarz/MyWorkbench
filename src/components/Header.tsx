import { Icon } from '@iconify/react';
import {
	Container,
	FilledInput,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
} from '@mui/material';
import './Header.css';

type HeaderProps = {
	search: (term: string) => void;
};

type IconProps = {
	prefix: string;
	icon: string;
	label: string;
};

const SearchIcons: IconProps[] = [
	{
		prefix: 'q',
		icon: 'ooui:search',
		label: 'MyWorkbench Search',
	},
	{
		prefix: 'p',
		icon: 'simple-icons:producthunt',
		label: 'Phind Search',
	},
	{
		prefix: 'i',
		icon: 'simple-icons:iconify',
		label: 'Search Icon',
	},
];

export default function Header({ search }: HeaderProps) {
	return (
		<header>
			<Container maxWidth='xl'>
				<div id='toolbox'>
					<FormControl
						sx={{ mt: 1, width: '60ch' }}
						variant='filled'
					>
						<InputLabel htmlFor='search-term'>Search</InputLabel>
						<FilledInput
							id='search-term'
							size='small'
							endAdornment={
								<InputAdornment position='end'>
									{SearchIcons.map(function (i: IconProps) {
										return (
											<IconButton
												title={i.label}
												onClick={() =>
													search(
														i.prefix +
															':' +
															(document.getElementById('search-term') as HTMLInputElement).value
													)
												}
												edge='end'
											>
												<Icon
													icon={i.icon}
													height={25}
													width={25}
												/>
											</IconButton>
										);
									})}
								</InputAdornment>
							}
						/>
					</FormControl>
				</div>
			</Container>
		</header>
	);
}

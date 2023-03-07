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

export default function Header() {
	return (
		<header>
			<Container>
				<div id='toolbox'>
					<FormControl
						sx={{ mt: 1, width: '35ch' }}
						variant='filled'
					>
						<InputLabel htmlFor='search-term'>Search</InputLabel>
						<FilledInput
							id='search-term'
							size='small'
							endAdornment={
								<InputAdornment position='end'>
									<IconButton
										aria-label='toggle password visibility'
										//onClick={handleClickShowPassword}
										edge='end'
									>
										<Icon
											icon={'ic:outline-manage-search'}
											height={30}
											width={30}
										/>
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>
				</div>
			</Container>
		</header>
	);
}

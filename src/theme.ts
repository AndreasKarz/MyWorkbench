import { createTheme, ThemeOptions } from '@mui/material/styles';

// https://zenoo.github.io/mui-theme-creator/

const themeOptions: ThemeOptions = {
	palette: {
		mode: 'light',
		primary: {
			main: '#d82034',
		},
		secondary: {
			main: '#f50057',
		},
	},
};

const theme = createTheme(themeOptions);
export default theme;

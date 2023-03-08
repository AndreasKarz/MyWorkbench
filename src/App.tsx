import { createTheme, ThemeProvider } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import NavList from './components/NavList';
import * as Pages from './pages/_index';

let theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#d82034',
		},
		secondary: {
			main: '#f50057',
		},
	},
});

export default function App() {
	const navigate = useNavigate();

	const search = function (term: string) {
		const s = term.split(':');
		switch (s[0]) {
			case 'i':
				window.open('https://icon-sets.iconify.design/?query=' + s[1], '_blank');
				break;
			case 'p':
				window.open('https://www.phind.com/search?q=' + s[1], '_blank');
				break;

			default:
				navigate('/services?q=' + s[1]);
				break;
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<div id='container'>
				<NavList />
				<div className='content'>
					<Header search={search} />
					<Routes>
						<Route
							path='/'
							element={<Pages.Home />}
						/>
						<Route
							path='services'
							element={<Pages.Services />}
						/>
						<Route
							path='pricing'
							element={<Pages.Pricing />}
						/>
						<Route
							path='about'
							element={<Pages.About />}
						/>
						<Route
							path='contact'
							element={<Pages.Contact />}
						/>
						<Route
							path='policy'
							element={<Pages.Policy />}
						/>
						<Route
							path='*'
							element={<Pages.NotFound />}
						/>
					</Routes>
				</div>
			</div>
		</ThemeProvider>
	);
}

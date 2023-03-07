import { createTheme, Paper, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBarLink from './components/NavListLink';
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
	return (
		<ThemeProvider theme={theme}>
			<div id='container'>
				<NavList />
				<div className='content'>
					<Header />
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

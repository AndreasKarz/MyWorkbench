import { Container } from '@mui/material';
import useSetDocumentTitle from '../hooks/useSetDocumentTitle';

function About() {
	useSetDocumentTitle();

	return (
		<Container maxWidth='xl'>
			<h1>About</h1>
		</Container>
	);
}

export default About;

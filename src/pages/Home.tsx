import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import links from '../data/links.json';
import useSetDocumentTitle from '../hooks/useSetDocumentTitle';

export default function Home() {
	useSetDocumentTitle();
	const { t } = useTranslation();
	const distinctTags = [...new Set(links.flatMap((item) => item.tags))];

	return (
		<Container>
			<h1>Home</h1>
			<p>
				{distinctTags.map(function (d) {
					return <span key={d}>{d} </span>;
				})}
			</p>
			<Button variant='contained'>Hello World</Button>
		</Container>
	);
}

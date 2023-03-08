import { Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import links from '../data/links.json';
import useSetDocumentTitle from '../hooks/useSetDocumentTitle';

export default function Home() {
	useSetDocumentTitle();
	const { t } = useTranslation();
	const distinctTags = [...new Set(links.flatMap((item) => item.tags))];

	return (
		<Container maxWidth='xl'>
			<h1>Home</h1>
			<Grid
				container
				spacing={5}
			>
				<Grid
					item
					xs={8}
				>
					<div>
						<h2>Daily Tools</h2>
						<p>
							{distinctTags.map(function (d) {
								return <span key={d}>{d} </span>;
							})}
						</p>
					</div>
				</Grid>
				<Grid
					item
					xs
				>
					<div>
						<h2>Today</h2>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
}

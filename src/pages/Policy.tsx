import {
	Button,
	Card,
	CardActions,
	CardContent,
	Chip,
	Container,
	Grid,
	Paper,
	Stack,
	Typography,
} from '@mui/material';
import useSetDocumentTitle from '../hooks/useSetDocumentTitle';
import links from '../data/links.json';

// https://mui.com/material-ui/react-autocomplete/#multiple-values

function Policy() {
	useSetDocumentTitle();
	const distinctTags = [...new Set(links.flatMap((item) => item.tags))];

	const handleDelete = () => {
		console.info('You clicked the delete icon.');
	};

	return (
		<Container
			maxWidth='lg'
			sx={{ mt: 4, mb: 4 }}
		>
			<Grid
				container
				spacing={3}
			>
				<Paper elevation={8}>
					{distinctTags.map(function (d) {
						return (
							<Chip
								key={d}
								label={d}
								variant='outlined'
								onDelete={handleDelete}
							/>
						);
					})}
				</Paper>
				<Card
					sx={{ minWidth: 275 }}
					elevation={12}
				>
					<CardContent>
						<Typography
							sx={{ fontSize: 14 }}
							color='text.secondary'
							gutterBottom
						>
							Word of the Day
						</Typography>
						<Typography
							variant='h5'
							component='div'
						>
							benevolent
						</Typography>
						<Typography
							sx={{ mb: 1.5 }}
							color='text.secondary'
						>
							adjective
						</Typography>
						<Typography variant='body2'>
							well meaning and kindly.
							<br />
							{'"a benevolent smile"'}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size='small'>Learn More</Button>
					</CardActions>
				</Card>
			</Grid>
		</Container>
	);
}

export default Policy;

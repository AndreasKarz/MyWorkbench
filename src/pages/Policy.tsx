import {
	Button,
	Card,
	CardActions,
	CardContent,
	Chip,
	Container,
	Grid,
	Paper,
	Typography,
} from '@mui/material';
import { MD5 } from 'md5-js-tools';
import links from '../data/links.json';
import useSetDocumentTitle from '../hooks/useSetDocumentTitle';
import { Formik, Field, Form, FormikHelpers } from 'formik';

// https://mui.com/material-ui/react-autocomplete/#multiple-values

// https://formik.org/docs/examples/typescript

interface Values {
	firstName: string;
	lastName: string;
	email: string;
}

/*
db.Links.insert([{
    _id: hex_md5("https://www.youtube.com/@WebDevSimplified/playlists"),
    url: "https://www.youtube.com/@WebDevSimplified/playlists",
    title: "Web Dev Simplified",
    description: " These videos will teach you HTML, CSS, and JavaScript through a beginner friendly band web site project.",
    tags: ["KnowHow", "FrontEnd", "CSS", "TypeScript", "React", "ToFollow"],
    icon: "https://www.youtube.com/s/desktop/82a4cf4f/img/favicon_144x144.png",
    "timestamp": new Date(),
    help: [ 
        // {
        //     title: "Tailwind CSS Cheat Sheet",
        //     url: "https://flowbite.com/tools/tailwind-cheat-sheet/"
        // },
        // {
        //     title: "Nerdcave's original cheat sheet.",
        //     url: "https://nerdcave.com/tailwind-cheat-sheet"
        // }
    ]
}]);
*/

function Policy() {
	useSetDocumentTitle();
	const distinctTags = [...new Set(links.flatMap((item) => item.tags))];
	const hash = MD5.generate('FunkyMonkey');

	const handleDelete = () => {
		console.info('You clicked the delete icon.');
	};

	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
			}}
			onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 500);
			}}
		>
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
						sx={{ minWidth: 275, marginTop: 10 }}
						elevation={12}
					>
						<CardContent>
							<Typography
								sx={{ fontSize: 14 }}
								color='text.secondary'
								gutterBottom
							>
								Word of the Day {hash}
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
		</Formik>
	);
}

export default Policy;

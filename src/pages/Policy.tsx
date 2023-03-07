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
		></Formik>
	);
}

export default Policy;

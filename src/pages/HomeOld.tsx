import useSetDocumentTitle from '../hooks/useSetDocumentTitle';
import { useTranslation, Trans } from 'react-i18next';
import links from '../data/links.json';

export default function Home() {
	useSetDocumentTitle();
	const { t } = useTranslation();
	const distinctTags = [...new Set(links.flatMap((item) => item.tags))];
	console.log(distinctTags);

	return (
		<div className='container mx-auto px-4 mt-12'>
			<h1 className='mb-4 text-4xl font-light leading-none tracking-tight text-gray-500 md:text-5xl lg:text-6xl'>
				Work smarter, not harder
			</h1>
			<p className='mb-6 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48'>
				{distinctTags.map(function (d) {
					return (
						<span
							key={d}
							className='inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded'
						>
							{d}
							<button
								type='button'
								className='inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900'
								data-dismiss-target='#badge-dismiss-default'
								aria-label='Remove'
							>
								<svg
									aria-hidden='true'
									className='w-3.5 h-3.5'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fill-rule='evenodd'
										d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
										clip-rule='evenodd'
									></path>
								</svg>
								<span className='sr-only'>Remove badge</span>
							</button>
						</span>
					);
				})}
			</p>
			<dl className='mb-6'>
				<dt className='text-xl font-bold mt-4'>React</dt>
				<dd className='text-sm'></dd>
				<dt className='text-xl font-bold mt-4'>React Router</dt>
				<dd className='text-sm'>{t('router')}</dd>
				<dt className='text-xl font-bold mt-4'>Tailwind CSS</dt>
				<dd className='text-sm'>
					A utility-first CSS framework packed with classes like flex, pt-4, text-center and
					rotate-90 that can be composed to build any design, directly in your markup.
				</dd>
				<dt className='text-xl font-bold mt-4'>Flowbite</dt>
				<dd className='text-sm'>
					Get started with the most popular open-source library of interactive UI components built
					with the utility classes from Tailwind CSS.
				</dd>
				<dt className='text-xl font-bold mt-4'>Flowbite React</dt>
				<dd className='text-sm'>rings Flowbite to React with special React Components.</dd>
				<dt className='text-xl font-bold mt-4'>Iconify</dt>
				<dd className='text-sm'>Over 100,000 open source vector icons as a React Component.</dd>
			</dl>
			<div className='flex space-x-8 flex-row'>
				<div className='basis-1/4 bg-gray-400 shadow-xl'>
					01 fdsaf saf asf
					<br /> asf asf af aff{' '}
				</div>
				<div className='basis-1/4 bg-h1_light-200 shadow-xl'>02</div>
				<div className='basis-1/4 bg-yellow-100 shadow-xl'>03</div>
				<div className='basis-1/4 bg-purple-300'>
					<a
						href='#'
						className='block max-w-sm p-6 bg-white border border-gray-200 shadow-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
					>
						<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
							Noteworthy technology acquisitions 2021
						</h5>
						<p className='font-normal text-gray-700 dark:text-gray-400'>
							Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
							chronological order.
						</p>
					</a>
				</div>
			</div>
		</div>
	);
}

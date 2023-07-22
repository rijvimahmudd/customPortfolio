import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { useState } from 'react';
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import BoxCard from '../shared/Card';
import { cardObject } from '../../utils/cardObject';

const initEducation = [
	{
		id: 1,
		icon: <TipsAndUpdatesIcon />,
		yearStart: '2014',
		yearEnd: '2015',
		degree: 'Bachelor of Science',
		subject: 'in Computer Science',
		institution: 'Cambridge University',
		description: `A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
	`,
	},
	{
		id: 2,
		icon: <TipsAndUpdatesIcon />,
		yearStart: '2014',
		yearEnd: '2015',
		degree: 'Bachelor of Science',
		subject: 'in Computer Science',
		institution: 'Cambridge University',
		description: `A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
	`,
	},
];

const Education = () => {
	const [education, setEducation] = useState([]);
	useEffect(() => {
		setEducation(
			initEducation.map(el =>
				cardObject({
					...el,
					mainTitle: el.degree,
					mainTitleExtend: el.subject,
					institution: el.institution,
				})
			)
		);
	}, []);

	const {
		palette: { blue },
	} = useTheme();
	return (
		<Box
			sx={{
				minHeight: '100vh',
			}}
		>
			<Typography variant="h4" fontWeight={'bold'} my={4} color={blue.main}>
				{'Education'}
			</Typography>
			<Box
				sx={{
					display: 'flex',
					// justifyContent: 'space-between',
					flexDirection: 'column',
					width: '100%',
					gap: 6,
				}}
			>
				{education.map(el => {
					return (
						<BoxCard
							icon={el.icon}
							key={el.id}
							centre={el.institution}
							yearStart={el.yearStart}
							yearEnd={el.yearEnd}
							mainTitle={el.title}
							description={el.description}
						></BoxCard>
					);
				})}
			</Box>
		</Box>
	);
};

export default Education;

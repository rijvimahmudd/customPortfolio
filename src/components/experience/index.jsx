import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { useState } from 'react';
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import BoxCard from '../shared/Card';
import { cardObject } from '../../utils/cardObject';

const initExperience = [
	{
		id: 1,
		icon: <TipsAndUpdatesIcon />,
		yearStart: '2014',
		yearEnd: '2015',
		position: 'Software Developer',
		office: 'Cambridge University',
		description: `A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
	`,
	},
	{
		id: 2,
		icon: <TipsAndUpdatesIcon />,
		yearStart: '2014',
		yearEnd: '2015',
		position: 'Web designer',
		office: 'Cambridge University',
		description: `A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
	`,
	},
];

const Experience = () => {
	const [experience, setExperience] = useState([]);
	useEffect(() => {
		setExperience(
			initExperience.map(el =>
				cardObject({
					...el,
					mainTitle: el.position,
					institution: el.office,
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
				{'Experience'}
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
				{experience.map(el => {
					return (
						<BoxCard
							key={el.id}
							icon={el.icon}
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

export default Experience;

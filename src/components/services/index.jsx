import { useTheme } from '@emotion/react';
import { TipsAndUpdates } from '@mui/icons-material';
import { Box, Typography, Paper } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';

const servicesInit = [
	{
		id: 1,
		icon: 'https://img.icons8.com/?size=512&id=T2hlOs3PLcaY&format=svg',
		title: 'Web Development',
		description: `A small river named Duden flows by their place and supplies it
		with the necessary regelialia.`,
	},
	{
		id: 2,
		icon: <TipsAndUpdates />,
		title: 'Web Design',
		description: `A small river named Duden flows by their place and supplies it
		with the necessary regelialia.`,
	},
	{
		id: 3,
		icon: <TipsAndUpdates />,
		title: 'Web Design',
		description: `A small river named Duden flows by their place and supplies it
		with the necessary regelialia.`,
	},
	{
		id: 4,
		icon: <TipsAndUpdates />,
		title: 'Web Design',
		description: `A small river named Duden flows by their place and supplies it
		with the necessary regelialia.`,
	},
	{
		id: 5,
		icon: <TipsAndUpdates />,
		title: 'Web Design',
		description: `A small river named Duden flows by their place and supplies it
		with the necessary regelialia.`,
	},
];

const Service = () => {
	const {
		palette: { blue, secondary },
	} = useTheme();
	const [services, setServices] = useState([]);
	useEffect(() => {
		setServices(servicesInit.map(el => el));
	}, []);
	return (
		<Box
			sx={{
				minHeight: '100vh',
			}}
		>
			<Typography variant="h4" fontWeight={'bold'} textAlign={'center'} p={3}>
				Services
			</Typography>
			<Typography textAlign={'center'} pb={8}>
				Far far away, behind the word mountains, far from the countries Vokalia
				and Consonantia
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: {
						md: 4.5,
						xs: 1.5,
					},
					'& > *': {
						flex: {
							xs: '1 0 200px',
							sm: '0 0 calc(50% - 20px)',
							md: '0 0 calc(50% - 20px)',
							lg: '0 0 360px',
						},
					},
				}}
			>
				{services.map((el, id) => {
					return (
						<Paper
							key={id}
							sx={{
								boxShadow: `rgba(0, 0, 0, 0.07) 0px 0.5px 20px`,
								height: '340px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								gap: 4,
								padding: '15px',
							}}
						>
							<Box
								sx={{
									color: blue.main,
									transform: 'scale(2)',
								}}
							>
								{typeof el.icon === 'string' ? (
									<Box
										component={'img'}
										src={el.icon}
										sx={{
											height: '24px',
											backgroundColor: 'blue',
											'&': {
												filter: `invert(54%) sepia(88%) saturate(6778%) hue-rotate(225deg) brightness(110%) contrast(103%)`,
											},
										}}
									></Box>
								) : (
									el.icon
								)}
							</Box>

							<Typography
								variant="body2"
								sx={{
									letterSpacing: 3,
									color: 'black',
									wordSpacing: 4,
									position: 'relative',
									'&::after': {
										content: '""',
										width: '30px',
										height: '1px',
										backgroundColor: blue.main,
										position: 'absolute',
										bottom: '-15px',
										left: '50%',
										transform: 'translateX(-50%)',
									},
								}}
							>
								{el.title}
							</Typography>
							<Typography textAlign={'center'} color={secondary.secondary}>
								{el.description}
							</Typography>
						</Paper>
					);
				})}
			</Box>
		</Box>
	);
};

export default Service;

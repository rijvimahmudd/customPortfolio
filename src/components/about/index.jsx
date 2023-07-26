import { useTheme } from '@emotion/react';
import {
	Box,
	ListItem,
	Typography,
	List,
	ListItemText,
	Button,
	useMediaQuery,
} from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';

const bioInit = [
	{
		property: 'Name',
		value: 'Rijvi Mahmud',
	},
	{
		property: 'Date of Birth',
		value: 'March 22',
	},
	{
		property: 'Address',
		value: 'Barishal, Bangladesh',
	},
	{
		property: 'Zip Code',
		value: '8200',
	},
	{
		property: 'Email',
		value: 'example@gmail.com',
	},
	{
		property: 'Phone',
		value: '+880-17240-30000',
	},
];

const maxCount = 12;

const About = () => {
	const mq = useMediaQuery(theme => theme.breakpoints.up('md'));
	const theme = useTheme();
	const [bio, setBio] = useState([]);
	const [count, setCount] = useState(0);

	useEffect(() => {
		setBio(bioInit.map(el => el));
	}, []);

	useEffect(() => {
		if (count < maxCount) {
			const timer = setTimeout(() => {
				setCount(prevCount => prevCount + 1);
			}, 1);
			return () => {
				clearTimeout(timer);
			};
		}
	}, [count]);

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				maxHeight: '100vh',
				'&>*': {
					flex: `0 0 ${mq ? '48%' : 'auto'}`,
				},
				alignItems: 'center',
			}}
		>
			{mq && (
				<Box
					sx={{
						height: '90vh',
						width: 1,
						overflow: 'hidden',
					}}
				>
					<Box
						component={'img'}
						src="https://images.unsplash.com/photo-1605728889623-c5f87966b907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
						sx={{
							// height: 1, // for contain the original ratio image
							height: 'auto',
							width: '100%',
							objectFit: 'cover',
							objectPosition: 'center top',
						}}
					></Box>
				</Box>
			)}
			<Box
				sx={{
					height: 'inherit',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					gap: 3,
					overflow: 'hidden',
					justifyContent: 'center',
				}}
			>
				<Typography variant="h4" fontWeight={'bold'}>
					About Me
				</Typography>
				<Typography
					variant="subtitle1"
					color={theme.palette.secondary.secondary}
				>
					A small river named Duden flows by their place and supplies it with
					the necessary regelialia.
				</Typography>

				<List dense={true} sx={{ width: '100%' }}>
					{bio.map(el => (
						<ListItem key={el.value} disableGutters>
							<ListItemText
								sx={{
									width: '40%',
								}}
								primary={
									<Typography
										fontWeight={600}
										sx={{
											fontSize: '15.2px',
										}}
									>
										{el.property + ':'}
									</Typography>
								}
							/>
							<ListItemText
								sx={{
									width: '60%',
									textAlign: 'left',
								}}
								primary={
									<Typography
										color={theme.palette.secondary.secondary}
										sx={{
											fontSize: '15.2px',
										}}
									>
										{el.value}
									</Typography>
								}
							/>
						</ListItem>
					))}
				</List>
				<Typography variant="h6">
					<Box
						component={'span'}
						sx={{
							fontWeight: 'bold',
							color: theme.palette.blue.main,
						}}
					>
						{count}+
					</Box>{' '}
					Project Complete
				</Typography>
				<Button
					variant="contained"
					sx={{
						backgroundColor: theme.palette.blue.main,
						color: theme.palette.primary.main,
						padding: '14px 20px',
						borderRadius: 10,
						letterSpacing: 1.5,
						fontSize: 12,
						width: '150px',
					}}
				>
					Download CV
				</Button>
			</Box>
		</Box>
	);
};

export default About;

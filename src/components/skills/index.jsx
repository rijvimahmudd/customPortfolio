import { Avatar, Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { useEffect } from 'react';
const skills = [
	{
		name: 'JavaScript',
		icon: 'https://img.icons8.com/?size=512&id=108784&format=svg',
	},
	{
		name: 'ReactJs',
		icon: 'https://img.icons8.com/?size=512&id=VXQrhy9fWtm1&format=svg',
	},
	{
		name: 'NextJs',
		icon: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
	},
	{
		name: 'NodeJs',
		icon: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=svg',
	},
	{
		name: 'ExpressJs',
		icon: 'https://img.icons8.com/?size=512&id=kg46nzoJrmTR&format=svg',
	},
	{
		name: 'Bootstrap',
		icon: 'https://img.icons8.com/?size=512&id=84710&format=svg',
	},
	{
		name: 'TailwindCss',
		icon: 'https://img.icons8.com/?size=512&id=CIAZz2CYc6Kc&format=svg',
	},
	{
		name: 'REST API',
		icon: 'https://img.icons8.com/?size=512&id=21895&format=svg',
	},
	{
		name: 'SQL',
		icon: 'https://img.icons8.com/?size=512&id=hKw7Mn8TNTuz&format=svg',
	},
	{
		name: 'Material UI',
		icon: 'https://img.icons8.com/?size=512&id=gFw7X5Tbl3ss&format=svg',
	},
];
const Skills = () => {
	const [skill, setSkill] = useState([]);
	const {
		palette: { blue },
	} = useTheme();
	useEffect(() => {
		setSkill(skills.map(el => el));
	}, []);

	return (
		<Box
			sx={{
				minHeight: '100vh',
			}}
		>
			<Typography variant="h4" fontWeight="bold" my={4} color={blue.main}>
				Skills
			</Typography>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: 'repeat(2, calc(50% - 20px))',
						sm: 'repeat(auto-fit, minmax(180px,1fr))',
					},
					gap: 5,
				}}
			>
				{skill.map((el, id) => {
					return (
						<Box
							key={id}
							sx={{
								display: 'flex',
								alignItems: 'center',
								padding: 1,
								gap: 1,
								boxShadow: {
									xs: 'none',
									md: '2px 2px 2px 1px rgba(0, 0, 0, 0.1)',
								},
								borderRadius: 2, // Added borderRadius for circular shape
								height: '100%',
								fontWeight: 'medium',
							}}
						>
							<Avatar
								alt="Remy Sharp"
								src={el?.icon}
								sx={{
									width: 32,
									height: 32,
									// clipPath: 'circle(37%)',
									// '& > path': {},
								}}
								variant="circular"
							>
								{!el?.icon && el.name[0]}
							</Avatar>
							{/* <Box
									sx={{
										width: 36,
										height: 36,
										borderRadius: '50%',
										backgroundColor: 'tomato',
										overflow: 'hidden', // Add this to hide the overflow of the image
									}}
								>
									<img
										src="https://img.icons8.com/?size=512&id=108784&format=png"
										style={{
											height: '100%',
											width: '100%',
											borderRadius: '50%', // Add this to make the image circular
											zIndex: '-1',
											objectFit: 'cover',
										}}
									/>
								</Box> */}

							<Typography
								variant={{
									xs: 'body1',
									md: 'h6',
								}}
							>
								{el.name}
							</Typography>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

export default Skills;

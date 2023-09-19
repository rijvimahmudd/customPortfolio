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
					scrollSnapAlign: 'start',
				},
				alignItems: 'center',
				scrollSnapType: 'y mandatory',
				scrollMargin: '60px',
			}}
			id="about"
		>
			{mq && (
				<Box
					sx={{
						height: '90vh',
						width: 1,
						overflow: 'hidden',
						display: 'grid',
						placeItems: 'center',
					}}
				>
					{/* <Box
						component={'img'}
						src="/rijvi.png"
						sx={{
							// height: 1, // for contain the original ratio image
							height: 'auto',
							width: '100%',
							objectFit: 'cover',
							objectPosition: 'center top',
						}}
					/> */}

					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="358"
						height="318"
						viewBox="0 0 358 318"
						fill="none"
					>
						<path
							d="M356.165 223.04L356.164 223.042C350.086 256.104 320.143 285.359 286.713 299.266C259.652 310.524 230.204 311.867 199.416 313.27C192.172 313.601 184.854 313.934 177.475 314.401C171.962 314.748 166.422 315.173 160.91 315.595C146.935 316.666 133.145 317.722 120.462 317.459C102.774 317.093 87.3821 314.158 76.7505 305.219L76.7501 305.218C66.2336 296.395 60.4523 281.549 55.403 263.832C53.9028 258.569 52.4678 253.053 50.9913 247.379C47.513 234.01 43.8046 219.757 38.4715 205.824L38.4701 205.821C33.5243 193.183 27.2323 180.769 21.2082 168.883C17.8366 162.231 14.549 155.745 11.6281 149.477C3.45527 131.939 -1.84415 116.124 1.53332 102.857C4.90682 89.6054 17.0455 78.8047 32.9035 69.517C48.3724 60.4572 67.256 52.9064 84.6684 45.9438C85.0846 45.7774 85.5 45.6113 85.9145 45.4455L85.9161 45.4449C89.2437 44.1003 92.5114 42.775 95.7302 41.4696C127.086 28.7526 153.804 17.9166 185.953 9.49225C203.804 4.84669 223.219 1.003 241.274 0.545571C259.336 0.087971 275.971 3.0211 288.325 11.8604C300.558 20.8232 308.47 35.752 314.886 53.5021C318.769 64.2439 322.085 75.9562 325.484 87.9587C327.706 95.8093 329.964 103.784 332.439 111.693C335.041 120.058 337.858 128.305 340.632 136.43C344.532 147.849 348.35 159.026 351.371 169.949C356.534 188.615 359.325 206.39 356.165 223.04Z"
							fill="url(#pattern0)"
							stroke="#3E64FF"
						/>
						<defs>
							<pattern
								id="pattern0"
								patternContentUnits="objectBoundingBox"
								width="1"
								height="1"
							>
								<use
									xlinkHref="#image0_1_6"
									transform="matrix(0.00177654 0 0 0.002 0.0558659 0)"
								/>
							</pattern>
							<image
								id="image0_1_6"
								width="500"
								height="500"
								xlinkHref="/rijvi.png"
							/>
						</defs>
					</svg>
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

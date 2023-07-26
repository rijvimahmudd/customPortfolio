import { useTheme } from '@emotion/react';
import { Box, Typography, styled } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import HireMeButton from '../shared/HireMeButton';

const CustomTypography = styled(Typography)({
	fontWeight: '800',
	// letterSpacing: 0.3,
	lineHeight: 1.4,
});

const professionInit = [
	'Programmer',
	'Web Developer',
	'Problem Solver',
	'MERN Stack Expert',
	'JavaScript Lover',
];

const Hero = () => {
	const [profession, setProfession] = useState([]);

	useEffect(() => {
		setProfession(
			professionInit.map(el => {
				return el + '.';
			})
		);
	}, []);

	const theme = useTheme();
	return (
		<Box
			sx={{
				paddingTop: '70px',
				background: `linear-gradient(90deg, ${theme.palette.neutral.main} 50%, ${theme.palette.primary.main} 50%)`,
				height: '100vh',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyItems: 'center',
				alignItems: 'center',
				justifyContent: 'center',
				gap: 1.5,
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<CustomTypography
				sx={{
					letterSpacing: 4,
					color: theme.palette.blue.main,
				}}
			>
				HEY! I AM
			</CustomTypography>
			<CustomTypography
				variant="h4"
				sx={{
					fontSize: {
						md: '60px',
					},
				}}
			>
				Rijvi Mahmud.
			</CustomTypography>
			<CustomTypography
				variant="h5"
				sx={{
					fontSize: {
						md: '34px',
					},
				}}
			>
				I&apos;m{' '}
				<Box
					component={'span'}
					sx={{
						color: theme.palette.blue.main,
					}}
				>
					<Typewriter
						options={{
							strings: profession,
							autoStart: true,
							loop: true,
							pauseFor: 100,
							deleteSpeed: 50,
							delay: 100,
						}}
						component={'span'}
					></Typewriter>
				</Box>
			</CustomTypography>
			<HireMeButton
				title={'hire me'}
				color={theme.palette.fontColor.main}
			></HireMeButton>
		</Box>
	);
};

export default Hero;

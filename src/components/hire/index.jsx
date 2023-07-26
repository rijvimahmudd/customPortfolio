import { useTheme } from '@emotion/react';
import { Box, Button, Container, Typography } from '@mui/material';
import HireMeButton from '../shared/HireMeButton';

const HireMe = () => {
	const {
		palette: { blue, primary },
	} = useTheme();
	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				// my: 3,
			}}
		>
			<Box
				sx={{
					minHeight: '70vh',
					width: 1,
					backgroundImage:
						'url("https://preview.colorlib.com/theme/ronaldo/images/bg_1.jpg.webp")',
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					position: 'relative',
					zIndex: 0,
					// px: '15px',
					py: 3,
					display: 'flex',
					justifyItems: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						height: 1,
						width: 1,
						backgroundColor: blue.main,
						opacity: '0.4',
						position: 'absolute',
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						zIndex: '-1',
					}}
				></Box>
				<Container>
					<Box
						textAlign={'center'}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 3,
						}}
					>
						<Typography
							sx={{
								fontSize: '2.5rem',
								fontWeight: 'bold',
								color: primary.main,
							}}
						>
							I&apos;m{' '}
							<Typography
								sx={{
									color: '#a0f669',
								}}
								fontSize={'inherit'}
								fontWeight={'inherit'}
								component={'span'}
							>
								Available
							</Typography>{' '}
							for
							<Typography
								sx={{
									fontSize: '22px',
									fontWeight: 'bold',
									color: primary.main,
								}}
							>
								{' '}
								Freelancing, Remote & Contract Jobs.
							</Typography>
						</Typography>
						<Typography color={primary.main}>
							A small river named Duden flows by their place and supplies it
							with the necessary regelialia.
						</Typography>

						<HireMeButton title={'hire me'}></HireMeButton>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};
export default HireMe;

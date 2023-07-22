import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';

const BoxCard = ({
	id = 0,
	icon,
	yearStart = '',
	yearEnd = '',
	mainTitle = '',
	centre = '',
	description = '',
	type = '',
}) => {
	const {
		palette: { blue, primary, secondary },
	} = useTheme();
	return (
		<Box
			key={id}
			sx={{
				display: 'flex',
				width: '100%',
				gap: 2,
			}}
		>
			<Box
				sx={{
					width: '50px',
					height: '50px',
					flex: '0 0 auto', // Prevent shrinking or growing
					backgroundColor: typeof icon === 'string' ? primary.main : blue.main,
					clipPath: 'circle(50%)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					component={'span'}
					sx={{
						padding: 0,
						margin: 0,
						color: primary.main,
						display: 'grid',
						placeItems: 'center',
					}}
				>
					{typeof icon === 'string' ? (
						<Box
							component={'img'}
							src={icon}
							sx={{
								width: '100%',
								objectFit: 'contain',
								height: 'full',
							}}
						></Box>
					) : (
						icon
					)}
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flex: '0 1 auto', // Prevent shrinking or growing
					flexDirection: 'column',
					gap: 0.5,
					mt: 0.4,
				}}
			>
				<Typography color={blue.main} fontWeight={'bold'}>
					{type !== 'certificate' ? `${yearStart} - ${yearEnd}` : ''}
				</Typography>
				<Typography variant="h5" fontWeight={'bold'} marginBottom={0.5}>
					{mainTitle}
				</Typography>
				<Typography variant="h6" fontWeight={'600'}>
					{`${centre}`}
				</Typography>
				<Typography color={secondary.secondary}>{description}</Typography>
			</Box>
		</Box>
	);
};

export default BoxCard;

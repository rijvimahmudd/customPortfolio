import { useTheme } from '@emotion/react';
import { Button } from '@mui/material';

const HireMeButton = ({ title, color }) => {
	const {
		palette: { blue, secondary },
	} = useTheme();
	return (
		<Button
			sx={{
				backgroundColor: blue.main,
				py: 1.8,
				px: 6,
				borderRadius: '40px',
				letterSpacing: 1,
				m: '0 auto',
				zIndex: 10,
				'&:hover': {
					// color: color,
					backgroundColor: secondary.secondary,
				},
			}}
		>
			{title}
		</Button>
	);
};

export default HireMeButton;

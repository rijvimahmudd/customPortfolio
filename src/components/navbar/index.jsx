import { useState, useEffect } from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { MenuUnfoldOutlined } from '@ant-design/icons';

const NavBar = ({
	transparent,
	position,
	shadow,
	zIndex,
	height,
	top,
	...rest
}) => {
	const theme = useTheme();
	const mq = useMediaQuery(theme => theme.breakpoints.up('md'));
	const [show, setShow] = useState(false);
	const initialState = transparent || theme.palette.primary.main;

	useEffect(() => {
		// Delay the update to the final state
		const timeout = setTimeout(() => {
			setShow(true);
		}, 10); // Change this value if you want to adjust the delay

		return () => clearTimeout(timeout); // Cleanup the timeout on unmount
	}, []);

	return (
		<Box
			sx={{
				position: position || 'relative',
				top: top || 0,
				left: 0,
				right: 0,
				width: '100%',
				backgroundColor: show
					? transparent || theme.palette.primary.main
					: initialState,
				p: 1.7,
				zIndex: zIndex || 3,
				overflow: 'hidden',
				transition: 'background-color 0.5s ease-in, box-shadow 0.5s ease-in',
				boxShadow: shadow && '0 0 10px 0 rgba(0, 0, 0, 0.1)',
				...rest,
			}}
		>
			<Container
				sx={{
					height: '100%',
					// border: '1px solid orange',
				}}
			>
				<Box
					sx={{
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						// alignContent: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Typography variant="h5" fontWeight={'bolder'} letterSpacing={0.5}>
						Rijvi
						<Box
							component={'span'}
							sx={{
								color: theme.palette.blue.main,
							}}
						>
							.
						</Box>
					</Typography>

					{!mq && (
						<MenuUnfoldOutlined
							style={{
								fontSize: '20px',
							}}
						/>
					)}

					{mq && (
						<Box display={'flex'} gap={6}>
							<Typography>Home</Typography>
							<Typography>Home</Typography>
							<Typography>Home</Typography>
							<Typography>Home</Typography>
						</Box>
					)}
				</Box>
			</Container>
		</Box>
	);
};

export default NavBar;

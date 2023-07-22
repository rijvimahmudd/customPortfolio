import { useTheme } from '@emotion/react';
import { Box, Typography, Paper } from '@mui/material';

const Project = () => {
	const {
		palette: { blue, secondary, primary },
	} = useTheme();
	return (
		<Box
			sx={{
				minHeight: '100vh',
			}}
		>
			<Typography variant="h4" fontWeight="bold" textAlign="center" p={3}>
				Projects
			</Typography>
			<Typography textAlign="center" pb={8}>
				Far far away, behind the word mountains, far from the countries Vokalia
				and Consonantia
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: {
						md: 4.5,
						xs: 0.5,
					},
					'& > *': {
						flex: {
							xs: '1 0 200px',
							lg: '0 0 360px',
						},
					},
				}}
			>
				{Array(5)
					.fill()
					.map((_, id) => {
						return (
							<Paper
								key={id}
								sx={{
									boxShadow: 'rgba(0, 0, 0, 0.07) 0px 0.5px 20px',
									// maxWidth: 360,
									height: 340,
									backgroundImage:
										'url("https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")',
									backgroundSize: 'cover',
									backgroundPosition: 'center center',
									backgroundRepeat: 'no-repeat',
									position: 'relative',
									zIndex: 0,
									borderRadius: {
										md: 5,
										lg: 1,
									},
								}}
							>
								<Box
									sx={{
										height: 1,
										width: 1,
										backgroundColor: blue.main,
										opacity: '0.2',
										position: 'absolute',
										top: 0,
										bottom: 0,
										left: 0,
										right: 0,
										zIndex: '-1',
										borderRadius: {
											md: 5,
											lg: 1,
										},
									}}
								></Box>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'center',
										gap: 4,
										padding: '15px',
										height: 1,
										width: 1,
										cursor: 'pointer',
										borderRadius: {
											md: 5,
											lg: 1,
										},
									}}
								>
									{/* <TipsAndUpdates
										sx={{
											fontSize: 60,
											color: primary.main,
										}}
									/> */}
									<Typography
										variant="body2"
										sx={{
											letterSpacing: 3,
											color: primary.main,
											wordSpacing: 4,
											position: 'relative',
											'&::after': {
												content: '""',
												width: '30px',
												height: '1px',
												backgroundColor: primary.main,
												position: 'absolute',
												bottom: -15,
												left: '50%',
												transform: 'translateX(-50%)',
											},
										}}
									>
										WEB DESIGN
									</Typography>
									<Typography textAlign="center" color={primary.main}>
										A small river named Duden flows by their place and supplies
										it with the necessary regelialia.
									</Typography>
								</Box>
							</Paper>
						);
					})}
			</Box>
		</Box>
	);
};

export default Project;

import { useTheme } from '@emotion/react';
import {
	LinkedIn,
	Map,
	Call,
	Mail,
	GitHub,
	ArrowRightAlt,
} from '@mui/icons-material';
import { Box, Container, Link, Typography, styled } from '@mui/material';

const WhiteTypography = styled(Typography)({
	color: 'white',
});
const WhiteLink = styled(Link)({
	color: 'white',
});

const initSocialIcon = [
	{
		id: 1,
		name: 'github',
		icon: <GitHub />,
		link: 'https://github.com/rijvimahmudd',
	},
	{
		id: 2,
		name: 'linkedin',
		icon: <LinkedIn />,
		link: 'https://www.linkedin.com/in/rijvi-mahmud/',
	},
];

const Footer = ({ href }) => {
	const {
		palette: { secondary, primary },
	} = useTheme();

	const renderAboutSection = () => (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 3,
			}}
		>
			<Box>
				<WhiteTypography
					sx={{ fontSize: '22px', fontWeight: 'medium', mb: 2.5 }}
				>
					About
				</WhiteTypography>
				<WhiteTypography sx={{ color: secondary.secondary }}>
					Far far away, behind the word mountains, far from the countries
					Vokalia and Consonantia, there live the blind texts.
				</WhiteTypography>
			</Box>
			<Box
				sx={{
					color: primary.main,
					display: 'flex',
					gap: 3,
					'& svg': {
						fontSize: 32, // Adjust the size as needed
					},
				}}
			>
				{initSocialIcon.map(el => (
					<Link key={el.id} href={el.link} target={'_blank'}>
						{el.icon}
					</Link>
				))}
			</Box>
		</Box>
	);

	const renderLinkSection = () => (
		<Box>
			<WhiteTypography sx={{ fontSize: '22px', fontWeight: 'medium', mb: 2.5 }}>
				Links
			</WhiteTypography>
			{href.map(el => (
				<WhiteLink
					href={el.href}
					key={el.id}
					sx={{
						display: 'flex',
						alignItems: 'center',
						alignContent: 'center',
						gap: 2,
						marginY: 2,
						color: secondary.secondary,
						cursor: 'pointer',
						scrollPadding: '170px',
					}}
				>
					<ArrowRightAlt />
					{el.name}
				</WhiteLink>
			))}
		</Box>
	);
	const renderServicesSection = () => (
		<Box>
			<WhiteTypography sx={{ fontSize: '22px', fontWeight: 'medium', mb: 2.5 }}>
				Services
			</WhiteTypography>
			{Array(4)
				.fill('')
				.map((_, index) => (
					<WhiteTypography
						key={index}
						sx={{
							display: 'flex',
							alignItems: 'center',
							alignContent: 'center',
							gap: 2,
							marginY: 2,
							color: secondary.secondary,
						}}
					>
						<ArrowRightAlt />
						Web Development
					</WhiteTypography>
				))}
		</Box>
	);

	const renderContactSection = () => (
		<Box>
			<WhiteTypography sx={{ fontSize: '22px', fontWeight: 'medium', mb: 2.5 }}>
				Have a Question?
			</WhiteTypography>
			<WhiteTypography
				sx={{
					display: 'flex',
					alignItems: 'center',
					alignContent: 'center',
					gap: 2,
					marginY: 2,
					color: secondary.secondary,
					fontSize: '1rem',
				}}
			>
				<Map />
				Barishal, Bangladesh.
			</WhiteTypography>
			<WhiteTypography
				sx={{
					display: 'flex',
					alignItems: 'center',
					alignContent: 'center',
					gap: 2,
					marginY: 2,
					color: secondary.secondary,
				}}
			>
				<Call />
				+880 17240 38348
			</WhiteTypography>
			<WhiteTypography
				sx={{
					display: 'flex',
					alignItems: 'center',
					alignContent: 'center',
					gap: 2,
					marginY: 2,
					color: secondary.secondary,
				}}
			>
				<Mail />
				rijvimahmudd@gmail.com
			</WhiteTypography>
		</Box>
	);

	return (
		<Box
			sx={{
				minHeight: '100vh',
				backgroundColor: secondary.main,
				height: 1,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				paddingTop: '112px',
				paddingBottom: '50px',
				gap: 15,
			}}
		>
			<Container>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						'& > *': {
							flex: '1 0 200px',
						},
						width: 1,
						height: 1,
						gap: 5,
					}}
				>
					{renderAboutSection()}
					{renderLinkSection()}
					{renderServicesSection()}
					{renderContactSection()}
				</Box>
			</Container>
			<Box>
				<WhiteTypography
					textAlign={'center'}
					px={2}
					sx={{
						color: secondary.secondary,
					}}
				>
					Copyright &copy; {new Date().getFullYear()} <br></br>
					Design, Developed and Maintaining by Rijvi Mahmud.
				</WhiteTypography>
			</Box>
		</Box>
	);
};

export default Footer;

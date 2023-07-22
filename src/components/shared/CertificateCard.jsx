import { useTheme } from '@emotion/react';
import { Box, Button, Link, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const CertificateCard = ({
	certificateName,
	certifiedOrganization,
	issueMonth,
	issueYear,
	credentialId,
	credentialLink,
	skills = [],
	icon,
}) => {
	const {
		palette: { blue, primary, secondary },
	} = useTheme();
	return (
		<Box
			sx={{
				display: 'flex',
				// width: '100%',
				gap: 2,
			}}
		>
			<Box
				sx={{
					width: '50px',
					height: '50px',
					flex: '0 0 auto', // Prevent shrinking or growing
					backgroundColor: typeof icon === 'string' ? primary.main : blue.main,

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
					<Box
						component={'img'}
						src={icon}
						sx={{
							width: '100%',
							objectFit: 'contain',
							height: 'full',
						}}
					></Box>
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
				<Typography
					sx={{
						fontSize: {
							md: '1.3rem',
							xs: '1.15rem',
						},
					}}
					fontWeight={'bold'}
					marginBottom={0.5}
				>
					{certificateName}
				</Typography>
				<Typography
					sx={{
						fontSize: '1rem',
						color: secondary.secondary,
					}}
					fontWeight={'500'}
				>
					{certifiedOrganization}
				</Typography>
				<Typography
					color={secondary.secondary}
				>{`Issued ${issueMonth} ${issueYear}`}</Typography>
				{credentialId ? (
					<Typography
						color={secondary.secondary}
					>{`Credential ID ${credentialId}`}</Typography>
				) : (
					''
				)}

				<Link href={credentialLink} target="_blank">
					<Button
						sx={{
							color: 'black',
							outline: `1px solid  ${secondary.secondary}`,
							gap: 1,
							borderRadius: 10,
							px: 2,
							py: '3px',
							fontWeight: 'normal',
						}}
					>
						Show Credential
						<LaunchIcon
							sx={{
								fontSize: '16px',
								color: blue.main,
							}}
						></LaunchIcon>
					</Button>
				</Link>

				<Typography>{`Skills : ${skills.join(' . ')}`}</Typography>
			</Box>
		</Box>
	);
};

export default CertificateCard;

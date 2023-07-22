import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import CertificateCard from '../shared/CertificateCard';

const certificateInit = [
	{
		id: 1,
		name: 'C++ for Problem Solving - 1',
		organization: 'CodeChef',
		issueMonth: 'Jul',
		issueYear: '2023',
		credentialId: '491eb9c',
		credentialLink: 'https://www.codechef.com/certificates/public/491eb9c',
		skills: ['C++', 'DSA', 'Problem Solving'],
		icon: 'https://img.icons8.com/?size=512&id=LnZMjt9rZC3d&format=svg',
	},
	{
		id: 2,
		name: 'CSS',
		organization: 'HackerRank',
		issueMonth: 'Jul',
		issueYear: '2023',
		credentialId: '01ad3ba8c674',
		credentialLink: 'https://www.hackerrank.com/certificates/01ad3ba8c674',
		skills: ['CSS'],
		icon: 'https://img.icons8.com/?size=512&id=mT2bzIQRdfpR&format=svg',
	},
	{
		id: 3,
		name: 'Problem Solving (Intermediate) JavaScript',
		organization: 'HackerRank',
		issueMonth: 'Jul',
		issueYear: '2023',
		credentialId: '65d060994e45',
		credentialLink: 'https://www.hackerrank.com/certificates/65d060994e45',
		skills: ['JavaScript', 'Problem Solving'],
		icon: 'https://img.icons8.com/?size=512&id=mT2bzIQRdfpR&format=svg',
	},
	{
		id: 4,
		name: 'Problem Solving (Basic) JavaScript',
		organization: 'HackerRank',
		issueMonth: 'Jul',
		issueYear: '2023',
		credentialId: '0db378f983e2',
		credentialLink: 'https://www.hackerrank.com/certificates/0db378f983e2',
		skills: ['JavaScript', 'Problem Solving'],
		icon: 'https://img.icons8.com/?size=512&id=mT2bzIQRdfpR&format=svg',
	},
	{
		id: 5,
		name: 'React',
		organization: 'HackerRank',
		issueMonth: 'Jul',
		issueYear: '2023',
		credentialId: 'd8eb0803384a',
		credentialLink: 'https://www.hackerrank.com/certificates/d8eb0803384a',
		skills: ['JavaScript', 'React.js'],
		icon: 'https://img.icons8.com/?size=512&id=mT2bzIQRdfpR&format=svg',
	},
	{
		id: 6,
		name: 'Rest API',
		organization: 'HackerRank',
		issueMonth: 'Jul',
		issueYear: '2023',
		credentialId: '45fba02d6cf6',
		credentialLink: 'https://www.hackerrank.com/certificates/45fba02d6cf6',
		skills: ['REST API', 'Node.js', 'JavaScript'],
		icon: 'https://img.icons8.com/?size=512&id=mT2bzIQRdfpR&format=svg',
	},
	{
		id: 7,
		name: 'UX for Web Developers',
		organization: 'CodeChef',
		issueMonth: 'Jul',
		issueYear: '2023',
		credentialId: '3cafd00',
		credentialLink: 'https://www.codechef.com/certificates/public/3cafd00',
		skills: ['User Experience (UX)'],
		icon: 'https://img.icons8.com/?size=512&id=LnZMjt9rZC3d&format=svg',
	},
	{
		id: 8,
		name: 'Project Management',
		organization: 'Great Learning',
		issueMonth: 'Jul',
		issueYear: '2023',
		credentialId: '',
		credentialLink:
			'https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/2908973/original/Rijvi_Mahmud20230712-68-14y3voz.jpg',
		skills: ['Project Management'],
		icon: 'https://d9jmtjs5r4cgq.cloudfront.net/images/branding/greatlearning-brand-v1-2.svg',
	},
	{
		id: 9,
		name: 'Git',
		organization: 'Great Learning',
		issueMonth: 'Jul',
		issueYear: '2023',
		credentialId: '',
		credentialLink:
			'https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/2906116/original/Rijvi_Mahmud20230711-317-16fcym0.jpg',
		skills: ['Git'],
		icon: 'https://d9jmtjs5r4cgq.cloudfront.net/images/branding/greatlearning-brand-v1-2.svg',
	},
];
const Certificate = () => {
	const [certificate, setCertificate] = useState([]);
	useEffect(() => {
		setCertificate(certificateInit.map(el => el));
	}, []);
	const {
		palette: { blue },
	} = useTheme();

	return (
		<Box
			sx={{
				minHeight: '100vh',
				width: '100%',
			}}
		>
			<Typography variant="h4" fontWeight={'bold'} my={4} color={blue.main}>
				{'Certificate'}
			</Typography>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					flexWrap: 'wrap',
					justifyItems: 'flex-end',
					gap: {
						xs: 6,
						md: 5,
						lg: 8,
					},
					'&>*': {
						flex: '1 0 calc(47%)',
					},
				}}
			>
				{certificate.map((el, id) => {
					return (
						<Box
							key={id}
							sx={{
								justifySelf: 'flex-end',
								width: '50%',
							}}
						>
							<CertificateCard
								certificateName={el.name}
								certifiedOrganization={el.organization}
								credentialId={el.credentialId}
								credentialLink={el.credentialLink}
								issueMonth={el.issueMonth}
								issueYear={el.issueYear}
								skills={el.skills}
								icon={el.icon}
							></CertificateCard>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

export default Certificate;

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { Container } from '@mui/material';
import './App.css';
import NavBar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Education from './components/education';
import theme from './components/theme';
import Experience from './components/experience';
import Skills from './components/skills';
import Certificate from './components/certificates';
import Service from './components/services';
import Project from './components/projects';
import HireMe from './components/hire';
import Footer from './components/footer';
import useScrollListener from './components/hooks/useScrollListener';
import { useEffect, useState } from 'react';

function App() {
	const { y } = useScrollListener();
	const [showNavBar, setShowNavBar] = useState(false);

	useEffect(() => {
		// Determine when to show the NavBar
		const specificPoint = 300; // Adjust this value to your desired point
		setShowNavBar(y > specificPoint);
	}, [y]);
	return (
		<>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<NavBar
					transparent={!showNavBar && 'transparent'}
					position={showNavBar ? 'fixed' : 'absolute'}
					zIndex={showNavBar ? 0 : 3}
					shadow={showNavBar}
					height={showNavBar && '70px'}
				></NavBar>

				{/* {!showNavBar && <NavBar transparent={'transparent'}></NavBar>} */}

				<Hero></Hero>
				<Container>
					<About></About>
					{/* <Education></Education> */}
					{/* <Experience></Experience> */}
					<Skills></Skills>
					<Certificate></Certificate>
					<Service></Service>
					<Project></Project>
				</Container>
				<HireMe></HireMe>
				<Footer></Footer>
			</ThemeProvider>
		</>
	);
}

export default App;

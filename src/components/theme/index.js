import {createTheme} from '@mui/material'
const theme = createTheme({
	palette: {
		background: {
			default: '#ffffff',
			dummy: '#000000',
		},

		primary: {
			main: '#ffffff',
		},
		secondary: {
			main: '#000000',
			secondary: '#999999',
		},

		neutral: {
			main: '#ebefff',
			// contrastText: '#fff',
		},
		blue: {
			main: '#3e64ff',
		},
		fontColor:{
			main: '#000000E0'
		}
	},
	typography: {
		fontFamily: ['poppins'].join(','),
		allVariants: {
			color: '#000000E0',
		},
	},
});

export default theme;
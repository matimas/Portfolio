import React from 'react';
import './index.css';

import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import { Routes, Route } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/project' element={<Project />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</>
	);
}

export default App;

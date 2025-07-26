import React from 'react';
import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import { Routes, Route } from 'react-router-dom';

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

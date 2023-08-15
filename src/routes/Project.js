import React from 'react';

import Footer from '../components/Footer';
import RecentProject from '../components/RecentProject';
import HeroImgProject from '../components/HeroImgGeneral';
import Navbar from '../components/Navbar';

const Project = () => {
	return (
		<div>
			<Navbar />
			<HeroImgProject heading='Projects' text='some of my most recent works' />
			<RecentProject />
			<Footer />
		</div>
	);
};

export default Project;

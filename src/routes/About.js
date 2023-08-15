import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AboutContent from '../components/AboutContent';
import HeroImgProject from '../components/HeroImgGeneral';

const About = () => {
	return (
		<div>
			<Navbar />
			<HeroImgProject heading='So Who Am I?🤷‍♂️' />
			<AboutContent />
			<Footer />
		</div>
	);
};

export default About;

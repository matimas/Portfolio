import './HeroImgGeneralStyles.css';

import React from 'react';

import HeroImg from '../assets/muha-ajjan-sL2BRR1cuvM-unsplash.jpg';

const HeroImgGeneral = ({ heading, text }) => {
	return (
		<div className='hero-img'>
			<div className='heading'>
				<h1>{heading}</h1>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default HeroImgGeneral;

import './HeroImgS.css';

import React from 'react';
import { Link } from 'react-router-dom';

import IntroImg from '../assets/muha-ajjan-sL2BRR1cuvM-unsplash.jpg';
import ProfileImg from '../assets/profile-img.png';

const HeroImg = () => {
	return (
		<div className='hero'>
			<div className='mask'>
				<img className='into-img' src={IntroImg} alt='IntroImg' />
			</div>
			<div className='content'>
				<p>Hey there I'm Mati👋🧑‍💻</p>
				<h1>A Full Stack Developer</h1>
				<p>
					Creating efficient and user-friendly web applications.
					<br /> As a software developer from scratch, I emphasize innovative
					solutions and efficient outcomes using cutting-edge technologies. I
					specialize in rapid and high-quality software development that
					transforms ideas into reality.
				</p>
				<div className='link'>
					<Link to='/project' className='btn'>
						See My Projects
					</Link>
				</div>
			</div>
			<div className='profile'>
				<img className='profile-img' src={ProfileImg} alt='ProfileImage' />
			</div>
		</div>
	);
};

export default React.memo(HeroImg);

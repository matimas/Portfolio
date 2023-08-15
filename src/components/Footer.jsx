import './FooterS.css';

import React from 'react';
import { Link } from 'react-router-dom';

import { FaLinkedin, FaGithub, FaMailBulk, FaPhone } from 'react-icons/fa';

const Footer = () => {
	return (
		<>
			<div className='footer-container'>
				<div className='main'>
					<div className='linkedin'>
						<Link to='https://www.linkedin.com/in/mati-masganow-5209b2169/'>
							<FaLinkedin
								size={20}
								style={{ color: '#fff', marginRight: '2rem' }}
							/>
						</Link>
					</div>
					<div className='github'>
						<Link to='https://github.com/matimas'>
							<FaGithub
								size={20}
								style={{ color: '#fff', marginRight: '2rem' }}
							/>
						</Link>
					</div>
					<div className='Phone'>
						<FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
					</div>
					<div className='email'>
						<FaMailBulk
							size={20}
							style={{ color: '#fff', marginRight: '2rem' }}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;

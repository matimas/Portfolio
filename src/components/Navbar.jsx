import './NavbarS.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { mdiInformation, mdiHomeAccount, mdiProjector } from '@mdi/js';

import Icon from '@mdi/react';

const Navbar = () => {
	const [isOpen, openMenu] = useState(false);
	const handleclick = () => openMenu(!isOpen);

	const [headerColor, setHeaderColor] = useState(false);
	const changeColor = () => {
		if (window.scrollY >= 1) {
			setHeaderColor(true);
		} else {
			setHeaderColor(false);
		}
	};

	window.addEventListener('scroll', changeColor);

	return (
		<div className={headerColor ? 'header header-bg' : 'header'}>
			<div className='my-name-is'>
				<Link to='/'>
					<h1>
						<strong>Mati</strong> Misganow.
					</h1>
				</Link>
			</div>
			<ul className={isOpen ? 'nav-menu avtive' : 'nav-menu'}>
				<li className='icons'>
					<Link to='/'>
						<Icon path={mdiHomeAccount} size={1} />
					</Link>
				</li>
				<li className='icons'>
					<Link to='/project'>
						<Icon path={mdiProjector} size={1} />
					</Link>
				</li>
				<li className='icons'>
					<Link to='/about'>
						<Icon path={mdiInformation} size={1} />
					</Link>
				</li>
			</ul>
			<div className='hamburger' onClick={handleclick}>
				{isOpen ? (
					<FaTimes size={20} style={{ color: '#fff' }} />
				) : (
					<FaBars size={20} style={{ color: '#fff' }} />
				)}
			</div>
		</div>
	);
};

export default Navbar;

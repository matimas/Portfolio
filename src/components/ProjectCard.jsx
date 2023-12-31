import './ProjectCardS.css';

import React from 'react';

import { NavLink } from 'react-router-dom';

const ProjectCard = ({ title, imgsrc, description, view, source }) => {
	return (
		<div className='project-card'>
			<img src={imgsrc} alt='criptoImage' />
			<h2 className='project-title'>{title}</h2>
			<div className='pro-details'>
				<p>{description}</p>
				<div className='pro-btns'>
					<NavLink to={view} className='btn'>
						View
					</NavLink>
					<NavLink to={source} className='btn'>
						Source
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;

import './ProjectCardS.css';

import React from 'react';

import ProjectCardData from './ProjectData';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ProjectCard from './ProjectCard';

const projects = ProjectCardData.map((project, index) => (
	<ProjectCard
		key={index}
		imgsrc={project.imgsrc}
		title={project.title}
		description={project.description}
		source={project.source}
		view={project.view}
	/>
));

const RecentProject = () => {
	return (
		<div className='work-container'>
			<div className='project-heading'>
				<h1>My Project</h1>
				<p>
					Mastering React, Redux, and Node.Js, I crafted dynamic web solutions.
					Additionally,.
				</p>
			</div>
			<div className='project-container'>{projects}</div>
		</div>
	);
};

export default RecentProject;

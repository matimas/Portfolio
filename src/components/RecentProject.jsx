import './ProjectCardS.css';
import React from 'react';
import ProjectCardData from '../assets/data/ProjectData';
import ProjectCard from './ProjectCard';

const RecentProject = () => {
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

	return (
		<div className='work-container'>
			<div className='project-heading'>
				<h1>הפרוייקטים שלי</h1>
				<p>
					אוסף של פרוייקטים מעניינים שפיתחתי ב-React, Node.js ועוד. 
					עבור על הכרטיסים כדי לראות פרטים נוספים.
				</p>
			</div>
			<div className='project-container'>{projects}</div>
		</div>
	);
};

export default RecentProject;

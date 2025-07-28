import './ProjectCardS.css';
import React, { useCallback } from 'react';
import { FaExternalLinkAlt, FaGithub, FaCode, FaEye } from 'react-icons/fa';

const ProjectCard = ({ title, imgsrc, description, view, source }) => {
	// הגדרת טכנולוגיות לפרוייקט
	const getTechStack = (title) => {
		if (title.includes('מטבעות') || title.includes('Crypto')) {
			return ['React', 'API', 'Chart.js'];
		} else if (title.includes('MindCraft') || title.includes('משחק')) {
			return ['JavaScript', 'Canvas', 'Game Dev'];
		} else if (title.includes('קורונה') || title.includes('Corona')) {
			return ['React', 'REST API', 'Charts'];
		}
		return ['React', 'JavaScript', 'CSS3'];
	};

	const techStack = getTechStack(title);

	return (
		<div className='project-card-modern'>
			<div className='card-inner'>
				<div className='card-front'>
					<div className='card-image-container'>
						<img src={imgsrc} alt={title} className='card-image' />
						<div className='image-overlay'>
							<div className='overlay-icon'>
								<FaCode size={40} />
							</div>
						</div>
					</div>
					<div className='card-front-content'>
						<h3 className='card-title'>{title}</h3>
						<div className='card-hint'>
							<span>לחץ להצגת פרטים</span>
						</div>
					</div>
				</div>

				{/* Back Side */}
				<div className='card-back'>
					<div className='card-back-content'>
						<h3 className='card-title-back'>{title}</h3>
						<p className='card-description'>{description}</p>

						<div className='tech-stack'>
							{techStack.map((tech) => (
								<span key={tech} className='tech-badge'>{tech}</span>
							))}
						</div>

						<div className='card-actions'>
							<a
								href={view}
								target='_blank'
								rel='noopener noreferrer'
								className='action-btn view-btn'
							>
								<FaEye />
								<span>צפייה באתר</span>
							</a>
							<a
								href={source}
								target='_blank'
								rel='noopener noreferrer'
								className='action-btn source-btn'
							>
								<FaGithub />
								<span>קוד מקור</span>
							</a>
						</div>

						<div className='card-footer'>
							<FaExternalLinkAlt className='external-icon' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(ProjectCard);

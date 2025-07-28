import './AboutContentS.css';

import React ,{useCallback} from 'react';

import Icon from '@mdi/react';
import {
	mdiMaterialUi,
	mdiReact,
	mdiLanguageJavascript,
	mdiLanguageTypescript,
	mdiLanguageHtml5,
	mdiLanguageCss3,
	mdiNodejs,
} from '@mdi/js';

import SocketICon from '../assets/socket.png';
import ExpressIcon from '../assets/express.png';
import MongoICon from '../assets/mongodb.png';
import BootstrapICon from '../assets/bootstrap.png';
import MysqlIcon from '../assets/mysql.png';
import FirebaseIcon from '../assets/firebase.png';

const PDF_FILE_URL = 'http://localhost:3000/mati__misganow_pdf-1.pdf';

const AboutContent = () => {
	const downloadFileAtUrl = useCallback((url) => {
		fetch(url)
			.then((response) => response.blob())
			.then((blob) => {
				const blobURL = window.URL.createObjectURL(new Blob([blob]));
				const fileName = url.split('/').pop();
				const aTag = document.createElement('a');
				aTag.href = blobURL;
				aTag.setAttribute('download', fileName);
				document.body.appendChild(aTag);
				aTag.click();
				aTag.remove();
			});
	}, []);
	return (
		<div className='about'>
			<div className='left'>
				<h1>Pro Full-Stack Developer 🧑‍💻</h1>
				<p>
					As a software developer from scratch, I emphasize innovative solutions
					and efficient outcomes using cutting-edge technologies. I specialize
					in rapid and high-quality software development that transforms ideas
					into reality .<br /> Software is a crucial tool for solving modern-day
					problems, and I am here to ensure that the technological solutions I
					develop are central to that. I am committed to innovation, quality,
					and excellent performance.
				</p>
				<button
					className='btn'
					onClick={() => {
						downloadFileAtUrl(PDF_FILE_URL);
					}}
				>
					Download Resume
				</button>
			</div>
			<div className='right'>
				<div className='education'></div>
				<div className='skills'>
					<h4>SKILS</h4>
					<div className='divider'></div>
					<div className='fronted'>
						<h4>Frontend</h4>
						<ul className='stack'>
							<li>
								<Icon path={mdiReact} size={1} />
							</li>
							<li>
								<Icon path={mdiMaterialUi} size={1} />
							</li>
							<li>
								<Icon path={mdiLanguageJavascript} size={1} />
							</li>
							<li>
								<Icon path={mdiLanguageTypescript} size={1} />
							</li>
							<li>
								<Icon path={mdiLanguageCss3} size={1} />
							</li>
							<li>
								<Icon path={mdiLanguageHtml5} size={1} />
							</li>
							<li>
								<img
									src={BootstrapICon}
									alt='socket'
									style={{ width: '24px', height: '24px' }}
								/>
							</li>
						</ul>
					</div>
					<div className='divider'></div>
					<div className='backend'>
						<h4>Backend</h4>
						<ul className='stack'>
							<li>
								<Icon path={mdiNodejs} size={1} />
							</li>
							<li>
								<img
									src={SocketICon}
									alt='socket'
									style={{ width: '24px', height: '24px' }}
								/>
							</li>
							<li>
								<img
									src={ExpressIcon}
									alt='socket'
									style={{
										width: '20px',
										height: '20px',
										backgroundColor: '#fff',
										borderRadius: '50px 50px 50px 50px',
									}}
								/>
							</li>
							<li></li>
						</ul>
					</div>
					<div className='divider'></div>
					<div className='database'>
						<h4>Database</h4>
						<ul className='stack'>
							<li>
								<img
									src={MysqlIcon}
									alt='socket'
									style={{ width: '24px', height: '24px' }}
								/>
							</li>
							<li>
								<img
									src={MongoICon}
									alt='socket'
									style={{ width: '24px', height: '24px' }}
								/>
							</li>
							<li>
								<img
									src={FirebaseIcon}
									alt='socket'
									style={{ width: '24px', height: '24px' }}
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(AboutContent);

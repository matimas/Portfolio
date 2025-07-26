import CriptoProImg from '../assets/cripto-prj.png';
import MineCraftProImg from '../assets/Mindcraft.png';
import CoronaProImg from '../assets/corona-statistic.png';

const ProjectCardData = [
	{
		imgsrc: CriptoProImg,
		title: 'חדשות מטבעות דיגיטליים',
		description: 'אפליקציית React המציגה מידע עדכני על מטבעות דיגיטליים, עם גרפים אינטראקטיביים וחדשות בזמן אמת. משתמשת ב-API של CoinGecko להצגת מחירים ונתונים מדויקים.',
		view: 'https://eloquent-mestorf-3aa621.netlify.app/',
		source: 'https://github.com/matimas/Bootcamp-Crypto',
	},
	{
		imgsrc: MineCraftProImg,
		title: 'MindCraft - משחק 2D',
		description: 'משחק דמוי מיינקראפט שפותח ב-JavaScript טהור. כולל מנוע פיזיקה, יצירת עולמות רנדומליים ומערכת בנייה אינטואיטיבית. פרוייקט מורכב המדגים יכולות תכנות מתקדמות.',
		view: 'https://determined-kalam-fa8974.netlify.app/',
		source: 'https://github.com/matimas/Bootcamp-Mindcraft-2d',
	},
	{
		imgsrc: CoronaProImg,
		title: 'סטטיסטיקות קורונה',
		description: 'דשבורד אינטראקטיבי המציג נתוני קורונה עולמיים בזמן אמת. כולל מפות, גרפים וחיפוש לפי מדינות. בנוי עם React ו-Chart.js עם עיצוב רספונסיבי ונגיש.',
		view: 'https://objective-bell-421b78.netlify.app/',
		source: 'https://github.com/matimas/Bootcamp-Covid#readme',
	},
];

export default ProjectCardData;

import type { Project, PlaygroundItem } from '@/types';



export const projects: Project[] = [
	{
		slug: 'groove-music-cube',
		title: 'Groove Music Cube',
		subtitle: 'Unlock Your Musical Journey',
		description:
			'The project is an interactive musical installation that connects the world of music and the real world.',
		tags: ['Tangible Interaction', 'Research throught Design','MIDI controller','Sound Interactive System'],
		thumbnail: '/images/projects/cube.jpg',
		video: '/images/projects/groove-music-cube.mp4',  
		images: [
	'/images/projects/cube-1.jpg',
	'/images/projects/cube-2.jpg',
	'/images/projects/cube-3.jpg',
	'/images/projects/cube-4.jpg',
	'/images/projects/cube-5.jpg',
	'/images/projects/cube-6.png'
		],
		links: [{ label: 'View Project', href: 'https://ixd-exhibit.uqcloud.net/archive/2023/teams/groove/' }]
	},
	{
		slug: 'ez-menu-qlight',
		title: 'EZ Menu + QLight',
		subtitle: 'Interactive Environment For Hospital',
		description:
			'To enhance human connection in hospital scenarios, providing tangible interaction devices between patients and healthcare professionals to address potentially conflicting issues and needs of both parties.',
		tags: ['Yo-Yo Machines', 'Interactive Environment', 'Healthcare', 'ESPS32S'],
		thumbnail: '/images/projects/Qlight.jpg',
		video: '/images/projects/ezmenu.mp4',
		images: [],
links: [
    { label: 'View Project', href: '/projects/ez-menu-qlight' },
    { label: 'View Report', href: 'https://drive.google.com/file/d/1VD7z8ybukrGHpmfLQTxHavXFVlwYAx5D/view' }
]
	},
	{
		slug: 'eldome',
		title: 'Eldome',
		subtitle: 'Design for Elder Social Well Being',
		description:
			'This project is to design a dedicated mobile app for older people that aims to increase the connection between older people and society. And to enable older people to self-report their well-being data in a non-intrusive way.',
		tags: ['SocialDesign', 'BigData', 'MentalHealth', 'InclusiveDesign','Application','FullStack'],
		thumbnail: '/images/projects/eldome.jpg',
		video: 'https://www.youtube.com/embed/tcnB0e-FEgo?si=gDmW82Y5tNcOgpd6',
		images: [],
		links: [
			{ label: 'View Report', href: 'https://drive.google.com/file/d/18NMg2Zrwss0wtDHvrzws50f9X5ahZWKF/view' },
			{ label: 'Github', href: 'https://github.com/SaberFate01/TeamApex' },
		]
	},
	{
		slug: 'irecycle',
		title: 'irecycle',
		subtitle: 'Improving public awareness of E-WASTE',
		description:
			'A platform that enables diverse e-waste recycling options while promoting sustainable disposal practices.',
		tags: ['Augmented reality', 'Sustainability', 'Circular Economy', 'Mobile UX', 'Behavior Change'],
		thumbnail: '/images/projects/irecycle.jpg',
		detailImage: '/images/projects/irecycle-detail.jpg',
		images: [],
		links: [{ label: 'View Project', href: '/projects/irecycle' }, { label: 'View Report', href: 'https://drive.google.com/file/d/1dQW1v9W_M7wjB2MXikLYeA0DGkf3ZrkT/view?usp=sharing' }

		],
		
	}
];



export const playgroundItems: PlaygroundItem[] = [
	{
		slug: 'side-project-one',
		title: 'Met Inventory',
		thumbnail: '/images/playground/Met.jpg',
		category: 'Data-Driven Research'
	},
	{
		slug: 'side-project-two',
		title: 'Outside the kingdom of Ugarit',
		thumbnail: '/images/playground/map.jpg',
		category: 'Data-Driven Research'
	},
	{
		slug: 'side-project-three',
		title: '3D Walking Simulator',
		thumbnail: '/images/playground/walk.jpg',
		category: 'Gaming'
	},
	{
		slug: 'side-project-four',
		title: 'Frog! Jump! Jump!',
		thumbnail: '/images/playground/frog.jpg',
		category: 'Gaming'
	},
	{
		slug: 'side-project-five',
		title: 'Children E-Reading',
		thumbnail: '/images/playground/child.png',
		category: 'Interactive'
	},
	{
		slug: 'side-project-six',
		title: 'University Ranking Visualization',
		thumbnail: '/images/playground/world.jpg',
		category: 'Data Visualization'
	}
];

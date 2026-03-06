import type { NavLink, PersonalInfo } from '@/types';



export const siteConfig = {
	title: 'Memphis — Portfolio',
	description: 'HCI Researcher & Designer',
	url: 'https://your-site.vercel.app'
};

export const personalInfo: PersonalInfo = {
	name: 'Memphis',
	title: 'HCI Researcher & Designer',
	email: 'yuejin1@uchicago.edu',
	location: 'Chicago, IL',
	bio: `I'm Memphis, an **HCI researcher** and **designer** with a background in human-computer interaction. I completed my undergraduate studies at the University of Queensland and am currently pursuing graduate work at the University of Chicago. My research interests include interactive systems, user experience design, and emerging technologies.`,
	avatar: '/images/avatar.jpg', // ← Put your photo at /static/images/avatar.png
	socialLinks: [
		{ platform: 'GitHub', href: 'https://github.com/williamkij' },
		{ platform: 'LinkedIn', href: 'https://www.linkedin.com/in/yue-jin-106623250/' },
		// { platform: 'Twitter', href: 'https://twitter.com/yourusername' },
	]
};

export const navLinks: NavLink[] = [
	{ label: 'Works', href: '/#featured-works' },
	{ label: 'CV', href: '/cv' },
	{ label: 'About', href: '/about' }
];

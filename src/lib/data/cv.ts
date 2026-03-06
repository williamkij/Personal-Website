import type { Education, Experience, SkillGroup } from '@/types';



export const education: Education[] = [
	{
		institution: 'University of Chicago',
		degree: 'Master of Arts',
		field: 'Digital Studies (Digital Media and Extended Realities)',
		period: '2025 – Present',
		description:
			' Data drivened research, Mixed Reality and HCI '
	},
	{
		institution: 'University of Queensland',
		degree: 'Bachelor of Information Technology',
		field: 'Human-Computer Interaction and UX Design',
		period: '2021 – 2024',
		description: 'Interaction Design, UX Research Methods, Digital Fabrication,Object-Oriented Programming, Control Systems, Sensors and Actuators'
	},
	{
		institution: 'University of Zurich',
		degree: 'Summer Session',
		field: 'Blockchain Technology',
		period: 'Jun - Aug 2022',
		description: 'Blockchain Technology, Crypto Economics, Smart Contracts, Blockchain Regulation'
	}

];


export const experience: Experience[] = [
	{
		organization: 'China Mobile Innovation Research Institute',
		role: 'Product Management Intern',
		period: 'Mar – Aug 2025',
		description:
			'Contributed to the design and evaluation of an AIGC-powered consumer music application, conducting user experience analysis and multimodal feature prototyping (image-to-video, text-to-video, voice cloning, digital humans) and testing 100+ AI-generated assets via ComfyUI workflows, informing product iteration and contributing to 30,000+ song conversions after launch.'
	},
	{
		organization: 'The University of Queensland',
		role: 'Teaching Assistant (Academic Tutor)',
		period: 'Jul – Dec 2024',
		description:
			'Led four diverse teams of graduate and undergraduate students (24 total) on UX and assistive technology capstone projects, supporting milestone planning and iterative delivery for a course with 600+ enrolled students Managed weekly execution cadence using stand-ups and Kanban to track milestones, risks, and delivery progress, and Guided teams in translating user research into scoped product concepts under technical and ethical constraints.',
	},
];

// ============================================================
// SKILLS — Group your skills by category
// ============================================================

export const skills: SkillGroup[] = [
	{
		category: 'Programming',
		items: ['Python', 'JavaScript', 'Arduino C++', 'C#', 'React', 'HTML/CSS','SQL']
	},
	{
		category: 'Design & Prototyping',
		items: ['Figma', 'Adobe Creative Suite', 'Blender', 'Unity', 'Cura Slicer', 'Machining','Assembly']
	},
	{
		category: 'Research',
		items: ['User Studies', 'Qualitative Analysis', 'Agile(Scrum)', 'A/B Testing', 'Heuristic Evaluation']
	},
	{
		category: 'Tools & Platforms',
		items: ['Git', 'Vercel', 'SvelteKit', 'Node.js', 'Tailwind CSS', 'ComfyUI', 'Jupyter Notebook', 'Postman']
	}
];

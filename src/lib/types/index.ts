

/** A featured project shown on the home page */
export interface Project {
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	tags: string[];
	thumbnail: string; // path to image in /static/images/projects/
	video?: string;
	images?: string[]; // additional images for the detail page
	links?: { label: string; href: string }[];
	detailImage?: string;
}

/** A playground / side-project item */
export interface PlaygroundItem {
	slug: string;
	title: string;
	thumbnail: string; // path to image in /static/images/playground/
	category: PlaygroundCategory;
}

export type PlaygroundCategory =
	| 'Data-Driven Research'
	| 'Gaming'
	| 'Interactive'
	| 'Data Visualization'
;

/** Education entry for CV / About */
export interface Education {
	institution: string;
	degree: string;
	field: string;
	period: string;
	description?: string;
	logo?: string;
}

/** Work / research experience entry */
export interface Experience {
	organization: string;
	role: string;
	period: string;
	description: string;
	logo?: string;
}

/** A skill category */
export interface SkillGroup {
	category: string;
	items: string[];
}

/** Personal info for the About page */
export interface PersonalInfo {
	name: string;
	title: string;
	email: string;
	location: string;
	bio: string;
	avatar: string; // path to image in /static/images/
	socialLinks: { platform: string; href: string; icon?: string }[];
}

/** Navigation link */
export interface NavLink {
	label: string;
	href: string;
	external?: boolean;
}

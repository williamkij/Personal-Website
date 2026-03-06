// @ts-nocheck
import { projects, playgroundItems } from '$lib/data/projects';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = ({ params }: Parameters<PageLoad>[0]) => {
	const { slug } = params;


	const project = projects.find((p) => p.slug === slug);
	if (project) {
		return { project, type: 'featured' };
	}

	const playgroundItem = playgroundItems.find((p) => p.slug === slug);
	if (playgroundItem) {
		return { playgroundItem, type: 'playground' };
	}

	error(404, 'Project not found');
};
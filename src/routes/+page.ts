import type { PageLoadEvent } from './$types';
import type { Gallery } from '$lib/public/gallery';

export async function load({ fetch }: PageLoadEvent) {
	const type = 'home';
	const response = await fetch(`/api/files?type=${encodeURIComponent(type)}`);

	if (!response.ok) {
		throw new Error('Failed to fetch gallery data');
	}

	const gallery = (await response.json()) as Gallery;
	console.log(gallery);

	return { gallery };
}

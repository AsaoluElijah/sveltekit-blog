import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

	const data = await response.json();

	if (data) {
		return { data };
	}

	throw error(404, 'Not found');
}

import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const postId = params.slug;
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

	const data = await response.json();

	if (!data.error) {
		return data;
	}

	throw error(404, 'Not found');
}

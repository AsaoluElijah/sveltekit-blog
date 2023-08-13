<script>
	import BlogCard from '../components/BlogCard.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	let posts = data.data;
</script>

<svelte:head>
	<title>Blog Posts</title>
</svelte:head>

<main class="p-5 md:px-9">
	<h1 class="text-center mt-8 mb-16 text-6xl my-4 font-bold">Posts</h1>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-7">
		{#each posts as post}
			<a href={`/blog/${post.id}`}>
				<BlogCard blog={post} />
			</a>
		{/each}
	</div>
</main>

<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<main class="p-5 md:px-9">
	<h1 class="capitalize mt-8 text-2xl my-4 font-bold">{data.title}</h1>
	<p>{data.body}</p>
	<a href="/" class="block mt-3 text-blue-600 underline">Go back</a>
</main>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

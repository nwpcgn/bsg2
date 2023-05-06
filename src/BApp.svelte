<script>
	import Background from './views/_layouts/Background.svelte'
	import Router from 'svelte-spa-router'
	import routes from './views/routes'
</script>

<main class="main">
	<Background animate />
	<Router {routes} />
</main>

<style>
	:global(main) {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
	}

	:global(main > *) {
		grid-row: 1;
		grid-column: 1;
	}
</style>

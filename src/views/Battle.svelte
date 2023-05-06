<script>
	import Engine from './_game/Engine.svelte'
	import Textbox from './_game/Textbox.svelte'
	import GameLayout from './_layouts/GameLayout.svelte'
	export let name = 'Seite'
	export let callback = null
</script>

<GameLayout bind:callback>
	<span class="nav-text" slot="header">
		{name}
	</span>
	<div class="container-fluid">
		<Engine />
	</div>
	<aside slot="end">
		<Textbox />
	</aside>
</GameLayout>

<style>
	aside {
		position: absolute;
		inset: 0;
		padding: 1rem;
	}
</style>

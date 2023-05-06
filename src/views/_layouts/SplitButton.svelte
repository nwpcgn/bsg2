<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	export let size = 68
</script>

<article {...$$restProps}>
	<button on:click={() => dispatch('click', 'click')} class="avatar shadow">
		<svg width={size} height={size} fill="currentColor" viewBox="0 0 20 20">
			<path
				fill-rule="evenodd"
				d="M17 4H3v12h14V4zM3 3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V4a1 1 0 00-1-1H3z"
				clip-rule="evenodd" />
			<path
				fill-rule="evenodd"
				d="M9.5 16V4h1v12h-1zm0-8H3V7h6.5v1zm7.5 5h-6.5v-1H17v1z"
				clip-rule="evenodd" />
		</svg>
	</button>
</article>

<style>
	.avatar {
		border-radius: 50%;
		align-items: center;
		display: flex;
		justify-content: center;
		padding: 2.5rem;
	}
</style>

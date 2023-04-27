<script>
	import { slide } from 'svelte/transition'
	export let bottom
</script>

<div class:bottom {...$$restProps} in:slide={{ duration: 400 }}>
	<slot />
</div>

<style>
	div {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		padding: 0.5rem;
		background-color: rgba(255, 255, 255, 0.8);
	}
	div.bottom {
		top: inherit;
		bottom: 0;
	}
</style>

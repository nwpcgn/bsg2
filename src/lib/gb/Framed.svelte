<script>
	// import { fade } from 'svelte/transition'
	export let element
	export let grow
</script>

<div bind:this={element} class="framed" class:flex-grow-1={grow}>
	<slot />
</div>

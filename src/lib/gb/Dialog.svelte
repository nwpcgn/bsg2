<script>
	import { slide } from 'svelte/transition'
	import { createEventDispatcher } from 'svelte'
	import { onMount } from 'svelte'
	
	export let open = true
	export let component = null
	export let header = null
	export let html = null
	export let callback = null
	export let timeout = 2000
	const dispatch = createEventDispatcher()
	$: dispatch(open ? 'open' : 'close')
	function close() {
		open = false
		if (callback) callback()
	}
	function hide() {
		open = false
	}
	onMount(() => {
		setTimeout(hide, timeout)
	})
</script>

<article transition:slide|local>
	<section>
		<h4 class="mb-3">{header ? header : 'Info'}</h4>
		{#if component}
			<svelte:component this={component} />
		{/if}
		{#if html}
			<div>{@html html}</div>
		{/if}
		<div class="mt-3">
			<button class="btn btn-outline-dark" on:click={close}>OK</button>
		</div>
	</section>
</article>

<style>
	article {
		position: absolute;
		inset: 0;
		background-color: rgba(255, 255, 255, 0.7);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	section {
		text-align: center;
		background-color: #fff;
		padding: 1.5rem 1rem;
		border-radius: var(--bs-border-radius);
	}
</style>

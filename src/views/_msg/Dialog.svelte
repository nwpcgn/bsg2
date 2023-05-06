<script>
	import { createEventDispatcher, onMount } from 'svelte'
	const dispatch = createEventDispatcher()
	export let open = true
	export let component = null
	export let data = null
	export let html = null
	export let delay = null
	function close() {
		open = false
	}

	$: if (delay) {
		console.log('DELAY')
		setTimeout(close, delay)
	}

	$: dispatch(open ? 'open' : 'close')
</script>

{#if component}
	<svelte:component this={component} {close} {data} />
{/if}

{#if html}
	<section>
		<article>
			{@html html}
		</article>
		<aside>
			<button
				on:click={close}
				type="button"
				class="btn-close"
				aria-label="Close" />
		</aside>
	</section>
{/if}

<style lang="scss">
	section {
		display: flex;
		align-items: start;
		article {
			flex: 1;
		}
	}
</style>

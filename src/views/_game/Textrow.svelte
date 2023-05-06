<script>
	import { createEventDispatcher } from 'svelte'
	import { slide, fade } from 'svelte/transition'
	import { cubicIn, cubicOut } from 'svelte/easing'
	const dispatch = createEventDispatcher()
	export let type = 'warning'
	export let dismissible = true
</script>

<article class={type} role="alert" in:slide={{duration: 250, easing:cubicIn}} out:fade={{duration: 100, easing:cubicOut}}>
	<div class="fw-light">
		<slot />
	</div>

	{#if dismissible}
		<button class="close" on:click={() => dispatch('dismiss')}>
		<!-- 	<span>X</span> -->
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_LG"> <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
		</button>
	{/if}
</article>

<style lang="scss">
	article {
		--bc: var(--bs-gray-400);
		--bg: var(--bs-body-bg);
		--col: var(--bs-body-color);
		--px: 0.5rem;
		--py: 0.5rem;
		--my: 0.5rem;
		--br: 0.3rem;
		position: relative;
		padding: var(--py) var(--px);
		margin-bottom: var(--my);
		color: var(--col);
		background-color: var(--bg);
		border: 0.1em solid var(--bc);
		border-radius: var(--br);
		display: flex;
		justify-content: space-between;

		&.danger,
		&.error {
			--bc: var(--bs-danger);
			color: var(--bc); 
		
		}
		&.info {
			--bc: var(--bs-info);
		}
		&.success {
			--bc: var(--bs-success);
		}
		&.primary {
			--bc: var(--bs-primary);
			color: var(--bc); 
		}
		&.secondary,
		&.dark {
			--bc: var(--bs-secondary);
			color: var(--bc); 
		}
		&.warning {
			--bc: var(--bs-warning);
		}
		button {
			background: transparent;
			border: 0 none;
			margin: 0 0 0 auto;
			display: inline-flex;
			align-items: center;
			justify-content: space-around;
			font-size: 1rem;
			color: var(--col);
			opacity: 0.4;
		}
	}
	article {
		
	}
</style>

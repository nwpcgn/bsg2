<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	export let active
	export let label
	export let text
	export let disabled
	export let hidden
	export let enable
</script>

{#if !hidden}
	<div {...$$restProps}>
		<button
			on:click={(e) => dispatch('click', e.currentTarget)}
			type="button"
			class:enable
			class:active={active && !text}
			class:text
			{disabled}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				width="2rem"
				height="2rem">
				<g>
					<path fill="none" d="M0 0h24v24H0z" />
					<path d="M14 12l-4 4V8z" />
				</g>
			</svg>
			<span class="text-truncate">
				<slot>
					{label}
				</slot>
			</span>
		</button>
	</div>
{:else}
	<div {...$$restProps}>
		<button class="opacity-0"><!-- Blank --></button>
	</div>
{/if}

<style>
	.text {
		color: var(--bs-gray-500);
		letter-spacing: .1rem;
	}
	.text:hover {
		color: var(--bs-gray-800);
	}
</style>

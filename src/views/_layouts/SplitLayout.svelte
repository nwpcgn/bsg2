<script>
	import { fade } from 'svelte/transition'
	import { cubicIn, cubicOut } from 'svelte/easing'
	import SplitButton from './SplitButton.svelte'
	export let label = 'Nwp-App'
	export let split = true
	export let callback = null
	export let center
</script>

<div
	class="split-screen"
	in:fade={{ duration: 350, easing: cubicIn }}
	out:fade={{ duration: 250, easing: cubicOut }}>
	<div class="split-half" class:center>
		{#if $$slots.header}
			<nav class="navbar navbar-expand bg-body-tertiary sticky-top">
				<div class="container-fluid">
					<a class="navbar-brand" href="#/">{label}</a>
					<nav class="ms-auto" />
					<slot name="header"><!-- optional fallback --></slot>
				</div>
			</nav>
		{/if}
		<slot><!-- optional fallback --></slot>
	</div>
	{#if split}
		<div class="split-half center bg-sub">
			<div class="p-2">
				<SplitButton on:click={callback} />
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.split-screen {
		position: absolute;
		inset: 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;

		.split-half {
			display: flex;
			flex-direction: column;
			overflow-x: hidden;
			position: relative;

			&.center {
				justify-content: center;
				align-items: center;
			}

			&:nth-child(1) {
				flex: 3;
			}

			&:nth-child(2) {
				flex: 2;
				border-left: 1px solid var(--bs-gray-200);
			}
		}
		.bg-sub {
			// background-color: rgba(248, 249, 250, 0.25);
			background: rgba(255, 255, 255, 0.35);
			-webkit-backdrop-filter: blur(8px);
			backdrop-filter: blur(8px);
			border: 1px solid rgba(255, 255, 255, 0.175);
		}
	}

	@media only screen and (min-width: 570px) {
		.split-screen {
			flex-direction: row;
		}
	}
	@media only screen and (min-width: 780px) {
		.split-half {
			flex: 1;
		}
	}
</style>

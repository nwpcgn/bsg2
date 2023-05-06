<script>
	import { fade } from 'svelte/transition'
	import { cubicIn, cubicOut } from 'svelte/easing'
	export let label = 'Nwp-App'
</script>

<div
	class="split-game"
	in:fade={{ duration: 350, easing: cubicIn }}
	out:fade={{ duration: 250, easing: cubicOut }}>
	<div class="split-half">
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

	<div class="split-end bg-sub">
		<slot name="end" />
	</div>
</div>

<style lang="scss">
	.split-game {
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
			flex: 3;
			border-bottom: 1px solid var(--bs-gray-200);

			&.center {
				justify-content: center;
				align-items: center;
			}
		}

		.split-end {
			display: flex;
			flex-direction: column;
			overflow-x: hidden;
			position: relative;
			flex: 1;
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
		.split-game {
			flex-direction: row;

			.split-half {
				flex: 2;
				border-right: 1px solid var(--bs-gray-200);
			}
		}
	}
</style>

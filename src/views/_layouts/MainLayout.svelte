<script>
	import SplitButton from './SplitButton.svelte'
	export let split = true
	export let callback = null
	export let center
</script>

<div class="split-screen">
	<div class="split-half" class:center>
		<slot><!-- optional fallback --></slot>
	</div>
	{#if split}
		<div class="split-half center aside">
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

			&.aside {
				background-color: #f9fafb;
			}
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

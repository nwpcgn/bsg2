<script>
	export let blank
</script>

{#if !blank}
	<div class="p-4">
		<heade class="d-flex align-items-center">
			<aside class="flex-shrink-0">
				<div class="fs-1">🧝‍♂️</div>
			</aside>
			<div class="flex-grow-1 ms-3 text-truncate">
				<span class="fs-2">Name</span>
			</div>
		</heade>
		<article>
			<span class="fs-6 text-muted">Heading 5</span>
		</article>
		<footer class="py-1">
			<div class="progress">
				<div
					class="progress-bar"
					role="progressbar"
					style="width:60%"
					aria-valuenow="60"
					aria-valuemin="0"
					aria-valuemax="100">
					60%
				</div>
			</div>
		</footer>
	</div>
{:else}
	<div class="p-4">
		<slot />
	</div>
{/if}

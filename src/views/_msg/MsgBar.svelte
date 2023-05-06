<script>
	import { slide } from 'svelte/transition'
	export let data = null
	export let close
</script>

<div out:slide={{ duration: 400 }}>
	{#if data}
		<div
			class="alert alert-{data.type
				? data.type
				: 'warning'} alert-dismissible fade show mb-0"
			role="alert">
			<h4 class="alert-heading">{data.titel ? data.titel : 'Battle System'}</h4>
			<p>Game Development with Js and Svelte</p>
			<button
				type="button"
				class="btn-close"
				on:click={close}
				aria-label="Close" />
			<hr />

			<details class="my-0">
				<div>
					{#if data}
						<pre>{JSON.stringify(data, null, 2)}</pre>
					{/if}
				</div>
			</details>
		</div>
	{:else}
		<div
			class="alert alert-warning alert-dismissible fade show mb-0"
			role="alert">
			<p>
				This example text is going to run a bit longer so that you can see how
				spacing within an alert works with this kind of content.
			</p>
			<button
				type="button"
				class="btn-close"
				on:click={close}
				aria-label="Close" />
		</div>
	{/if}
</div>

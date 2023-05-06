<script>
	import SplitLayout from './_layouts/SplitLayout.svelte'
	export let name
	export let callback

	let daten = {}
	let result = [
		{
			name: 'Sonja',
			character_uuid: 'fdd61e2f-a996-473c-864a-af689e22fc09',
			portrait: './img/c2.png',
			text: {
				de: 'Hallo und Willkommen.\nWas möchtest du wissen?'
			},
			parent: 'root',
			next: 'cf2ec7b7-e292-43be-8aba-9070dc12b341',
			id: '5e29473f-7fff-49e7-8bb0-6dfa4559ef11'
		}
	]
	let start
	let next
	let act
	let current = {
		name: 'Sonja',
		character_uuid: 'fdd61e2f-a996-473c-864a-af689e22fc09',
		portrait: './img/c2.png',
		text: {
			de: 'Hallo und Willkommen.\nWas möchtest du wissen?'
		},
		parent: 'root',
		next: 'cf2ec7b7-e292-43be-8aba-9070dc12b341',
		id: '5e29473f-7fff-49e7-8bb0-6dfa4559ef11'
	}
	const open = (id) => {
		console.log('OPEN', id)
		let res = result.findIndex((x) => x.id === id)
		if (res && result[res]) {
			current = result[res]
			result[res].act = true
			act = id
		}
	}
	const fetchJson = (url) => {
		return fetch(url).then((r) => r.json())
	}
	const getData = async () => {
		daten = await fetchJson('./data/de1.json')
		start = daten.root.next
		act = start
		next = start
		result = []
		for (const [key, value] of Object.entries(daten)) {
			if (key !== 'root' && key !== '__editor') {
				let o = value
				o.id = key
				result.push(o)
			}
		}
		let d = result.find((el) => el.id === next)
		current = d
		next = d.next
		return current
	}

	let promise = getData()
</script>

<SplitLayout bind:callback>
	<span class="nav-text" slot="header">
		{name}
	</span>
	<div class="container-fluid bg-sub py-5">
		<header>
			<h2>Dialoge</h2>
		</header>

		{#await promise}
			<h4>... loading</h4>
		{:then value}
			<div class="p-4 rounded bg-light">
				<div class="d-flex">
					<div class="flex-shrink-0">
						<img src={current.portrait} width="88" alt="" />
					</div>
					<div class="flex-grow-1 ms-3">
						<h2>{current.name}</h2>
						<div class="text-muted py-3 fs-5">{current.text.de}</div>
						<div class="d-flex gap-1">
							{#if current.next}
								{#if current.parent !== 'root'}
									<button
										on:click={() => open(current.parent)}
										type="button"
										class="btn btn-secondary">Back</button>
								{/if}

								<button
									on:click={() => open(current.next)}
									type="button"
									class="btn btn-primary">Next</button>
							{:else if current.choices}
								{#each current.choices as el}
									<button
										on:click={() => open(el.next)}
										type="button"
										class="btn btn-secondary">{el.text.de}</button>
								{/each}
							{/if}
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div>
				{#each result as e (e.id)}
					{#if e.id === act}
						<div class="p-4 rounded bg-light mb-2">
							<div class="d-flex">
								<div class="flex-shrink-0">
									<img src={e.portrait} width="88" alt="" />
								</div>
								<div class="flex-grow-1 ms-3">
									<h3>{e.name}</h3>
									<div class="text-muted py-2">
										{e.text && e.text.de ? e.text.de : ''}
									</div>
									<div class="d-flex gap-1">
										{#if e.next}
											<button
												on:click={() => open(e.next)}
												type="button"
												class="btn btn-primary">Next</button>
										{:else if e.choices}
											{#each e.choices as el}
												<button
													on:click={() => open(el.next)}
													type="button"
													class="btn btn-secondary">{el.text.de}</button>
											{/each}
										{/if}
									</div>
								</div>
							</div>
						</div>
					{/if}
				{/each}
			</div>
			<div class="p-4 bg-light rounded">
				<details>
					<div class="p-4 rounded bg-light">
						<pre>{JSON.stringify(result, null, 2)}</pre>
					</div>
				</details>
			</div>
		{/await}
	</div>
</SplitLayout>

<style>
	.bg-sub {
		background: rgba(255, 255, 255, 0.35);
		-webkit-backdrop-filter: blur(8px);
		backdrop-filter: blur(8px);
		border: 1px solid rgba(255, 255, 255, 0.175);
	}
</style>

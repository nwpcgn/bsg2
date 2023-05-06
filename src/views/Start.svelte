<script>
	import { onMount } from 'svelte'
	import SplitLayout from './_layouts/SplitLayout.svelte'
	export let name = 'Seite'
	export let callback = null
	const dialoge = {
		'5e29473f-7fff-49e7-8bb0-6dfa4559ef11': {
			name: 'Sonja',
			character_uuid: 'fdd61e2f-a996-473c-864a-af689e22fc09',
			portrait: './img/c2.png',
			text: { de: 'Hallo und Willkommen.\nWas möchtest du wissen?' },
			parent: 'root',
			next: 'cf2ec7b7-e292-43be-8aba-9070dc12b341'
		},
		'cf2ec7b7-e292-43be-8aba-9070dc12b341': {
			name: 'Taucher',
			character_uuid: '3d85ad39-e476-4f29-b7d8-38234202482b',
			portrait: './img/c1.png',
			text: { de: 'Was kann ich von einer Sitzung mit Blackburn erwarten?' },
			parent: '5e29473f-7fff-49e7-8bb0-6dfa4559ef11',
			next: '3540fa03-f70f-4790-b0e3-ceac73793b21'
		},
		'3540fa03-f70f-4790-b0e3-ceac73793b21': {
			name: 'Sonja',
			character_uuid: 'fdd61e2f-a996-473c-864a-af689e22fc09',
			portrait: './img/c2.png',
			text: {
				de: 'Unser erfahrenes Team führt Sie durch ein immersives und personalisiertes sensorisches Erlebnis, das auf Ihre Wünsche und Grenzen zugeschnitten ist.'
			},
			parent: 'cf2ec7b7-e292-43be-8aba-9070dc12b341',
			next: 'ab9434bd-a2b9-4fb8-87b5-550fa69d5eab'
		},
		'93049269-83a1-4c63-b6f5-1784abc35075': {
			name: 'Sonja',
			character_uuid: 'fdd61e2f-a996-473c-864a-af689e22fc09',
			portrait: './img/c2.png',
			text: {
				de: ' Absolut. Wir nehmen Ihre Sicherheit und Ihren Komfort ernst und stellen sicher, dass alle Sitzungen den Sicherheitsstandards der Branche entsprechen.'
			},
			parent: 'ab9434bd-a2b9-4fb8-87b5-550fa69d5eab',
			next: '7ad653bc-43e4-46ef-b480-7563f589b157'
		},
		'ab9434bd-a2b9-4fb8-87b5-550fa69d5eab': {
			name: 'Taucher',
			character_uuid: '3d85ad39-e476-4f29-b7d8-38234202482b',
			portrait: './img/c1.png',
			text: { de: 'Sind die Sitzungen sicher?' },
			parent: '3540fa03-f70f-4790-b0e3-ceac73793b21',
			next: '93049269-83a1-4c63-b6f5-1784abc35075'
		},
		'7ad653bc-43e4-46ef-b480-7563f589b157': {
			name: 'Taucher',
			character_uuid: '3d85ad39-e476-4f29-b7d8-38234202482b',
			portrait: './img/c1.png',
			text: { de: 'Kann ich mein eigenes Outfit zur Session mitbringen?' },
			parent: '93049269-83a1-4c63-b6f5-1784abc35075',
			next: 'db4922a5-fd78-4c14-a6f7-860076c50a23'
		},
		'db4922a5-fd78-4c14-a6f7-860076c50a23': {
			name: 'Sonja',
			character_uuid: 'fdd61e2f-a996-473c-864a-af689e22fc09',
			portrait: './img/c2.png',
			text: {
				de: 'Natürlich! Wir begrüßen die Personalisierung und ermutigen Sie, Ihr eigenes Outfit oder Spielzeug mitzubringen, um Ihr Erlebnis zu verbessern.'
			},
			parent: '7ad653bc-43e4-46ef-b480-7563f589b157',
			next: 'd68200b4-61d7-4892-afee-b0071b7fdd49'
		},
		'a9b4f9dd-5980-4fac-b8ec-bb14ba5b128d': {
			name: 'Sonja',
			character_uuid: 'fdd61e2f-a996-473c-864a-af689e22fc09',
			portrait: './img/c2.png',
			text: {
				de: 'Hier einige Referenzen\nIch habe mich noch nie in meinem Leben so befreit und erfüllt gefühlt. Blackburn weiß wirklich, wie man seine tiefsten Wünsche freisetzt.\n - Jason, 32.'
			},
			parent: 'bc2c094a-1566-4120-a927-b0500a71350f',
			next: '44b7461e-60be-4d2a-b525-684dbcd64324'
		},
		'6dbabac7-85f0-49b8-a288-899146253234': {
			name: 'Sonja',
			character_uuid: 'fdd61e2f-a996-473c-864a-af689e22fc09',
			portrait: './img/c2.png',
			text: {
				de: 'Ja da buch doch  jetzt und erleben die ultimative sensorische Reise mit Blackburn.'
			},
			parent: '91266b4f-8aa2-4633-98ec-e725b66668c4'
		},
		'44b7461e-60be-4d2a-b525-684dbcd64324': {
			name: 'Sonja',
			character_uuid: 'fdd61e2f-a996-473c-864a-af689e22fc09',
			portrait: './img/c2.png',
			text: {
				de: 'Ich war anfangs nervös, aber Blackburns Team hat mir das Gefühl gegeben, dass ich mich wohl und unterstützt fühle. Ich kann ihnen nicht genug dafür danken, dass sie mir geholfen haben, meine Fantasien zu erforschen.\n - Sarah, 25.'
			},
			parent: 'a9b4f9dd-5980-4fac-b8ec-bb14ba5b128d',
			next: 'a5f4dd08-6dfd-41b1-bce8-a684bf2d66e5'
		},
		'a5f4dd08-6dfd-41b1-bce8-a684bf2d66e5': {
			name: 'Sonja',
			character_uuid: 'fdd61e2f-a996-473c-864a-af689e22fc09',
			portrait: './img/c2.png',
			text: {
				de: 'Ich bin jetzt seit über einem Jahr regelmäßig bei Blackburn und jede Sitzung fühlt sich wie ein neues Abenteuer an.\n -David, 42.'
			},
			parent: '44b7461e-60be-4d2a-b525-684dbcd64324',
			next: '6dbabac7-85f0-49b8-a288-899146253234'
		},
		'd68200b4-61d7-4892-afee-b0071b7fdd49': {
			name: 'Sonja',
			character_uuid: 'fdd61e2f-a996-473c-864a-af689e22fc09',
			portrait: './img/c2.png',
			text: { de: 'Sehr gerne bin ich dir behilflich.' },
			parent: 'db4922a5-fd78-4c14-a6f7-860076c50a23',
			choices: [
				{
					text: { de: 'Möchtest du noch mehr wissen?', fr: '' },
					next: 'a9b4f9dd-5980-4fac-b8ec-bb14ba5b128d',
					parent: 'd68200b4-61d7-4892-afee-b0071b7fdd49'
				},
				{
					text: { de: 'Sind das genug Informationen?', fr: '' },
					next: '6dbabac7-85f0-49b8-a288-899146253234',
					parent: 'd68200b4-61d7-4892-afee-b0071b7fdd49'
				}
			]
		},
		root: { next: '5e29473f-7fff-49e7-8bb0-6dfa4559ef11' }
	}
	let parent = null
	let next = null
	let curr = null

	$: console.log(`page: ${name}`)
	const changeDialog = (str) => {
		parent = dialoge[str] && dialoge[str].parent ? dialoge[str].parent : null
		next = str ? str : null
		curr = dialoge[next] ? dialoge[next] : ''
	}
	onMount(() => {
		if (dialoge.root.next) {
			parent = 'root'
			next = dialoge.root.next
			curr = dialoge[next]
		}
	})
</script>

<SplitLayout bind:callback>
	<span class="nav-text" slot="header">
		{name}
	</span>
	<div class="container-fluid">
		{#if parent}
			<div>
				Parent: {parent}
			</div>
		{/if}
		{#if next}
			<div>
				Next: {next}
			</div>
		{/if}

		{#if curr && curr.text && curr.text.de}
			<div class="py-4">
				<h4>{curr.name}</h4>
				<h1>
					{curr.text.de}
				</h1>
			</div>
		{/if}

		{#if curr && curr.next}
			<div class="d-flex gap-1">
				{#if parent && parent !== 'root'}
					<button
						on:click={() => changeDialog(parent)}
						type="button"
						class="btn btn-secondary">Back</button>
				{/if}
				<button
					on:click={() => changeDialog(curr.next)}
					type="button"
					class="btn btn-primary">Next</button>
			</div>
		{:else if curr && curr.choices && curr.choices.length}
			<div class="d-flex gap-1">
				{#each curr.choices as { text, next, parent }}
					<button
						on:click={() => changeDialog(next)}
						type="button"
						class="btn btn-primary">{text.de}</button>
				{/each}
			</div>
		{:else}
			<details>
				<summary>JSON OBJ</summary>
				<pre>{JSON.stringify(curr, null, 2)}</pre>
			</details>
		{/if}
	</div>
</SplitLayout>

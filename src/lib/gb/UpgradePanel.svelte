<script>
	export let addcomma
	export let g = {
		money: 0,
		moneyup: 1,
		msec: 0,
		base: {
			cost: 15,
			step: 0,
			boost: 1
		},
		cats: {
			cost: 25,
			step: 0,
			boost: 1,
			add: 1,
			max: 0
		},
		wizards: {
			cost: 250,
			step: 0,
			boost: 1,
			add: 15,
			max: 0
		}
	}
	export let labels = ['Base', 'Cats', 'Wizards']
	export let tab_labels = ['Kat', 'Step', 'Effect', 'Price', 'Status']
	let tempOn = `<span class='text-primary'>Enabled</span>`
	let tempOff = `<span class='text-danger'>Disabled</span>`
	$: tempCheckUc = `${g.money >= g.cats.cost ? tempOn : tempOff}`
	$: tempCheckUw = `${g.money >= g.wizards.cost ? tempOn : tempOff}`
	$: tempCheckUb = `${g.money >= g.base.cost ? tempOn : tempOff}`
	$: tempEffectUc = `${addcomma(Math.floor(g.cats.add * g.cats.boost))}/sec`
	$: tempEffectUw = `${addcomma(g.wizards.add * g.wizards.boost)}/sec`
	$: tempEffectUb = `${addcomma(Math.floor(g.base.boost))}/click`

</script>

<table class="table">
	<thead>
		<tr>
			{#each tab_labels as label}
				<th scope="col">{label}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>{labels[0]}</td>
			<td>{g.base.step + 1}</td>
			<td>{@html tempEffectUb}</td>
			<td>{addcomma(g.base.cost)}</td>
			<td>{@html tempCheckUb}</td>
		</tr>
		<tr>
			<td>{labels[1]}</td><td>{g.cats.step + 1}</td>
			<td>{@html tempEffectUc}</td>
			<td>{addcomma(g.cats.cost)}</td>
			<td>{@html tempCheckUc}</td>
		</tr>
		<tr>
			<td>{labels[2]}</td>
			<td>{g.wizards.step + 1}</td>
			<td>{@html tempEffectUw}</td>
			<td>{addcomma(g.wizards.cost)}</td>
			<td>{@html tempCheckUw}</td>
		</tr>
	</tbody>
</table>

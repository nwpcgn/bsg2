<script>
	// import Fa from 'svelte-fa'
	// import { faStopwatch, faMouse } from '@fortawesome/free-solid-svg-icons'
	// export let size = 'sm'
	export let labels = ['Base', 'Cats', 'Wizards', 'Skills', 'Helper']
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
</script>

<div class="row row-cols-1 row-cols-sm-3">
	<div class="col py-2 text-center">
		<h5>{labels[0]}</h5>
		<p class="display-1 fw-bold">{g.base.step}</p>
	</div>
	<div class="col py-2 text-center">
		<h5>{labels[1]}</h5>
		<p class="display-1 fw-bold">{g.cats.step}</p>
	</div>
	<div class="col py-2 text-center">
		<h5>{labels[2]}</h5>
		<p class="display-1 fw-bold">{addcomma(g.wizards.step)}</p>
	</div>
</div>
<!-- <div class="row row-cols-1 row-cols-sm-2">
	<div class="col py-2 text-center">
		<h5>{labels[3]}</h5>
		<h2 class="fw-bold">
			{addcomma(g.moneyup)}/<Fa icon={faMouse} {size} fw />
		</h2>
	</div>
	<div class="col py-2 text-center">
		<h5>{labels[4]}</h5>
		<h2 class="fw-bold">
			{addcomma(g.msec)}/<Fa icon={faStopwatch} {size} fw />
		</h2>
	</div>
</div> -->

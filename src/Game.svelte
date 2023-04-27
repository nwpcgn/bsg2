<script>
	import { onDestroy, onMount } from 'svelte'
	import { _game, _settings, addcomma, resetValues } from './lib/utils/game'
	import Dialog from './lib/gb/Dialog.svelte'
	import Transit from './lib/gb/Transit.svelte'
	import LevelBar from './lib/gb/LevelBar.svelte'
	import UpgradePanel from './lib/gb/UpgradePanel.svelte'
	import Wrapper from './lib/gb/Wrapper.svelte'
	import Menu from './lib/gb/Menu.svelte'
	import MenuItem from './lib/gb/MenuItem.svelte'
	import Framed from './lib/gb/Framed.svelte'
	import FramedMsg from './lib/gb/FramedMsg.svelte'
	import SpaceBar from './lib/gb/Spacebar.svelte'
	let labels = ['Base', 'Cats', 'Wizards', 'Skills', 'Helper']
	let tab_labels = ['Kat', 'Step', 'Eff', 'Pr', 'Stat']
	let ready = false
	let run = false
	let el1 = null
	let gameTimer

	let g = {
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
	function onHtml(html = '', header = 'Info', timeout = 3000) {
		const d = new Dialog({
			target: el1,
			props: { header, html, timeout }
		})
		d.$on('close', () => d.$destroy())
	}
	function onUpgradeMsg(strg) {
		const d = new Dialog({
			target: el1,
			props: { header: 'Upgrade Info', html: `<span class="text-primary">${strg}</span> Update Verfügbar`, callback: openUpgrade, timeout: 2000 }
		})
		d.$on('close', () => d.$destroy())
	}
	function up1() {
		if (g.money >= g.base.cost) {
			g.moneyup += g.base.boost
			g.money -= g.base.cost
			g.base.step += 1
			g.base.cost = g.base.cost * 5
			g.base.boost = Math.floor(g.base.cost / 15)

			if (g.cats.step == 50) {
				g.msec -= g.cats.max
				g.cats.max = Math.floor(g.moneyup * 0.15)
				g.msec += g.cats.max
			}
			if (g.wizards.step == 50) {
				g.msec -= workmax
				g.wizards.max = Math.floor(g.moneyup * 0.35)
				g.msec += g.wizards.max
			}
		}
	}
	function up2() {
		if (g.money >= g.cats.cost && g.cats.step < 50) {
			if (g.cats.step <= 13) {
				g.msec += g.cats.add
				g.cats.add++
				g.cats.boost = 1
			} else if (g.cats.step == 14) {
				g.msec += g.cats.add
				g.cats.add++
				g.cats.boost = 200
			} else if (g.cats.step <= 23) {
				g.msec += 200 * g.cats.add
				g.cats.add++
				g.cats.boost = 200
			} else if (g.cats.step == 24) {
				g.msec += 200 * g.cats.add
				g.cats.add++
				g.cats.boost = 5000
			} else if (g.cats.step <= 48) {
				g.msec += 5000 * g.cats.add
				g.cats.add++
				g.cats.boost = 5000
			} else if (g.cats.step == 49) {
				g.msec += 5000 * g.cats.add
				g.cats.add++
				g.cats.boost = 15000
			} else {
				g.msec += 15000 * g.cats.add
				g.cats.add++
				g.cats.boost = 15000
			}
			g.cats.step += 1
			g.money -= g.cats.cost
			g.cats.cost = g.cats.cost * 2
		}
	}
	function up3() {
		if (g.money >= g.wizards.cost && g.wizards.step < 50) {
			if (g.wizards.step <= 13) {
				g.msec += g.wizards.add
				g.wizards.add++
				g.wizards.boost = 1
			} else if (g.wizards.step == 14) {
				g.msec += g.wizards.add
				g.wizards.add++
				g.wizards.boost = 200
			} else if (g.wizards.step <= 23) {
				g.msec += 200 * g.wizards.add
				g.wizards.add++
				g.wizards.boost = 200
			} else if (g.wizards.step == 24) {
				g.msec += 200 * g.wizards.add
				g.wizards.add++
				g.wizards.boost = 5000
			} else if (g.wizards.step <= 48) {
				g.msec += 5000 * g.wizards.add
				g.wizards.add++
				g.wizards.boost = 5000
			} else if (g.wizards.step == 49) {
				g.msec += 5000 * g.wizards.add
				g.wizards.add++
				g.wizards.boost = 15000
			} else {
				g.msec += 15000 * g.wizards.add
				g.wizards.add++
				g.wizards.boost = 15000
			}
			g.wizards.step += 1
			g.money -= g.wizards.cost
			g.wizards.cost = g.wizards.cost * 3
		}
	}
	function saveGame() {
		// console.log('SaveGame', g)
		$_game = g
	}
	function loadGame() {
		g = $_game
		ready = true
		startGame()
	}
	function timerFunc() {
		// console.log('TF')
		let t2 = g.money + g.msec
		g.money = t2
	}
	function startGame() {
		run = true
		gameTimer = setInterval(timerFunc, 1000)
		onHtml("Game Started!")
	}
	function stopGame() {
		run = false
		clearInterval(gameTimer)
		onHtml("Game Stopped!")
	}
	const clicked = () => {
		let t3 = g.money + g.moneyup
		g.money = t3
		// addToast({message:`Money raise: ${g.money} Coins`, timeout: 1000})
	}

	let group1 = 0
	let group2 = 0
	let group3 = 0
	let group4 = 0
	
	const reset1 = () => {
		group3 = 0
		group4 = 0
	}
	const resetAll = () => {
		group1 = 0
		group2 = 0
		group3 = 0
		group4 = 0
	}
	$: reset1(group2)

	const blankClick = () => {
		// console.log('Blank!!!')
		group3 = 0
	}
	function f1() {
		g = resetValues
		resetAll()
		onHtml('Game was reset!')
	}
	function f2() {
		console.log('Function 2')
		group3 = 2
	}
	function f3() {
		console.log('Function 3')
		group3 = 3
	}
	const main_nav = [
		{
			titel: 'Game',
			id_s: 0,
			id_a: 0,
			nav: []
		},
		{
			titel: 'Statistic',
			id_s: 1,
			id_a: 1,
			nav: []
		},
		{
			titel: 'Upgrades',
			id_s: 2,
			id_a: 2,
			nav: [
				{
					titel: 'Upgrades',
					id_s: 0,
					id_a: 0,
					text: true,
					func: resetAll
				},
				{
					titel: 'Base',
					id_s: 1,
					id_a: 1,
					func: up1
				},
				{
					titel: 'Cats',
					id_s: 2,
					id_a: 2,
					func: up2
				},
				{
					titel: 'Wizards',
					id_s: 3,
					id_a: 3,
					func: up3
				}
			]
		},
		{
			titel: 'Settings',
			id_s: 3,
			id_a: 3,
			nav: [
				{
					titel: 'Settings',
					id_s: 0,
					id_a: 0,
					text: true,
					func: resetAll
				},
				{
					titel: 'Reset',
					id_s: 1,
					id_a: 1,
					func:f1
				},
				{
					titel: 'Volume',
					id_s: 2,
					id_a: 2,
					func: f2
				},
				{
					titel: 'AutoSave',
					id_s: 3,
					id_a: 3,
					func: f3
				}
			]
		}
	]
	onMount(() => loadGame())
	onDestroy(() => stopGame())
	const openUpgrade = () => {
		group1 = 2
		group2 = 2
	}

	

	
	$: upstat1 = g.money >= g.base.cost
	$: upstat2 = g.money >= g.cats.cost
	$: upstat3 = g.money >= g.wizards.cost

	$: if (upstat1) onUpgradeMsg(labels[0])
	$: if (upstat2) onUpgradeMsg(labels[1])
	$: if (upstat3) onUpgradeMsg(labels[2])
</script>

<nav class="navbar navbar-expand navbar-dark sticky-top bg-dark">
	<div class="container-fluid">
		<span class="navbar-brand fw-semibold">Nwp-{main_nav[group1].titel}</span>
		<div class="collapse navbar-collapse" id="navbarCollapse">
			<form class="d-flex ms-auto" role="search">
				<input
					class="form-control-plaintext me-2 text-end"
					type="text"
					value="{addcomma(g.money)} $" />
			</form>
		</div>
	</div>
</nav>

<main class="d-flex flex-column gb main">
	<section class="d-flex flex-column flex-grow-1 gap-2 px-2 py-2">
		<Framed bind:element={el1} grow>
			{#key group2}
				<Transit>
					<div>Skills: {addcomma(g.moneyup)}/click</div>
					<div>Helper: {addcomma(g.msec)}/s</div>
					<div class="text-truncate">Coins: {addcomma(g.money)}</div>
					<hr class="my-1" />
				</Transit>
			{/key}
			{#if group2 == 1}
				<Transit bottom>
					<h5>Level</h5>
					<hr />
					<LevelBar bind:g {labels} {addcomma} />
				</Transit>
			{:else if group2 == 2}
				<Transit bottom>
					<UpgradePanel bind:g {addcomma} {labels} {tab_labels} />
				</Transit>
			{:else}
				<Transit bottom>
					<SpaceBar on:click={clicked}>Spacebar</SpaceBar>
				</Transit>
			{/if}
		</Framed>
		<footer>
			<Wrapper>
				<Menu>
					{#each main_nav as { titel, id_a, id_s, func, text }}
						<MenuItem
							active={group1 == id_s}
							text={text ? text : false}
							on:click={() => {
								group1 = id_s
								group2 = id_a
								func ? func : ''
							}}>{titel}</MenuItem>
					{/each}
				</Menu>
				{#key group2}
					{#if group2 == 0}
						<Framed>
							<FramedMsg class="p-2">
								<h5>{run ? 'Game is running!' : 'Game is paused!'}</h5>
								{#if run}
									<button
										on:click={stopGame}
										type="button"
										class="btn btn-md btn-secondary">Stop Game</button>
								{:else}
									<button
										on:click={startGame}
										type="button"
										class="btn btn-md btn-dark">Start Game</button>
								{/if}
							</FramedMsg>
						</Framed>
					{:else if group2 == 1}
						<Framed>
							<FramedMsg class="p-2">
								<h5>Game Stats!</h5>
								<button type="button" class="btn btn-sm btn-dark">Open</button>
							</FramedMsg>
						</Framed>
					{:else if group2 == 2}
						<Menu>
							<MenuItem on:click={resetAll} text>Upgrades</MenuItem>
							<MenuItem on:click={up1} enable={upstat1}>{labels[0]}</MenuItem>
							<MenuItem on:click={up2} enable={upstat2}>{labels[1]}</MenuItem>
							<MenuItem on:click={up3} enable={upstat3}>{labels[2]}</MenuItem>
						</Menu>
					{:else}
						<Menu>
							{#each main_nav[group2].nav as { titel, id_a, id_s, text, hidden, func }, i}
								<MenuItem
									{text}
									{hidden}
									active={group3 == id_s}
									on:click={func ? func : blankClick}>{titel}</MenuItem>
							{/each}
						</Menu>
					{/if}
				{/key}
			</Wrapper>
		</footer>
	</section>
</main>

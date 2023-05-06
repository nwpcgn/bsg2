<script>
	import MsgBar from './_msg/MsgBar.svelte'
	import SplitLayout from './_layouts/SplitLayout.svelte'
	import Dialog from './_msg/Dialog.svelte'
	const playerAttacks=[["Shield Bash",2,3,"🛡️ You are trying to bash the opponent away with your shield ...","💫 The enemy dodges your attack ..."],["Mace Attack",6,6,"🔨 You are trying hit the enemy with a huge mace ...","💫 The enemy dodges your attack ..."],["Magic Attack",1,4,"🌀 You are trying to cast a spell on your opponent ...","💫 The enemy dodges your attack ..."]];
	export let name = 'Seite'
	export let callback = null
	let elem
	function dropComponent(obj = null) {
		const d = new Dialog({
			target: elem,
			props: { component: MsgBar, delay: 0, data: obj }
		})
		d.$on('close', () => d.$destroy())
	}

	function addMsg(e) {
		const types = ['secondary', 'primary', 'danger']
		let i = parseInt(e.currentTarget.dataset.id)
		let obj = {
			titel: 'Player Atacke',
			type: types[i],
			nr: i,
			obj: playerAttacks[i]
		}
		dropComponent(obj)
	}
</script>

<SplitLayout bind:callback>
	<span class="nav-text" slot="header">
		{name}
	</span>
	<div class="container-fluid">
		<div class="btn-group" role="group">
			<button
				on:click={addMsg}
				data-id={0}
				type="button"
				class="btn btn-secondary">First One</button>
			<button
				on:click={addMsg}
				data-id={1}
				type="button"
				class="btn btn-secondary">Second One</button>
			<button
				on:click={addMsg}
				data-id={2}
				type="button"
				class="btn btn-secondary">Third One</button>
		</div>
	</div>

	<div class="container-fluid">
		<section class="msg-box" bind:this={elem}>
			<!-- Content -->
		</section>
	</div>
</SplitLayout>

<style>
	.msg-box {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem;
	}
</style>

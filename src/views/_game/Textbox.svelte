<script>
	import Textrow from './Textrow.svelte'
	import { dismissLog, logs, log } from './_store'
	export let ms = 3000

	const handle = (obj) => {
		console.log('WWW', obj)
	}

	const onMessageChange = (message, ms) => {
		handle($log)
	}

	$: onMessageChange($log, ms)
</script>

{#if $logs}
	<section>
		<nav>
			{#each $logs as el (el.id)}
				<Textrow
					type={el.type}
					dismissible={el.dismissible}
					on:dismiss={() => dismissLog(el.id)}>{el.message}</Textrow>
			{/each}
		</nav>
	</section>
{/if}

<style>
   nav {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      overflow-x: hidden;
   }
</style>
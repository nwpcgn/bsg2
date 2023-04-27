<script>
	import { fly } from 'svelte/transition'
	export let framed = true
	export let compact = true
</script>

<nav
	in:fly|local={{ duration: 200, delay: 50, y: 50 }}
	class="gb-menu"
	class:framed
	class:compact>
	<slot />
</nav>

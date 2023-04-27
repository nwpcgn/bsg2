<script>
	import {fly} from 'svelte/transition'
</script>

<div in:fly={{duration: 400, x: 40}} class="msg">
	<div {...$$restProps}>
		<slot />
	</div>
</div>

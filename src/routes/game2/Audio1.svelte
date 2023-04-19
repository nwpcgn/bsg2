<script>
	let audio
   let volume = 0.5

	function startTimer() {
		setTimeout(() => {
			audio.play()
		},20)	
	}

</script>

<button class="btn btn-primary" on:click={startTimer}>
	start 20ms timer
</button>

<audio src="./audio/tick_001.ogg" bind:volume={volume} bind:this={audio}></audio>


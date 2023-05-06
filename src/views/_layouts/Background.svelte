<script>
	export let animate = false
</script>

<section class="bg-wrapper">
	{#if !animate}
		<div class="static" />
	{/if}
	<div class="sky" class:animate />
	<div class="clouds_1" class:animate />
	<div class="rocks_2" class:animate />
	<div class="clouds_2" class:animate />
	<div class="rocks_1" class:animate />
	<div class="clouds_3" class:animate />
	<div class="clouds_4" class:animate />
</section>

<style lang="scss">
	.bg-wrapper {
		flex: 1;
		position: relative;
		z-index: -1;
		overflow: hidden;
	}
	.static {
		--iw: 3600px;
		--ih: 675px;
		--bg: url('./img/bbg1_1.png');
		position: absolute;
		inanimate: 0;
		height: var(--ih);
		width: var(--iw);
		background: var(--bg) repeat-x left top;
		background-size: auto 100%;
	}

	.animate {
		--bg: url('./img/bbg1_1.png');
		--iho: 675px;
		--iwo: 1200px;
		--iw: 3600px;
		--ih: 100%;
		--r1: 70s;
		--r2: 80s;
		--c3: 35s;
		--c4: 30s;
		--c5: 40s;
		--c4: 55s;
		position: absolute;
		inset: 0;
		background-repeat: repeat-x;
		// background-image: var(--bg);
		height: var(--iho);
		min-width: var(--iw);
		&.clouds_1 {
			background-image: url('./img/layers/bbg1_clouds_1.png');
			animation: slide 30s linear infinite;
		}
		&.clouds_2 {
			background-image: url('./img/layers/bbg1_clouds_2.png');
			animation: slide 45s linear infinite;
			animation-delay: 2s;
		}
		&.clouds_3 {
			background-image: url('./img/layers/bbg1_clouds_3.png');
			animation: slide 25s linear infinite;
		}
		&.clouds_4 {
			background-image: url('./img/layers/bbg1_clouds_4.png');
			animation: slide 32s linear infinite;
		}
		&.rocks_1 {
			background-image: url('./img/layers/bbg1_rocks_1.png');
			transform: translate3d(0, 40px, 0);
			animation: slide_d 50s linear infinite;
			animation-delay: 4s;
		}
		&.rocks_2 {
			background-image: url('./img/layers/bbg1_rocks_1.png');
			animation: slide 56s linear infinite;
		}
		&.sky {
			background-image: url('./img/layers/bbg1_sky.png');
		}
	}

	@keyframes slide {
		0% {
			transform: translate3d(0, 0, 0);
		}
		100% {
			transform: translate3d(-1200px, 0, 0); /* The image width */
		}
	}
	@keyframes slide_d {
		0% {
			transform: translate3d(0, 40px, 0);
		}
		100% {
			transform: translate3d(-1200px, 40px, 0); /* The image width */
		}
	}
</style>

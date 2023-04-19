<script>
  import HeroPre1 from "./HeroPre1.svelte";
  import Bg1 from "./Bg1.svelte";
  import { Canvas } from "svelte-canvas";
  export let step = 5;
  $: width = 0;
  $: height = 0;
  
</script>

<figure>
  <section bind:clientWidth={width} bind:clientHeight={height}>
    <Canvas {width} {height}>
      <Bg1 bind:step />
    </Canvas>
  </section>
  <HeroPre1 bind:step />
  <slot><!-- optional fallback --></slot>
</figure>

<style>
  figure {
    position: relative;
    margin-bottom: 0;
    aspect-ratio: 16/9;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    /* border: 4px dashed var(--bs-gray-400); */
  }
  section {
    position: absolute;
    overflow: hidden;
    width: 100%;
    z-index: 11;
    aspect-ratio: 16 / 9;
  }
</style>

<script>
  import Bg2 from "./Bg2.svelte";
  import { Canvas } from "svelte-canvas";
  import { _game, _battle } from "../utils";
  const bgs = [
    [
      "./img/s2/1/1.jpg",
      "./img/s2/1/2.jpg",
      "./img/s2/1/3.jpg",
      "./img/s2/1/4.jpg",
      "./img/s2/1/5.jpg",
      "./img/s2/1/6.jpg",
      "./img/s2/1/7.jpg",
      "./img/s2/1/8.jpg",
      "./img/s2/1/9.jpg",
    ],
    [
      "./img/s2/2/1.jpg",
      "./img/s2/2/2.jpg",
      "./img/s2/2/3.jpg",
      "./img/s2/2/4.jpg",
      "./img/s2/2/5.jpg",
      "./img/s2/2/6.jpg",
      "./img/s2/2/7.jpg",
      "./img/s2/2/8.jpg",
      "./img/s2/2/9.jpg",
    ],
    [
      "./img/s2/3/1.jpg",
      "./img/s2/3/2.jpg",
      "./img/s2/3/3.jpg",
      "./img/s2/3/4.jpg",
      "./img/s2/3/5.jpg",
      "./img/s2/3/6.jpg",
      "./img/s2/3/7.jpg",
      "./img/s2/3/8.jpg",
      "./img/s2/3/9.jpg",
    ],
    [
      "./img/s2/4/1.jpg",
      "./img/s2/4/2.jpg",
      "./img/s2/4/3.jpg",
      "./img/s2/4/4.jpg",
      "./img/s2/4/5.jpg",
      "./img/s2/4/6.jpg",
      "./img/s2/4/7.jpg",
      "./img/s2/4/8.jpg",
      "./img/s2/4/9.jpg",
    ],
    [
      "./img/s2/5/1.jpg",
      "./img/s2/5/2.jpg",
      "./img/s2/5/3.jpg",
      "./img/s2/5/4.jpg",
      "./img/s2/5/5.jpg",
      "./img/s2/5/6.jpg",
      "./img/s2/5/7.jpg",
      "./img/s2/5/8.jpg",
      "./img/s2/5/9.jpg",
    ],
    [
      "./img/s2/6/1.jpg",
      "./img/s2/6/2.jpg",
      "./img/s2/6/3.jpg",
      "./img/s2/6/4.jpg",
      "./img/s2/6/5.jpg",
      "./img/s2/6/6.jpg",
      "./img/s2/6/7.jpg",
      "./img/s2/6/8.jpg",
      "./img/s2/6/9.jpg",
    ],
  ];
  export let left = false;
  export let step = 5;
  let max = bgs.length;
  let count = 0;
  $: width = 0;
  $: height = 0;
  const updateCount = () => {
    if (count + 1 >= max) {
      count = 0;
    } else {
      count++;
    }
  };
  // let {
  // points,
  // lost,
  // won,
  // step,
  // set,
  // name} = $_battle;
</script>

<section
  class="nes-pointer {left ? 'left' : 'right'}"
  bind:clientWidth={width}
  bind:clientHeight={height}
  on:click={updateCount}
>
  <Canvas {width} {height}>
    <Bg2 set={count} {step} {bgs} />
  </Canvas>
</section>
<header>
  <span class="nes-text is-error">{count}</span>
</header>


<style>
  header {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    display: flex;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    border-radius: 1rem;
  }
  section {
    position: absolute;
    overflow: hidden;
    width: 100%;
    z-index: 11;
    aspect-ratio: 16 / 9;
    top: 0;
    max-width: 33%;
    z-index: 16;
    border: 1px solid var(--bs-border-color);
  }
  section.right {
    right: 0;
  }
  section.left {
    left: 0;
  }
</style>

<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let active = false;
  const clicked = (e) => {
    dispatch("click", "spacebar click");
  };
  const onKeyDown = (e) => {
    if (e.keyCode == 32) {
      active = true;
      clicked();
    }
  };
  const onKeyUp = (e) => {
    if (e.keyCode == 32) {
      active = false;
    }
  };
</script>

<svelte:window on:keyup={onKeyUp} on:keydown={onKeyDown} />

<div class="spacer-bar">
  <div class="container-lg">
    <button class:active on:click={clicked}>Click me!</button>
  </div>
</div>

<style>
  .spacer-bar {
    --bw: 5px;
    --bwl: 20px;
    flex: 1;
    width: 100%;
    padding: var(--space-py) 0;
    display: flex;
    align-items: center;
  }

  .spacer-bar button {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    padding: 2rem;
    border-radius: 0.75rem;
    background-image: linear-gradient(90deg, #3498db, #2980b9);
    color: #ffffff;
    border-color: #2573a7;
    border-top-width: 4px;
    border-left-width: 4px;
    border-right-width: 4px;
    border-bottom-width: 20px;
    letter-spacing: 0.08em;
    /* transition: transform 80ms ease-in; */
  }
  .spacer-bar button.active,
  .spacer-bar button:active {
    letter-spacing: 0.05em;
    transform: scaleX(90%) scaleY(90%);
    transition: transform 40ms ease-in;
  }
</style>

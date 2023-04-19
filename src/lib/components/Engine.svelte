<script>
  import { onMount } from "svelte";
  import { _game, _count, onInterval, resetValues } from "../utils";

  const myTimer = () => {
    $_game.money += $_game.msec;
  };
  const resetGame = () => {
    _game.set(resetValues);
  };

  onInterval(myTimer, 1000);
  
  let ready = false;
  onMount(() => {
    ready = true;
  });
</script>

{#if ready}
  <slot {resetGame} />
{/if}

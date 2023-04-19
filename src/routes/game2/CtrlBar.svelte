<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let started = false;
  export let timeLeft = 30;
  export let score = 0;
  const handleStart = () => {
    dispatch("clickStart", "startGame");
  };
  const handleStop = () => {
    dispatch("clickStop", "stopGame");
  };
</script>

<div class="container mb-3">
  <div>
    <div class="card">
      <h5 class="card-header">Score: {score}</h5>
      <div class="card-body">
        <h5 class="card-title">Match Time: {timeLeft}</h5>
        <p class="card-text">
          <a class="btn btn-primary" href="#/" role="button">Game</a>

          {#if started}
            <button on:click={handleStop} type="button" class="btn btn-danger"
              >Stop Game</button
            >
          {:else}
            <button on:click={handleStart} type="button" class="btn btn-primary"
              >Start Game</button
            >
          {/if}
          <slot><!-- optional fallback --></slot>
        </p>
      </div>
    </div>
  </div>
</div>


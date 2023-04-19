<script>
  import AikoRun from "./AikoRun.svelte";

  let run;
  const toggle = () => {
    run = !run;
  };
</script>

<section class="page flex">
  <div class="container aligner">
    <article class="game-monitor rounded">
      {#if run}
        <AikoRun bind:run />
      {/if}
    </article>
  </div>

  <div class="container py-4">
    <div>
      <div class="card">
        <h5 class="card-header">Featured</h5>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            <button on:click={toggle} type="button" class="btn btn-primary"
              >Run</button
            >
            <a class="btn btn-primary" href="#/g2" role="button">Game 2</a>
            <a class="btn btn-primary" href="#/g3" role="button">Game 3</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .game-monitor {
    width: 100%;
    aspect-ratio: 16/9;
    max-width: var(--maxw, 820px);
    margin: auto;
    position: relative;
    overflow: hidden;
    background-image: url("./img/s2/1/8.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
</style>

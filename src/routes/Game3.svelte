<script>
  import Layer from "./game3/Layer.svelte";
  import Audio1 from "./game2/Audio1.svelte";
  import CtrlBar from "./game2/CtrlBar.svelte";
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let matchTime = 15;
  let triggerTime = 800;
  let result = 0;
  let score = 0;
  let currentTime = matchTime;
  let timeLeft = matchTime;
  let hitPosition = null;
  let timerId = null;
  let countDownTimerId = null;
  let audio1;
  let audio2;
  let volume1 = 0.5;
  let started = false;
  let ended = false;

  const startSound = () => {
    setTimeout(() => {
      audio2.play();
    }, 10);
  };
  const stopSound = () => {
    setTimeout(() => {
      audio2.play();
    }, 10);
  };
  const randomSquare = () => {
    let randomSquare = squares[Math.floor(Math.random() * 16)];
    hitPosition = randomSquare;
  };
  const handleMouseDown = (e) => {
    if (e.currentTarget.id == hitPosition) {
      result++;
      score = result;
      hitPosition = null;
    }
  };
  const moveMole = () => {
    timerId = setInterval(randomSquare, triggerTime);
  };
  const countDown = () => {
    currentTime--;
    timeLeft = currentTime;

    if (currentTime == 0) {
      stopGame();
    }
  };

  const stopGame = () => {
    started = false;
    hitPosition = null;
    stopSound();
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    ended = true;
    // alert("GAME Over! Your final score is " + result);
  };
  const resetGame = () => {
    started = false;
    ended = false;
    result = 0;
    score = 0;
    currentTime = matchTime;
    timeLeft = matchTime;
    hitPosition = null;
  };
  const startGame = () => {
    resetGame();
    started = true;
    startSound();
    moveMole();
    countDownTimerId = setInterval(countDown, 1000);
  };
</script>

<section class="grid-page">
  {#key hitPosition}
    {#each squares as el}
      <div
        on:mousedown={handleMouseDown}
        id={el}
        class="item-game"
        class:mole={el == hitPosition}
      />
    {/each}
  {/key}
</section>

{#if !started}
  <Layer z={21}>
    <h2>Game Landing</h2>
    <h4>Whack a Mole Game</h4>
    <div class="d-grid gap-2 py-2">
      <button
        on:click={() => {
          startGame();
        }}
        type="button"
        class="btn btn-primary">Start Game</button
      >
    </div>
  </Layer>
{/if}
{#if ended}
  <Layer z={31}>
    <h2>Game Over</h2>
    <h4>Your final score is {result}</h4>
    <div class="d-grid gap-2 py-2">
      <button
        on:click={() => {
          started = false;
          ended = false;
        }}
        type="button"
        class="btn btn-primary">Restart</button
      >
      <a href="#/" class="btn btn-primary">Exit</a>
    </div>
  </Layer>
{/if}

<audio src="./audio/tick_001.ogg" bind:volume={volume1} bind:this={audio1} />
<audio src="./audio/confirm_001.ogg" bind:volume={volume1} bind:this={audio2} />

<style>
  .grid-page {
    --space: 0.5rem;
    --py: 1.5rem;
    --px: 1.5rem;
    position: absolute;
    inset: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: var(--space);
    padding: calc(var(--py) * 0.5) calc(var(--px) * 0.5);
    max-width: 720px;
    margin-right: auto;
    margin-left: auto;
  }
  .item-game {
    background-color: var(--bs-light);
    border: var(--bs-border-width) solid var(--bs-border-color);
    border-radius: var(--bs-border-radius);
  }
  .mole {
    /* color: var(--bs-light);
    background-color: var(--bs-info);
    border: var(--bs-border-width) solid var(--bs-info);
    background-image: url(./img/mole/1.png); */
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    cursor: pointer;
    /*  animation: 0.35s cubic-bezier(0.25, 1, 0.3, 1) circle-in-bottom-right both; */
  }
  .mole:nth-child(1),
  .mole:nth-child(5),
  .mole:nth-child(9),
  .mole:nth-child(13) {
    animation: 0.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-up both;
    background-image: url(./img/mole/1.png);
  }
  .mole:nth-child(2),
  .mole:nth-child(6),
  .mole:nth-child(11),
  .mole:nth-child(14) {
    background-image: url(./img/mole/2.png);
    animation: 0.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both;
  }
  .mole:nth-child(3),
  .mole:nth-child(7),
  .mole:nth-child(10),
  .mole:nth-child(15) {
    background-image: url(./img/mole/3.png);
    animation: 0.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-top-right both;
  }
  .mole:nth-child(4),
  .mole:nth-child(8),
  .mole:nth-child(12),
  .mole:nth-child(16) {
    background-image: url(./img/mole/4.png);
    animation: 0.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-bottom-left both;
  }
  @keyframes circle-in-bottom-right {
    from {
      clip-path: circle(0%);
    }
    to {
      clip-path: circle(150% at bottom right);
    }
  }
  @keyframes wipe-in-up {
    from {
      clip-path: inset(100% 0 0 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }
  @keyframes wipe-in-left {
    from {
      clip-path: inset(0 0 0 100%);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }

  @keyframes wipe-in-top-right {
    from {
      clip-path: polygon(-50% 50%, 50% 150%, 50% 150%, -50% 50%);
    }
    to {
      clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
    }
  }

  @keyframes wipe-in-bottom-left {
    from {
      clip-path: polygon(50% -50%, 150% 50%, 150% 50%, 50% -50%);
    }
    to {
      clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
    }
  }
</style>

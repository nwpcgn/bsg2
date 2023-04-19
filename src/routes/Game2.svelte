<script>
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

  function startSound() {
    setTimeout(() => {
      audio2.play();
    }, 10);
  }
  function stopSound() {
    setTimeout(() => {
      audio2.play();
    }, 10);
  }
  const randomSquare = () => {
    let randomSquare = squares[Math.floor(Math.random() * 16)];
    hitPosition = randomSquare;
    // startSound();
  };

  const handleMouseDown = (e) => {
    if (e.currentTarget.id == hitPosition) {
      result++;
      score = result;
      hitPosition = null;
    }
  };
  function moveMole() {
    timerId = setInterval(randomSquare, triggerTime);
  }
  const countDown = () => {
    currentTime--;
    timeLeft = currentTime;

    if (currentTime == 0) {
      stopSound();
      stopGame();
    }
  };

  const stopGame = () => {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    started = false;
    alert("GAME Over! Your final score is " + result);
    hitPosition = null;
  };

  const startGame = () => {
    startSound();
    result = 0;
    score = 0;
    currentTime = matchTime;
    timeLeft = matchTime;
    hitPosition = null;
    started = true;
    moveMole();
    countDownTimerId = setInterval(countDown, 1000);
  };
</script>

<section class="page flex">
  <div class="grid-game container">
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
    
  </div>

  <CtrlBar
    bind:score
    bind:timeLeft
    bind:started
    on:clickStop={stopGame}
    on:clickStart={startGame}
  >
    <Audio1 />
  </CtrlBar>
</section>

<audio src="./audio/tick_001.ogg" bind:volume={volume1} bind:this={audio1} />
<audio src="./audio/confirm_001.ogg" bind:volume={volume1} bind:this={audio2} />

<style>
  .grid-game {
    --space: 0.5rem;
    --py: 1.5rem;
    --px: 1.5rem;
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: var(--space);
    padding: calc(var(--py) * 0.5) calc(var(--px) * 0.5);
    position: relative;
  }
  .item-game {
    background-color: var(--bs-light);
    border: var(--bs-border-width) solid var(--bs-border-color);
    border-radius: var(--bs-border-radius);
  }
  .mole {
    color: var(--bs-light);
    background-color: var(--bs-info);
    border: var(--bs-border-width) solid var(--bs-info);
    cursor: pointer;
    animation: 0.75s cubic-bezier(0.25, 1, 0.3, 1) circle-in-bottom-right both;
  }

  @keyframes circle-in-bottom-right {
    from {
      clip-path: circle(0%);
    }
    to {
      clip-path: circle(150% at bottom right);
    }
  }
</style>

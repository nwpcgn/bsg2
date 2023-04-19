<script>
  import { _game } from "../utils";
  let active = false;
  export let y = 4;
  export let x = 4;
  $: ({
    money,
    moneyup,
    msec,
    upcost,
    catcost,
    workercost,
    upown,
    catown,
    workerown,
    catadd,
    workadd,
    cboost,
    wboost,
    catmax,
    workmax,
  } = $_game);

  const updateStore = () => {
    _game.set({
      money,
      moneyup,
      msec,
      upcost,
      catcost,
      workercost,
      upown,
      catown,
      workerown,
      catadd,
      workadd,
      cboost,
      wboost,
      catmax,
      workmax,
    });
  };
  const clicked = () => {
    money += moneyup;
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
  
  $: updateStore(money);
</script>

<div class="px-{x} py-{y} w-100">
  <button class:active on:click={clicked}>
    <span> Spacebar </span>
  </button>
</div>

<svelte:window on:keyup={onKeyUp} on:keydown={onKeyDown} />

<style>
  button {
    transition: transform 80ms ease-in;
    background: rgb(239, 242, 221);
    background: linear-gradient(
      180deg,
      rgba(239, 242, 221, 1) 0%,
      rgba(177, 180, 149, 1) 100%
    );
    display: block;
    width: 100%;
    padding: 1.25rem;
    border-radius: 1rem;
    border-color: var(--bs-gray-600);
    color: var(--bs-gray-700);
    border-width: 4px 4px 20px 4px;
    font-size: 1.5rem;
    font-family: var(--bs-font-sans-serif);
    letter-spacing: 0.08em;
  }
  button:active,
  button.active {
    letter-spacing: 0.05em;
    transform: scaleX(90%) scaleY(90%);
    transition: transform 40ms ease-in;
  }
</style>

<script>
  import { fade } from "svelte/transition";
  export let open = true;
  const toggle = () => {
    open = !open;
  };
</script>

{#if open}
  <article transition:fade={{ duration: 350 }}>
    <div class="text-center">
      <h1>Spacebar</h1>
      <p>
        <button on:click={toggle} type="button" class="nes-btn is-primary"
          >Start Game</button
        >
      </p>
    </div>
  </article>
{:else}
  <aside>
    <button on:click={toggle} type="button" class="nes-btn is-primary"
      >Pause</button
    >
  </aside>
{/if}

<style>
  article {
    position: absolute;
    z-index: 100;
    inset: 0;
    background-color: rgba(24, 24, 24, 0.8);
    color: var(--bs-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  aside {
    position: absolute;
    z-index: 100;
    bottom: 0;
    left: 0;
    padding: 0.2rem;
  }
</style>

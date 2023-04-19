<script>
  import Layer from "./Layer.svelte";
  import { dismissLayer, layers } from "./_layer";
</script>

{#if $layers}
  <section>
    {#each $layers as layer (layer.id)}
      <Layer
        type={layer.type}
        dismissible={layer.dismissible}
        on:dismiss={() => dismissLayer(layer.id)}>{layer.message}</Layer
      >
    {/each}
  </section>
{/if}

<style>
  section {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    flex-direction: column;
    z-index: 1000;
  }
</style>

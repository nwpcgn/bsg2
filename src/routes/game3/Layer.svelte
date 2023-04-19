<script>
  export let body = false;
  export let z = 21;
</script>

<section style="--z: {z};">
  <div>
    <div class:container={body}>
      <slot><!-- optional fallback --></slot>
    </div>
  </div>
</section>

<style>
  section {
    z-index: 1;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: var(--app-color);
    background-color: var(--app-bg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    overflow-x: hidden;
    transition: transform 250ms ease-in-out;
    overscroll-behavior-y: contain;
  }
  section {
    display: flex;
    flex-direction: column;
  }
  section {
    z-index: var(--z, 20);
  }
  section > div {
    transform: translateZ(0);
    flex: 1;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>

<script>
  import Router from "svelte-spa-router";
  import Game1 from "./routes/Game1.svelte";
  import Game2 from "./routes/Game2.svelte";
  import Game3 from "./routes/Game3.svelte";
  const routes = {
    '/g3': Game3,
    '/g2': Game2,
    '*': Game1
  }
</script>

<main class="main">
  <Router {routes} />
</main>

<script>
  const logo = `<svg width="42px" height="20px" version="1.1" viewBox="0 0 45 24" xmlns="http://www.w3.org/2000/svg"><g id="iconsnes-jp-logo" transform="matrix(1 0 0 1.01 -.078084 -.017544)" stroke-width=".99013"><g fill-rule="evenodd"><path id="Combined-Shape" d="m6 6v-3h33v3h3v3h3v9h-3v3h-3v3h-33v-3h-3v-3h-3v-9h3v-3z" fill="#d7d7d7"/><path d="m21 3v-3h3v3h15v3h-33v-3zm-18 6v-3h3v3zm0 9h-3v-9h3zm3 3h-3v-3h3zm33 0v3h-33v-3zm3-3v3h-3v-3zm0-9v-3h-3v3zm0 0v9h3v-9z" fill="#333"/><path d="m9 9h3v3h3v3h-3v3h-3v-3h-3v-3h3zm9 6h3v3h-3zm6 0h3v3h-3z" fill="#333"/></g><path id="Rectangle" d="m30 12h3v3h-3z" fill="#7fba7b"/><path d="m33 9h3v3h-3z" fill="#9a9ef4"/><path d="m36 12h3v3h-3z" fill="#f1101a"/><path d="m33 15h3v3h-3z" fill="#f6f336"/></g></svg>`;
  const icon = `<svg width="48px" height="33px" version="1.1" viewBox="0 0 48 33" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><title>nes-logo</title><g fill-rule="evenodd"><path d="m0 0h48v33h-48v-33z" fill="none"/><g id="iconnes-logo"><path id="Combined-Shape" d="m18 6v-6h3v6h-3zm6 3v-3h-3v3h-21v21h45v-21h-21z" fill="#3E3634"/><path d="m12 15h-3v3h-3v3h3v3h3v-3h3v-3h-3v-3z" fill="#C3C3C3"/><path d="m27 15h-9v3h9v-3zm0 6h-9v3h9v-3z" fill="#787973"/><path d="m33 21h-3v3h3v-3zm6 0h-3v3h3v-3z" fill="#BD1A1B"/><path d="m0 12v-3h45v21h-45v-18zm3 0v15h39v-15h-39z" fill="#C3C3C3"/></g></g></svg>`;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<header class="nes-appbar">
  <nav class="bar flex ps-3">
    <div class="nav-brand">
      <a href="#/" class="flex">
        {@html logo}
        <span class="px-2 fs-4 fw-bold">NES.css</span>
      </a>
      <small class="ps-1">NES-style CSS Framework.</small>
    </div>

    <a href="#/game" class="nav-btn">
      {@html icon}
    </a>
  </nav>
</header>

import { writable } from "svelte/store";

export const layers = writable([]);

export const addLayer = (layer) => {
  // Create a unique ID so we can easily find/remove it
  // if it is dismissible/has a timeout.
  const id = Math.floor(Math.random() * 10000);

  // Setup some sensible defaults for a layer.
  const defaults = {
    id,
    type: "info",
    dismissible: true,
    timeout: 0,
  };

  // Push the layer to the top of the list of layers
  layers.update((all) => [{ ...defaults, ...layer }, ...all]);

  // If layer is dismissible, dismiss it after "timeout" amount of time.
  if (layer.timeout) setTimeout(() => dismissLayer(id), layer.timeout);
};

export const dismissLayer = (id) => {
  layers.update((all) => all.filter((t) => t.id !== id));
};

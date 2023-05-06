import { wrap } from "svelte-spa-router/wrap";
import Start from "./Start.svelte";
import Battle from "./Battle.svelte";
import Playground from "./Playground.svelte";
import Dialog from './Dialog.svelte';
import NotFound from "./NotFound.svelte";
import { push } from "svelte-spa-router";
export default {
  "/": wrap({
    component: Start,
    props: {
      name: "Startseite",
      callback: () => push("/dialog"),
    },
  }),
  "/battle": wrap({
    component: Battle,
    props: {
      name: "Battlesystem",
      callback: () => push("/"),
    },
  }),
  "/dialog": wrap({
    component: Dialog,
    props: {
      name: "Dialogs",
      callback: () => push("/play"),
    },
  }),
  "/play": wrap({
    component: Playground,
    props: {
      name: "Playground",
      callback: () => push("/battle"),
    },
  }),
  "*": NotFound,
};

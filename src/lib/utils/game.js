import { onDestroy } from "svelte";
import { storage } from "./storage";
// import { writable } from "svelte/store";

export const _settings = storage("nwp_settings", {
  auto_delay: 5000,
  auto_save: false,
  name: "Savage Submarine Legend",
  user_name: "",
  volume: 0.2
});

export const resetValues = {
  money: 0,
  moneyup: 1,
  msec: 0,
  base: {
    cost: 15,
    step: 0,
    boost: 1
  },
  cats: {
    cost: 25,
    step: 0,
    boost: 1,
    add: 1,
    max: 0
  },
  wizards: {
    cost: 250,
    step: 0,
    boost: 1,
    add: 15,
    max: 0
  }
};

export const _game = storage("nwp_game", resetValues);

// export const _battle = storage("nwp-battle", {
//   points: 0,
//   lost: 0,
//   won: 0,
//   step: 0,
//   set: 0,
//   name: "player",
// });


export const onInterval = (callback, milliseconds) => {
  const interval = setInterval(callback, milliseconds);

  onDestroy(() => {
    clearInterval(interval);
  });
};

export const sleep = (milliseconds = 1000) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));




export const addcomma = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const ITEMS = [
  {
    name: "Monkey",
    description:
      "A monkey to help you press space. It doesn't really know what a <i>spacebar</i> is, so it will just bash the whole keyboard and eventually hit it. It succeeds every <b>%v seconds</b>.",
    cost: 30,
    initial_value: 0.2,
    lvl: 0,
    cost_func: (x) => 1.1 * x,
    value_func: (x) => x,
    getDescription: (it) =>
      it.description.replace("%v", 1.0 / it.initial_value),
  },
  {
    name: "Boomer Mom",
    description:
      "A boomer mom who can't barely open a Word document to help you press it. Every mom can press it <b>%vx a second</b>!",
    cost: 120,
    initial_value: 3,
    lvl: 0,
    cost_func: (x) => 1.3 * x,
    value_func: (x) => 1.0 * x,
    getDescription: (it) => it.description.replace("%v", nfmt(it.value)),
  },
  {
    name: "Gen Z Kid",
    description:
      "A Generation Z kid will help you press it. They haven't ever seen a keyboard before, but they're good at scrolling short vertical videos online, so they do it <b>%vx a second</b>!",
    cost: 500,
    initial_value: 20,
    lvl: 0,
    cost_func: (x) => 1.4 * x,
    value_func: (x) => 1.0 * x,
    getDescription: (it) => it.description.replace("%v", nfmt(it.value)),
  },
  {
    name: "Keyboard Upgrade",
    description: "Every upgrade will <b>DOUBLE</b> your own hits.",
    cost: 6000,
    multiplier: 2,
    lvl: 0,
    cost_func: (x) => 3.5 * x,
    getDescription: (it) => it.description,
  },
  {
    name: "Angry Influencer",
    description:
      "Angry influencer whose computer crashed and they're now bashing their heads against the keyboard. The more influencer you get, the faster they can hit it, because they can't stand competition. The next one will give <b>%vx per second</b>.",
    cost: 10000,
    initial_value: 150,
    lvl: 0,
    cost_func: (x) => 1.5 * x,
    value_func: (x) => 1.2 * x,
    getDescription: (it) => it.description.replace("%v", nfmt(it.value)),
  },
  {
    name: "MOBA Gamer",
    description:
      "MOBA gamers are fast at pressing keys and they play well in teams. New gamer will hit it <b>%vx per second</b>.",
    cost: 200000,
    initial_value: 600,
    lvl: 0,
    cost_func: (x) => 1.4 * x,
    value_func: (x) => 1.25 * x,
    getDescription: (it) => it.description.replace("%v", nfmt(it.value)),
  },
  {
    name: "Homemade Pressing Robot",
    description:
      "Just a simple robot made out of a broken robot vacuum cleaner that can press the key at the impressive rate of <b>%vx per second</b>!",
    cost: 800000,
    initial_value: 3500,
    lvl: 0,
    cost_func: (x) => 1.4 * x,
    value_func: (x) => 1.25 * x,
    getDescription: (it) => it.description.replace("%v", nfmt(it.value)),
  },
  {
    name: "Laser Machine Gun",
    description:
      "A machine gun that shoots a lot of laser blasts at the spacebar, at a rate of <b>%vx per second</b>!",
    cost: 2000000,
    initial_value: 25000,
    lvl: 0,
    cost_func: (x) => 1.4 * x,
    value_func: (x) => 1.3 * x,
    getDescription: (it) => it.description.replace("%v", nfmt(it.value)),
  },
  {
    name: "Nuclear Blast Gun",
    description:
      "No one knows how it works except for the girl that created it. But the rate is pretty high at <b>%vx per second</b>!",
    cost: 10000000,
    initial_value: 100000,
    lvl: 0,
    cost_func: (x) => 1.4 * x,
    value_func: (x) => 1.3 * x,
    getDescription: (it) => it.description.replace("%v", nfmt(it.value)),
  },
  {
    name: "Alien Tech Key Pressing Machine",
    description:
      "No one knows how it works except for the girl that created it. But the rate is pretty high at <b>%vx per second</b>!",
    cost: 80000000,
    initial_value: 1000000,
    lvl: 0,
    cost_func: (x) => 1.4 * x,
    value_func: (x) => 1.3 * x,
    getDescription: (it) => it.description.replace("%v", nfmt(it.value)),
  },
];

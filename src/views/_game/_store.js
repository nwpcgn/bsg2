import { writable } from "svelte/store";
export const logs = writable([]);
export const addLog = (msg) => {
	const id = Math.floor(Math.random() * 10000);
	const defaults = {
		id,
		type: "info",
		dismissible: true,
		timeout: 3000,
	};
	logs.update((all) => [{ ...defaults, ...msg }, ...all]);
	if (msg.timeout) setTimeout(() => dismissLog(id), msg.timeout);
};
export const dismissLog = (id) => {
	logs.update((all) => all.filter((t) => t.id !== id));
};

/* const def_log = {
	msg,
	type: "info",
	dismissible: true,
	timeout: 3000,
};
function createLog() {
	const { subscribe, set, update } = writable({
		content: "leer",
		type: "info",
		dismissible: true,
		timeout: 3000,
	});

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
} */

export const log = writable({
	content: "leer",
	type: "info",
	dismissible: true,
	timeout: 3000,
});

/*
import logs from './logs.svelte';
import {addLog} from './_msg';
let types = ["success", "error", "info"];
let type = "info";
let dismissible = true;
let timeout = 4000;
function addNote() {
addLog({ message: `Notification`, type, dismissible, timeout });
}
*/
import { writable } from 'svelte/store';
export const table_data = writable<Record<string, any>[]>([]);
export const table_data_loading = writable(false);

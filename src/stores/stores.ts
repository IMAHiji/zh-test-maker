import { writable } from 'svelte/store';

export const inputValue = writable('');
export const character = writable(null);
export const generatedPinyin = writable('');

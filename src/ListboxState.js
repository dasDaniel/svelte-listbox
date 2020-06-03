import { writable, get } from 'svelte/store';
import { tick } from 'svelte';

export const isOpen = writable(false);
export const selectedValue = writable(undefined); // use undefined so value can be passed in listbox
export const activeValue = writable(false);
export const items = writable([]);
export const elList = writable(null);

export function toggleOpen() {
	isOpen.set(!get(isOpen));
}

export function close() {
	isOpen.set(false);
}

export function open() {
	isOpen.set(false);
}

export function select(val) {
	selectedValue.set(val);
	close();
}

export async function focus(val) {
	activeValue.set(val);
	if (val !== null) {
		await tick();
		if(get(elList) && get(elList).children[get(items).indexOf(val)]){
			get(elList).children[get(items).indexOf(val)].scrollIntoView({ block: 'nearest' });	
		}
	}
}

export function handleKeydown(e) {
	if(!get(isOpen)) return;
	let values = get(items)
	let focusedIndex = values.indexOf(get(activeValue))
	
	let indexToFocus;
	switch (e.key) {
		case 'Esc':
		case 'Escape':
			e.preventDefault()
			close()
			break
		case 'Tab':
			e.preventDefault()
			break
		case 'Up':
		case 'ArrowUp':
			e.preventDefault()
			indexToFocus = focusedIndex - 1 < 0 ? values.length - 1 : focusedIndex - 1
			focus(values[indexToFocus])
			break
		case 'Home':
			e.preventDefault()
			indexToFocus = 0
			focus(values[indexToFocus])
			break
		case 'End':
			e.preventDefault()
			indexToFocus = values.length - 1
			focus(values[indexToFocus])
			break
		case 'Down':
		case 'ArrowDown':
			e.preventDefault()
			indexToFocus = (focusedIndex + 1) % values.length
			focus(values[indexToFocus])
			break
		case 'Enter':
		case ' ':
		case 'Space':
			e.preventDefault()
			select(get(activeValue))
			break
		default:
			e.preventDefault()
	}
	return
}

let id = 0;
export function generateId() {
	return `listbox-id-${id++}`
}

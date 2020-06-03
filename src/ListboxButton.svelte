<script>
  import { isOpen, items, toggleOpen, generateId } from "./ListboxState.js";
  const id = generateId();
  let isFocused = false;
  $: elProps = { ...$$restProps, props: undefined };
</script>

<button
  {...elProps}
  {id}
  type="button"
  on:click={toggleOpen}
  on:focus={() => (isFocused = true)}
  on:blur={() => (isFocused = false)}
  aria-haspopup="listbox"
  aria-expanded={$isOpen}>
  <slot />
</button>

<script>
  import { isOpen, toggleOpen, generateId, labelId } from "./ListboxState.js";
  const id = generateId();
  let isFocused = false;
  $: labeledBy = ($labelId ? $labelId + " " : "") + id;
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
  aria-labelledby={labeledBy}
  aria-expanded={$isOpen}>
  <slot />
</button>

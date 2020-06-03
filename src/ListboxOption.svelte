<script>
  import { isOpen, selectedValue, activeValue, select, focus, generateId } from './ListboxState.js'
  export let value = null;
  const id = generateId()
  $: elProps = { ...$$restProps, props: undefined }
  $: selected = $selectedValue === value
  $: active = $activeValue === value
</script>

<li {...elProps} on:click={()=>select(value)}
  on:mousemove={()=>focus(value)}
  role='option'
  aria-selected={selected}
  {id}
  ><slot selected={selected} active={active} value={value}></slot>
</li>
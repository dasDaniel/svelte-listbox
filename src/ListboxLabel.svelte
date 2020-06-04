<script>
  import { generateId, labelId } from "./ListboxState.js";
  const id = generateId();
  labelId.set(id);
  $: elProps = { ...$$restProps, props: undefined };
</script>

<span {...elProps} {id}><slot></slot></span>

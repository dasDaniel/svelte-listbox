<script>
  import { elList } from "./ListboxState.js";
  $: elProps = { ...$$restProps, props: undefined };
</script>

<ul {...elProps} bind:this={$elList} tabindex="-1">
  <slot />
</ul>

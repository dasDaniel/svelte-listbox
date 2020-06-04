<script>
  import {
    isOpen,
    items,
    selectedValue,
    activeValue,
    handleKeydown
  } from "./ListboxState.js";
  import ListboxButton from "./ListboxButton.svelte";
  import { onMount } from "svelte";

  export let value; // v-model
  export let options = [];
  $: $items = options;
  $: if ($selectedValue !== undefined) {
    value = $selectedValue;
  }
  $: elProps = { ...$$restProps, props: undefined };

  onMount(() => {
    $selectedValue = value;
  });
</script>

<svelte:window on:keydown={handleKeydown} />
<div {...elProps}>
  <slot
    selectedValue={$selectedValue}
    activeValue={$activeValue}
    isOpen={$isOpen} />
</div>

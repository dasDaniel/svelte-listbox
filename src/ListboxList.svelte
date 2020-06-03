<script>
	import {isOpen, items, toggleOpen, elList} from './ListboxState.js'
	$: elProps = {...$$restProps, props:undefined}
</script>

<ul {...elProps} bind:this={$elList} tabindex="-1"><slot></slot></ul>

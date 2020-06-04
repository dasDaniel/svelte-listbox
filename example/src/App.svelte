<script>
  // import {
  //   Listbox,
  //   ListboxLabel,
  //   ListboxButton,
  //   ListboxList,
  //   ListboxOption
  // } from "svelte-listbox";

  import Listbox from "../../src/Listbox.svelte";
  import ListboxButton from "../../src/ListboxButton.svelte";
  import ListboxLabel from "../../src/ListboxLabel.svelte";
  import ListboxList from "../../src/ListboxList.svelte";
  import ListboxOption from "../../src/ListboxOption.svelte";

  let options = [
    {
      name: "Kelcey Marshfield",
      img: "https://randomuser.me/api/portraits/lego/1.jpg"
    },
    {
      name: "Rozina Royans",
      img: "https://randomuser.me/api/portraits/lego/2.jpg"
    },
    {
      name: "Pavia Pointing",
      img: "https://randomuser.me/api/portraits/lego/3.jpg"
    },
    {
      name: "Bond Ockenden",
      img: "https://randomuser.me/api/portraits/lego/4.jpg"
    },
    {
      name: "Rozella Pletts",
      img: "https://randomuser.me/api/portraits/lego/5.jpg"
    },
    {
      name: "Skipp Tommasi",
      img: "https://randomuser.me/api/portraits/lego/6.jpg"
    },
    {
      name: "Nicolea Seilmann",
      img: "https://randomuser.me/api/portraits/lego/7.jpg"
    },
    {
      name: "Joellen Nassy",
      img: "https://randomuser.me/api/portraits/lego/8.jpg"
    },
    {
      name: "Siffre LeEstut",
      img: "https://randomuser.me/api/portraits/lego/9.jpg"
    }
  ];
  let selection = options[4];
</script>

<style>
  :global(.max-h-14) {
    max-height: 14em;
  }
</style>

<div class="py-48 antialiased font-sans text-gray-900">
  <Listbox
    {options}
    bind:value={selection}
    let:activeValue
    let:isOpen
    class="max-w-xs mx-auto relative">
    <ListboxLabel class="block text-gray-700 text-sm font-bold mb-2">
      Pick a friend
    </ListboxLabel>
    <ListboxButton
      class="w-full text-left rounded px-3 py-2 border-grey-300 inline-flex
      items-center justify-between">

      <span>{selection !== null ? selection.name : ''}</span>
      <svg
        class="h-5 w-5 text-gray-400"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path d="M19 9l-7 7-7-7" />
      </svg>
    </ListboxButton>

    <!-- {#if isOpen} -->
    <ListboxList
      class="absolute focus:outline-none shadow rounded border w-full mt-2 py-1
      max-h-14 overflow-y-auto {isOpen ? '' : 'hidden'}">
      {#each options as option}
        <ListboxOption
          value={option}
          let:active
          let:selected
          class="px-3 py-2 relative {activeValue === option ? 'bg-blue-600 text-white' : 'bg-white'}">
          <span class="items-center flex">
            <img
              alt={option.name}
              class="w-5 h-5 rounded-full mr-2"
              src={option.img} />
            {option.name}
          </span>

          {#if selected}
            <span class="absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                class="h-5 w-5 {active ? 'text-white' : 'text-gray-700'}"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </span>
          {/if}
        </ListboxOption>
      {/each}
    </ListboxList>
    <!-- {/if} -->
  </Listbox>
</div>

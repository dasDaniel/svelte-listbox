<script>
  // import {
  //   Listbox,
  //   ListboxButton,
  //   ListboxList,
  //   ListboxOption
  // } from "../../dist/index.mjs";

  import Listbox from "../../src/Listbox.svelte";
  import ListboxButton from "../../src/ListboxButton.svelte";
  import ListboxList from "../../src/ListboxList.svelte";
  import ListboxOption from "../../src/ListboxOption.svelte";

  let selection = { name: "abc" };

  let values = [
    { name: "abc", img: "https://randomuser.me/api/portraits/lego/1.jpg" },
    { name: "def", img: "https://randomuser.me/api/portraits/lego/2.jpg" },
    { name: "ghi", img: "https://randomuser.me/api/portraits/lego/3.jpg" },
    { name: "jkl", img: "https://randomuser.me/api/portraits/lego/4.jpg" },
    { name: "mno", img: "https://randomuser.me/api/portraits/lego/5.jpg" },
    { name: "pqr", img: "https://randomuser.me/api/portraits/lego/6.jpg" },
    { name: "stu", img: "https://randomuser.me/api/portraits/lego/7.jpg" },
    { name: "vwx", img: "https://randomuser.me/api/portraits/lego/8.jpg" }
  ];
</script>

<style>
  :global(.max-h-14) {
    max-height: 14em;
  }
</style>

<svelte:head>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css"
    rel="stylesheet" />
</svelte:head>

<div class="py-48 antialiased font-sans text-gray-900">
  <Listbox
    {values}
    bind:value={selection}
    let:activeValue
    let:isOpen
    class="max-w-xs mx-auto relative">
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

    {#if isOpen}
      <ListboxList
        class="absolute focus:outline-none shadow rounded border w-full mt-2
        py-1 max-h-14 overflow-y-auto">
        {#each values as item}
          <ListboxOption
            value={item}
            let:active
            let:selected
            class="px-3 py-2 relative {activeValue === item ? 'bg-blue-600 text-white' : 'bg-white'}">
            <span class="items-center flex">
              <img
                alt={item.name}
                class="w-5 h-5 rounded-full mr-2"
                src={item.img} />
              {item.name}
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
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            {/if}
          </ListboxOption>
        {/each}
      </ListboxList>
    {/if}
  </Listbox>
</div>

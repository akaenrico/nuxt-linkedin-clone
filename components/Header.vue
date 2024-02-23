<template>
  <div class="bg-[#FFFFFF] w-screen h-12 drop-shadow-sm">
    <header class="px-5 h-full flex">
      <div id="globalNav" class="mx-auto w-full flex justify-center items-center">
        <a href="" target="_blank">
          <svg class="icon-[devicon--linkedin] mx-2" style="width: 2.3rem; height: 2.3rem;"></svg>
        </a>
        <div id="searchInput" class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="1.3rem" viewBox="0 0 24 24"
            class="absolute ml-3 fill-[#3C3D3E]">
            <path
              d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" />
          </svg>
          <input type="text" placeholder="Search..." class="bg-[#EDF3F8] rounded h-8 ps-10 w-[25rem]">
        </div>
        <ul class="flex">
          <li v-for="item in menuItems" class="px-4">{{ item.name }}</li>
        </ul>
      </div>

    </header>
  </div>
</template>

<script setup>

const menuItems = markRaw([
  {
    name: 'Home',
  },
  {
    name: 'My Network',
  },
  {
    name: 'Jobs',
  },
  {
    name: 'Messaging',
  },
  {
    name: 'Notifications',
  },
  {
    name: 'Me',
  },
  {
    name: 'For Business',
  },
  {
    name: 'Boost your career with Premium',
  },
])

</script>


<template>
    <div class="dark:bg-gray-800 dark:text-gray-200 max-w-[1200px] mx-auto">
      <p class="p-4 pb-2">
          <!-- v-model="$colorMode.preference" -->
        <select
          class="border w-24 h-8 dark:bg-gray-900 dark:text-blue dark:border-gray-700"
        >
          <option value="system">Weather</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </p>

      <div>
        <slot/>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    head: {
      title: "Weather App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "Weather",
          name: "Weather",
          content: "Weather App",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "public/favicon.ico" }],
    },
  };
  </script>
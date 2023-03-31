<template>
    <div class="dark:bg-gray-800 dark:text-gray-200 max-w-[1200px] mx-auto">
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
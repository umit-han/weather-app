<template>
    <div class="">
      <select 
        class="bg-gray dark:bg-dark border border-primary text-textDark dark:text-textLight text-base font-medium radius-lg focus:ring-primary focus:border-primary block w-[120px] p-2"
        v-model="$colorMode.preference"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  </template>

  <script setup>
    const colorMode = useColorMode()
    console.log(colorMode.preference)
  </script>
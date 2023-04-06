<template>
  <div class="">
    <select
      v-model="colorMode.preference"
      class="bg-gray dark:bg-dark border border-primary text-textDark dark:text-textLight text-base font-medium radius-lg focus:ring-primary focus:border-primary block w-[120px] p-2"
      @change="changeThemeHandle"
    >
      <option value="system">Weather</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>

<script setup>
const colorMode = useColorMode();

const store = useWeatherStore();
const { weatherData, regionData } = store;

const changeThemeHandle = () => {
  changeTheme();
};

const changeTheme = () => {
  const weatherText = weatherData.current.condition.text.split(" ");
  if (colorMode.preference === "system") {
    if (
      weatherText.includes("rain") ||
      weatherText.includes("cloudy") ||
      weatherText.includes("drizzle")
    ) {
      colorMode.value = "dark";
    } else {
      colorMode.value = "light";
    }
  }
};

onBeforeMount(() => {
  changeTheme();
});

watchEffect([weatherData, colorMode.preference, regionData], () => {
  changeThemeHandle();
});
</script>

<template>
  <div class="my-6">
    <h1 class="text-primary text-lg text-start mb-4 font-medium uppercase">
      current weather forecast
    </h1>
    <div
      class="bg-white dark:bg-dark rounded-medium shadow-shallow p-4 max-w-[400px] hover:scale-[0.98] ease-in duration-200 transition-transform"
    >
      <div class="flex justify-between items-center mb-10">
        <p class="text-secondary dark:text-darkSecondary text-lg font-medium">
          {{ weatherData.location.name }}
        </p>
        <p class="text-secondary dark:text-darkSecondary text-lg font-medium">
          {{ weatherData.current.last_updated }}
        </p>
      </div>
      <div class="flex flex-col justify-center">
        <div class="flex justify-center items-center gap-2">
          <span class="text-primary">
            <img
              class="h-[70px]"
              :src="weatherData.current.condition.icon"
              :alt="weatherData.current.condition.text"
            />
          </span>
          <h1
            class="text-primary text-[45px] text-center leading-10 mb-2 font-medium"
          >
            {{ weatherData.current.temp_c }} °C
          </h1>
        </div>
        <p
          class="text-textDark dark:text-textLight text-lg text-center font-medium"
        >
          {{ weatherData.current.condition.text }}
        </p>
      </div>

      <div class="mt-5">
        <div
          class="flex justify-between items-center py-2 border-b border-b-gray dark:border-darkGray"
        >
          <p class="text-textDark dark:text-textLight text-base">Feels Like:</p>
          <p class="text-textDark dark:text-textLight text-base">
            {{ weatherData.current.feelslike_c }} °C
          </p>
        </div>
        <div
          class="flex justify-between items-center py-2 border-b border-b-gray dark:border-darkGray"
        >
          <p class="text-textDark dark:text-textLight text-base">Wind Speed:</p>
          <p class="text-textDark dark:text-textLight text-base">
            {{ weatherData.current.gust_kph }} km/s
          </p>
        </div>
        <div
          class="flex justify-between items-center py-2 border-b border-b-gray dark:border-darkGray"
        >
          <p class="text-textDark dark:text-textLight text-base">Humidity:</p>
          <p class="text-textDark dark:text-textLight text-base">
            {{ weatherData.current.humidity }} %
          </p>
        </div>
        <div
          class="flex justify-between items-center py-2 border-b border-b-gray dark:border-darkGray"
        >
          <p class="text-textDark dark:text-textLight text-base">Visibility:</p>
          <p class="text-textDark dark:text-textLight text-base">
            {{ weatherData.current.vis_km }} km
          </p>
        </div>
        <div class="flex justify-between items-center py-2">
          <p class="text-textDark dark:text-textLight text-base">
            Precipitation:
          </p>
          <p class="text-textDark dark:text-textLight text-base">
            {{ weatherData.current.precip_mm }} mm/s
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup langs="ts">
const store = useWeatherStore();
const { weatherData } = storeToRefs(store);
</script>

<style scoped></style>

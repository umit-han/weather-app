<template>
  <div class="gird gap-8">
    <div class="flex justify-end mt-6">
      <ColorScheme />
    </div>
    <SearchRegion />
    <div class="grid gap-8">
      <div class="col-start-1 col-end-4">
        <WeatherCard />
      </div>
      <div class="col-start-4 col-end-13">
        <HoursCard />
      </div>
    </div>
    <OtherDaysCard />
  </div>
</template>

<script setup langs="ts">
const store = useWeatherStore();
const { fetchWeather } = store;
fetchWeather();
</script>

<style scoped></style>

<template>
    <div class="my-6">
        <h1 class="text-primary text-lg text-start mb-4 font-medium uppercase">Hourly Forecast</h1>
        <div class="gap-5 w-full overflow-y-auto custom-scroll px-8 pt-2 max-h-[420px]">
            <div v-for="item in weatherData.forecast.forecastday[0].hour" class="bg-white rounded-medium shadow-shallow p-4 mb-4 w-full hover:scale-[0.98] ease-in duration-200 transition-transform">
                <div class="flex items-center h-full">
                    <p class="text-secondary text-sm font-normal text-center">{{ formatDate(item.time) }}</p>
                    <div class="flex justify-center items-center gap-2 mx-6">
                        <img class="h-[40px]" :src="item.condition.icon" :alt="item.condition.text">
                        <h1 class="text-primary text-lg text-center font-medium">{{ item.temp_c }} °C</h1>
                    </div>
                    <p class="text-textDark text-xs text-center font-medium">{{ item.condition.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup langs="ts">

  const store = useWeatherStore()
  const { weatherData } = storeToRefs(store);

  const formatDate = (date) => {
    return new Date(date).toLocaleTimeString().slice(0, 5)
  }

</script>

<style scoped>

</style>
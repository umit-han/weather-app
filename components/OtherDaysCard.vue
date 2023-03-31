<template>
    <div class="my-6">
        <h1 class="text-primary text-lg text-start mb-4 font-medium uppercase">7 - day forecast</h1>
        <div class="flex justify-start items-stretch gap-5 w-full">
            <div v-for="item in weatherData.forecast.forecastday" class="bg-white rounded-medium shadow-shallow p-4 w-[300px] hover:scale-[0.98] ease-in duration-200 transition-transform cursor-pointer">
                <div class="flex flex-col justify-center h-full">
                    <p class="text-secondary text-sm font-normal mb-4 text-center">{{ formatDate(item.date)  }}</p>
                    <div class="flex justify-center items-center gap-2 mb-2">
                        <img class="h-[40px]" :src="item.day.condition.icon" :alt="item.day.condition.text">
                        <h1 class="text-primary text-lg text-center font-medium">{{ item.day.avgtemp_c }} °C</h1>
                    </div>
                    <p class="text-textDark text-xs text-center font-medium">{{ item.day.condition.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    const store = useWeatherStore()
    const { weatherData } = storeToRefs(store);

    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }

</script>

<style lang="scss" scoped>

</style>
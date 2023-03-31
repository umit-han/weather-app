<template>
    <div class="gird gap-8 w-full">
        <SearchRegion/>
        <div class="grid gap-8">
            <div class="col-start-1 col-end-4">
                <WeatherCard/>
            </div>
            <div class="col-start-4 col-end-13">
                <HoursCard/>
            </div>
        </div>
        <OtherDaysCard/>
    </div>
</template>

<script setup langs="ts">

    const store = useWeatherStore()
    const { fetchWeather } = store; 
    fetchWeather();

</script>

<style lang="scss" scoped>

</style>
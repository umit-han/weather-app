<template>
    <div class="my-6">
        <div class="bg-white rounded-medium shadow-shallow px-4 py-6"> 
            <form class="flex items-center">   
                <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" v-model="searchValue" class="bg-gray100 border border-primary text-secondary text-sm font-normal radius-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5" placeholder="Search City" required>
                </div>
                <button type="button" @click="searchHandle" class="p-2.5 ml-2 text-sm font-medium text-white bg-primary radius-lg border border-primary hover:brightness-95 focus:ring-2 focus:outline-none focus:ring-primary">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </form>
        </div>
    </div>
</template>

<script setup langs="ts">

    const store = useWeatherStore()
    // const {  fetchWeather } = storeToRefs(store);
    const {  fetchWeather } = store;
    const searchValue = ref('');

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition);
      } 
    }

    function setPosition(position) {
        searchValue = position.coords.latitude+ ','+ position.coords.longitude
        console.log(searchValue);
    }

    const searchHandle = () => {
        fetchWeather(searchValue.value);
        searchValue.value = '';
        console.log(searchValue.value, 'Button');
    }
    
    onMounted(() => {
        getLocation();
        fetchWeather(searchValue.value);
    });



</script>

<style scoped>
    .radius-lg {
        border-radius: 6px;
    }
</style>
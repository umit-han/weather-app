export const useWeatherStore = defineStore("weather", {
  state: () => ({
    // weatherKey: "f11d4cbdc4624d94986143412232903",
    weatherData: [],
  }),

  getters: {},

  actions: {
    async fetchWeather(region: any) {
      try {
        const { data }: any = await useFetch(
          `https://api.weatherapi.com/v1/forecast.json?key=f11d4cbdc4624d94986143412232903&q=${
            region ? region : "London"
          }&days=7&aqi=no&alerts=no`
        );
        if (data) {
          this.weatherData = data.value;
        }
        console.log(region, "regi");
      } catch (error) {
        console.log(error);
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWeatherStore, import.meta.hot));
}

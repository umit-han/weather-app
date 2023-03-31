export const useWeatherStore = defineStore("weather", {
  state: () => ({
    weatherKey: "f11d4cbdc4624d94986143412232903",
    weatherData: [],
  }),

  getters: {},

  actions: {
    async fetchWeather(region: any) {
      try {
        const { data }: any = await useFetch(
          `https://api.weatherapi.com/v1/forecast.json?key=f11d4cbdc4624d94986143412232903&q=Istanbul&days=7&aqi=no&alerts=no`
        );
        if (data) {
          this.weatherData = data.value;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});

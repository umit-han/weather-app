export const useWeatherStore = defineStore("weather", {
  state: () => ({
    weatherData: [],
    regionData: [],
  }),

  getters: {},

  actions: {
    async fetchWeather(region: string) {
      try {
        const { data }: any = await useFetch(
          `https://api.weatherapi.com/v1/forecast.json?key=f11d4cbdc4624d94986143412232903&q=${
            region ? region : "London"
          }&days=7&aqi=no&alerts=no`
        );
        if (data) {
          this.weatherData = data.value;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async fetchGeocode(searchValue: string) {
      try {
        const { data }: any = await useFetch(
          `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${searchValue}`,
          {
            headers: {
              "X-RapidAPI-Key":
                "12c2022078msh338fda3b256abf8p1a0608jsn879dddf1a854",
              "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
            },
          }
        );
        if (data) {
          this.regionData = data.value.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWeatherStore, import.meta.hot));
}

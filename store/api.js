export const state = () => ({
    weatherItem: undefined,
    forecastItem: undefined
})

const appid = '9057f7f58339b0ace9a6af653e93c676'
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/'

export const actions = {
    async getWeather({ commit }){
        const { data } = await this.$axios.get(`${weatherApiUrl}weather?units=metric&q=Tokyo&appid=${appid}`)
        commit('GET_WEATHER', data)
    },
    async getForecast({ commit }) {
        const { data } = await this.$axios.get(`${weatherApiUrl}forecast?units=metric&q=Tokyo&appid=${appid}`)
        commit('GET_FORECAST', data)
    }
}
export const mutations = {
    GET_WEATHER(state, data){
        state.weatherItem = data
    },
    GET_FORECAST(state, data){
        state.forecastItem = data
    },
}
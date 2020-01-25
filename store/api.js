export const state = () => ({
    weatherItem: undefined,
})

export const actions = {
    async getWeather({ commit }){
        const appid = '9057f7f58339b0ace9a6af653e93c676'
        const { data } = await this.$axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${appid}`)
        commit('GET_WEATHER', data)
    },
}

export const mutations = {
    GET_WEATHER(state, data){
        state.weatherItem = data
    },
}
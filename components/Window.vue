<template>

<div class="windowArea"></div>

</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
    computed: { //weatherItemが変わったら実行される
        MAIN_VIEW() {
            let main = this.weatherItem && this.weatherItem.weather[0].main
            if(main === 'Clear') {
                return 'はれ'
            } else if(main === 'Clouds') {
                return 'くもり'
            } else if(main === 'Rain') {
                return 'あめ'
            } else if(main === 'Snow') {
                return 'ゆき'
            } else {
                return main
            }
        },
        WIND_VIEW() {
            const speed = this.weatherItem && this.weatherItem.wind.speed
            if(speed > 10) {
                return '風強い！'
            } else if(speed > 3) {
                return '風普通'
            } else {
                return '風弱い'
            }
        },
        ...mapState({
              weatherItem: state => state.api.weatherItem
          })
    },
    mounted() {
        this.getWeather()
    },
    methods: {
    ...mapActions({
            getWeather: 'api/getWeather'
        })
    }
}

</script>

<style scoped>



</style>

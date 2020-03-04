<template>

<div class="windowArea" v-bind:class="[TIME, MAIN_VIEW]"></div>

</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
    computed: {
        TIME: () => {
            let time = new Date()
            let hour = time.getHours()
            if(hour > 17 || hour < 6) {
                return 'night'
            } else if(hour > 15) {
                return 'evening'
            } else {
                return 'daytime'
            }
        },
        MAIN_VIEW() {
            let main = this.weatherItem && this.weatherItem.weather[0].main
            if(main === 'Clouds') {
                return 'clouds'
            } else if(main === 'Rain') {
                return 'rain'
            } else if(main === 'Snow') {
                return 'snow'
            } else {
                return
            }
        },
//        WIND_VIEW() {
//            const speed = this.weatherItem && this.weatherItem.wind.speed
//            if(speed > 10) {
//                return ''
//            } else if(speed > 3) {
//                return ''
//            } else {
//                return ''
//            }
//        },
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

    .windowArea{
        width: 20%;
        height: 40%;
        position: absolute;
        left: 0;
        bottom: calc(60%*1500/2000);
        z-index: -1;
        &:after{
            content: '';
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .daytime{
        background: #DAF1FF;
    }
    .evening{
        background: #f4a460;
    }
    .night{
        background: #003366;
    }
/*
    .clouds:after, .rain:after{
        background: #778899;
    }
    .snow:after{
        background: white;
    }
*/

</style>

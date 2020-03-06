<template>

<div class="wrapper" :class="TIME">

<!--
    <div v-if="MAIN_IMG === 'clear'" style="background:red; width:100px; height:100px;"></div>
    <div v-if="MAIN_IMG === 'clouds'" style="background:gray; width:100px; height:100px;"></div>
    <div v-if="MAIN_IMG === 'rain'" style="background:blue; width:100px; height:100px;"></div>
-->

    <section class="infoArea">
        <h2 class="infoTitle">天気の詳細</h2>
        <p class="infoDate">{{DATE}}</p>
        <ul class="infoList">
            <li class="infoListItem">東京</li>
            <li class="infoListItem">{{MAIN_INFO}}</li>
            <li class="infoListItem">{{HUMIDITY_INFO}}%</li>
            <li class="infoListItem">{{WIND_INFO}}m/s</li>
            <li class="infoListItem">{{TEMPMIN_INFO}}℃</li>
            <li class="infoListItem">{{TEMPMAX_INFO}}℃</li>
        </ul>
    </section>

</div>

</template>

<script>

import { mapActions, mapState } from 'vuex'
import moment from 'moment'

export default {
    computed: {
        DATE: () => {
            moment.locale('ja')
            return moment().format('M月D日 (dd)')
        },
        MAIN_INFO() {
            let main = this.weatherItem && this.weatherItem.weather[0].main
            if(main === 'Clear') {
                return '晴れ'
            } else if(main === 'Clouds') {
                return '曇り'
            } else if(main === 'Rain') {
                return '雨'
            } else if(main === 'Snow') {
                return '雪'
            }
        },
        HUMIDITY_INFO() {
            return this.weatherItem && this.weatherItem.main.humidity
        },
        WIND_INFO() {
            return this.weatherItem && this.weatherItem.wind.speed
        },
        TEMPMIN_INFO() {
            return this.weatherItem && this.weatherItem.main.temp_min
        },
        TEMPMAX_INFO() {
            return this.weatherItem && this.weatherItem.main.temp_max
        },
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
        MAIN_IMG() {
            let main = this.weatherItem && this.weatherItem.weather[0].main
            if(main === 'Clear') {
                return 'clear'
            } else if(main === 'Clouds') {
                return 'clouds'
            } else if(main === 'Rain') {
                return 'rain'
            } else if(main === 'Snow') {
                return 'snow'
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

    .wrapper{
        width: 600px;
        padding: 200px 0 100px;
        margin: 0 auto;
    }
    .infoArea{
        background: white;
        padding: 20px;
        position: relative;
    }
    .infoTitle{
        text-align: center;
        width: 130px;
        margin-top: 55px;
        font-size: 16px;
        &::before{
            content: '';
            display: block;
            width: 130px;
            height: 130px;
            background-image: url(/topimg.png);
            background-size: contain;
            background-repeat: no-repeat;
            position: absolute;
            top: -65px;
            left: 20px;
        }
    }
    .infoDate{
        text-align: center;
        width: 130px;
        font-size: 16px;
    }
    .infoList{
        display: flex;
        list-style: none;
    }
    .infoListItem{
        margin-right: 50px;
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

</style>

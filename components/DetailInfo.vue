<template>

<section class="infoArea">
    <h2 class="infoTitle">天気の詳細</h2>
    <p class="infoDate">{{DETAIL_DATE}}</p>
    <ul class="infoList">
        <li class="infoListItem"><fa class="infoIcon" :icon="faMapMarkerAlt" />{{this.weatherItem && this.weatherItem.name}}</li>
        <li class="infoListItem"><fa class="infoIcon" :icon="faSun" />{{MAIN_INFO}}</li>
        <li class="infoListItem"><fa class="infoIcon" :icon="faTint" />{{HUMIDITY_INFO}}%</li>
        <li class="infoListItem"><fa class="infoIcon" :icon="faWind" />{{WIND_INFO}}m/s</li>
        <li class="infoListItem"><span class="infoIcon min">⬇︎</span>{{TEMPMIN_INFO}}℃</li>
        <li class="infoListItem"><span class="infoIcon max">⬆︎</span>{{TEMPMAX_INFO}}℃</li>
    </ul>
    <Chart />
</section>

</template>

<script>

import { mapActions, mapState } from 'vuex'
import moment from 'moment'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faTint } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import Chart from '~/components/Chart.vue'

export default {
    components: {
        Chart
    },
    computed: {
        DETAIL_DATE: () => {
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
            } else if(main === 'Mist') {
                return '霧'
            }
        },
        HUMIDITY_INFO() {
            return this.weatherItem && this.weatherItem.main.humidity
        },
        WIND_INFO() {
            return this.weatherItem && this.weatherItem.wind.speed
        },
        TEMPMIN_INFO() {
            return Math.round(this.weatherItem && this.weatherItem.main.temp_min)
        },
        TEMPMAX_INFO() {
            return Math.round(this.weatherItem && this.weatherItem.main.temp_max)
        },
        faMapMarkerAlt: () => faMapMarkerAlt,
        faSun: () => faSun,
        faTint: () => faTint,
        faWind: () => faWind,
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

    .infoArea{
        background: white;
        padding: 20px 20px 50px;
        position: relative;
        z-index: 20;
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
        flex-wrap: wrap;
        list-style: none;
        line-height: 2em;
        padding: 20px 20px 40px;
        border-bottom: 1px gray solid;
    }
    .infoListItem{
        margin-right: 36px;
        font-size: 18px;
        & .infoIcon{
            width: 36px;
            &.min{color: #6284f7;padding: 8px;}
            &.max{color: #f76271;padding: 8px;}
        }
    }

</style>

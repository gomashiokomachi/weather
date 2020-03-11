<template>

<section class="forecastArea">
    <h2 class="forecastTitle">5日間予報</h2>
    <ol class="forecastList">
        <li v-for="listArray in FORECAST_LIST" class="forecastItem">
            <span class="forecastDate"># {{FORECAST_DATE[ listArray ]}}</span>
            <fa v-if="MAIN_FORECAST[ listArray ] === 'clear'" class="forecastIcon" :icon="faSun" />
            <fa v-if="MAIN_FORECAST[ listArray ] === 'clouds'" class="forecastIcon" :icon="faCloud" />
            <fa v-if="MAIN_FORECAST[ listArray ] === 'rain'" class="forecastIcon" :icon="faUmbrella" />
        </li>
    </ol>
</section>

</template>

<script>

import { mapActions, mapState } from 'vuex'
import moment from 'moment'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faUmbrella } from '@fortawesome/free-solid-svg-icons'

export default {
    computed: {
        FORECAST_DATE: () => {
            moment.locale('ja')
            const dateArray = []
            for (let i=0; i<5; i++) {
                dateArray.push(moment().add(1+i, 'days').format('M月D日'))
            } return dateArray
        },
        MAIN_FORECAST() {
            const mainArray = []
            for (let i=0; i<5; i++) {
                const main = this.forecastItem && this.forecastItem.list[2+i*8].weather[0].main
                if(main === 'Clear') {
                    mainArray.push('clear')
                } else if(main === 'Clouds') {
                    mainArray.push('clouds')
                } else if(main === 'Rain') {
                    mainArray.push('rain')
                } else if(main === 'Snow') {
                    mainArray.push('snow')
                }
            } return mainArray
        },
        FORECAST_LIST: () => {
            const listArray = [0, 1, 2, 3, 4]
            return listArray
        },
        faSun: () => faSun,
        faCloud: () => faCloud,
        faUmbrella: () => faUmbrella,
        ...mapState({
            forecastItem: state => state.api.forecastItem
        })
    },
    mounted() {
        this.getForecast()
    },
    methods: {
        ...mapActions({
            getForecast: 'api/getForecast'
        })
    }
}

</script>

<style scoped>

    .forecastArea{
        background: #f3f3f3;
        border-radius: 10px;
        padding: 10px 20px 20px;
        margin: 100px auto auto;
    }
    .forecastTitle{
        padding: 8px 10px;
        font-size: 20px;
        border-bottom: 1px gray solid;
    }
    .forecastList{
        list-style: none;
    }
    .forecastItem{
        padding: 10px;
        border-bottom: 1px gray solid;
    }
    .forecastDate{
        margin-right: 20px;
        font-size: 18px;
    }
    .forecastIcon{
        font-size: 36px;
        color: #4b4b4b;
    }

</style>

<template>

<section class="forecastArea">
    <h2 class="forecastTitle">5日間予報</h2>
    <ol class="forecastList">
        <li v-for="listArray in FORECAST_LIST" class="forecastItem">
            <span class="forecastDate"># {{FORECAST_DATE[ listArray ]}}</span>
            <fa v-if="MAIN_FORECAST[ listArray ] === 'Clear'" class="forecastIcon" :icon="faSun" />
            <fa v-if="MAIN_FORECAST[ listArray ] === 'Clouds'" class="forecastIcon" :icon="faCloud" />
            <fa v-if="MAIN_FORECAST[ listArray ] === 'Rain'" class="forecastIcon" :icon="faCloudShowersHeavy" />
            <fa v-if="MAIN_FORECAST[ listArray ] === 'Snow'" class="forecastIcon" :icon="faSnowflake" />
            <fa v-if="MAIN_FORECAST[ listArray ] === 'Mist'" class="forecastIcon" :icon="faSmog" />
        </li>
    </ol>
</section>

</template>

<script>

import { mapActions, mapState } from 'vuex'
import moment from 'moment'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { faSmog } from '@fortawesome/free-solid-svg-icons'

export default {
    computed: {
        FORECAST_DATE: () => {
            moment.locale('ja')
            const dateArray = []
            for (let i=0; i<5; i++) {
                dateArray.push(moment().add(i, 'days').format('M月D日'))
            } return dateArray
        },
        MAIN_FORECAST() {
            const mainArray = []
            for (let i=0; i<36; i++) {
                const main = this.forecastItem && this.forecastItem.list[i].weather[0].main
                const list = this.forecastItem && this.forecastItem.list[i].dt_txt
                const newList = new String(list)
                if(newList.substr( 11, 2 ) === "15"){
                    mainArray.push(main)
                }
            } return mainArray
        },
        FORECAST_LIST: () => {
            const listArray = [0, 1, 2, 3, 4]
            return listArray
        },
        faSun: () => faSun,
        faCloud: () => faCloud,
        faCloudShowersHeavy: () => faCloudShowersHeavy,
        faSnowflake: () => faSnowflake,
        faSmog: () => faSmog,
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
        display: inline-block;
        vertical-align: top;
        font-size: 18px;
    }
    .forecastIcon{
        width: 80px;
        font-size: 36px;
        color: #4b4b4b;
    }

</style>

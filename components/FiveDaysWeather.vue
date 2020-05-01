<template>

<div class="forecastWrapper">
  <input type="checkbox" id="toggle">
  <label for="toggle">Forecast</label>
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
</div>

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
    forecastItemList() {
      return this.forecastItem ? this.forecastItem.list : []
    },
    MAIN_FORECAST() {
      return this.forecastItemList
        .filter(({dt_txt}) => dt_txt.substr( 11, 2 ) === "15")
        .map(({weather}) => weather[0].main)
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

  .forecastWrapper {
    margin: 100px auto auto;
    & label {
      display: none;
      transform: rotate(-90deg);
      background: #f3f3f3;
      padding: 10px 20px 20px;
      border-radius: 10px 10px 0 0;
      font-size: 20px;
      position: fixed;
      top: 82px;
      right: -50px;
      cursor: pointer;
      transition: 1s;
      z-index: 30;
    }
    & input {
      display: none;
    }
  }
  .forecastArea {
    background: #f3f3f3;
    border-radius: 10px;
    padding: 10px 20px 20px;
  }
  .forecastTitle {
    padding: 8px 10px;
    font-size: 20px;
    border-bottom: 1px gray solid;
  }
  .forecastList {
    list-style: none;
  }
  .forecastItem {
    padding: 10px;
    border-bottom: 1px gray solid;
  }
  .forecastDate {
    display: inline-block;
    vertical-align: top;
    width: 100px;
    font-size: 18px;
  }
  .forecastIcon {
    width: 80px;
    font-size: 36px;
    color: #4b4b4b;
  }

  @media screen and (max-width:768px) {
    .forecastWrapper {
      & label {
        display: block;
      }
      & input:checked {
        & ~ label {
          right: 200px;
          transition: 1s;
        }
        & ~ .forecastArea {
          right: 0;
          transition: 1s;
        }
      }
    }
    .forecastArea {
      border-radius: 0;
      margin-top: 0;
      position: fixed;
      top: 50px;
      right: -250px;
      transition: 1s;
      z-index: 30;
    }
  }

</style>
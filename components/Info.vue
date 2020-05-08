<template>

<section class="infoArea">
  <h2 class="infoTitle">
    <select v-model="selected" @change="fetchWeather">
      <option v-for="city in mainCities" :value="city.value">
        {{ city.text }}
      </option>
    </select>
    の天気
  </h2>
  <p class="infoDate">{{INFO_DATE}}</p>
  <ul v-if="weatherItem" class="infoList">
    <li class="infoListItem">{{MAIN_MESSAGE}}</li>
    <li class="infoListItem">{{TEMP_MESSAGE}}</li>
    <li class="infoListItem">{{HUMIDITY_MESSAGE}}</li>
    <li class="infoListItem">{{WIND_MESSAGE}}</li>
    <li class="infoListItem">アイス食べたい</li>
    <li class="infoListItem"><nuxt-link class="gnavLink" to="/details">もっと詳しく▶︎</nuxt-link></li>
  </ul>
</section>

</template>

<script>

import { mapActions, mapState } from 'vuex'
import moment from 'moment'
import { mainCities } from '~/utils/const'

export default {
  data () {
    return {
      selected: '1850144',
      mainCities
    }
  },
  computed: {
    INFO_DATE: () => moment().format('M月D日'),
    MAIN_MESSAGE() {
      let main = this.weatherItem && this.weatherItem.weather[0].main
      if(main === 'Clear') {
        return '晴れてる！'
      } else if(main === 'Clouds') {
        return 'くもりー。'
      } else if(main === 'Rain') {
        return '雨降ってるなぁ'
      } else if(main === 'Snow') {
        return '雪だ！'
      } else if(main === 'Mist') {
        return 'きり...(ﾟﾛﾟ;'
      } else {
        return main
      }
    },
    TEMP_MESSAGE() {
      const temp = this.weatherItem && this.weatherItem.main.temp
      if(temp > 28) {
        return 'あつーい！'
      } else if(temp > 23) {
        return '良い感じの気温〜'
      } else if(temp > 15) {
        return '肌寒い...'
      } else {
        return 'さむっ'
      }
    },
    HUMIDITY_MESSAGE() {
      const humidity = this.weatherItem && this.weatherItem.main.humidity
      if(humidity > 70) {
        return '湿気やば'
      } else if(humidity > 40) {
        return '湿度よき！'
      } else {
        return '肌カサカサ(>_<)'
      }
    },
    WIND_MESSAGE() {
      const speed = this.weatherItem && this.weatherItem.wind.speed
      if(speed > 10) {
        return '風つよ！'
      } else if(speed > 3) {
        return '良い風だー'
      } else {
        return 'そよそよ〜'
      }
    },
    ...mapState({
      weatherItem: state => state.api.weatherItem
    }),
  },
  mounted() {
    this.getWeather({ area: this.selected })
  },
  methods: {
    fetchWeather(e) {
      this.getWeather({ area: e.target.value })
    },
    ...mapActions({
      getWeather: 'api/getWeather'
    })
  }
}

</script>

<style scoped>

  .infoArea {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background: white;
    width: 300px;
    padding: 10px 10px 0;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(40%*1500/2000);
    &::after {
      content: '';
      display: block;
      width: 100px;
      height: 100px;
      background-image: url(/info.png);
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      bottom: -56px;
      right: -100px;
    }
    z-index: 10;
  }
  .infoTitle {
    order: 2;
    text-align: center;
    font-size: 18px;
    & select {
      background: white;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .infoDate {
    order: 1;
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
  }
  .infoList {
    order: 3;
    list-style: none;
    margin-top: 14px;
  }
  .infoListItem {
    display: flex;
    padding: 14px;
    border-top: 1px #333 solid;
    line-height: 40px;
    font-size: 22px;
    &::before {
      content: '';
      display: block;
      background: url(/topimg.png);
      background-size: contain;
      background-repeat: no-repeat;
      width: 40px;
      height: 40px;
      height: 40px;
      margin-right: 14px;
    }
  }

  @media screen and (min-width:1200px) {
    .infoArea {
      width: 320px;
      &::after {
        width: 120px;
        height: 120px;
        bottom: -66px;
        right: -120px;
      }
    }
    .infoTitle {
      font-size: 20px;
      & select {
        font-size: 16px;
      }
    }
    .infoDate {
      font-size: 16px;
    }
    .infoList {
      margin-top: 16px;
    }
    .infoListItem {
      padding: 16px;
      line-height: 42px;
      font-size: 24px;
      &::before {
        width: 42px;
        height: 42px;
        margin-right: 16px;
      }
    }
  }
  @media screen and (max-width:1000px) {
    .infoArea {
      width: 260px;
      &::after {
        width: 60px;
        height: 60px;
        bottom: -33px;
        right: -60px;
      }
    }
    .infoTitle {
      font-size: 14px;
      & select {
        font-size: 14px;
      }
    }
    .infoDate {
      font-size: 10px;
    }
    .infoList {
      margin-top: 10px;
    }
    .infoListItem {
      padding: 10px;
      line-height: 36px;
      font-size: 18px;
      &::before {
        width: 36px;
        height: 36px;
        margin-right: 10px;
      }
    }
  }
  @media screen and (max-width:768px) {
    .infoArea {
      left: 6%;
      right: auto;
      top: calc(12%*1500/2000);
      bottom: auto;
      &::after {
        display: none;
      }
    }
  }
  @media screen and (max-width:500px) {
    .infoArea {
      width: 160px;
    }
    .infoTitle {
      font-size: 12px;
      & select {
        font-size: 12px;
      }
    }
    .infoList {
      margin-top: 8px;
    }
    .infoListItem {
      padding: 8px;
      line-height: 20px;
      font-size: 14px;
      &::before {
        width: 20px;
        height: 20px;
        margin-right: 8px;
      }
    }
  }

</style>
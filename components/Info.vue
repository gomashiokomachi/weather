<template>

<section class="infoArea">
  <h2 class="infoTitle">
    <select v-model="selected" @change="fetchWeather">
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
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
    <li class="infoListItem">アイス</li>
    <li class="infoListItem"><nuxt-link class="gnavLink" to="/details">もっと詳しく▶︎</nuxt-link></li>
  </ul>
</section>

</template>

<script>

import { mapActions, mapState } from 'vuex'
import moment from 'moment'

export default {
  data () {
    return {
      selected: 'Tokyo',
      options: [
        { text: '北海道', value: 'Hokkaido' },
        { text: '宮城', value: 'Miyagi' },
        { text: '東京', value: 'Tokyo' },
        { text: '新潟', value: 'Niigata' },
        { text: '石川', value: 'Ishikawa' },
        { text: '愛知', value: 'Aichi' },
        { text: '大阪', value: 'Osaka' },
        { text: '広島', value: 'Hiroshima' },
        { text: '高知', value: 'Kochi' },
        { text: '福岡', value: 'Fukuoka' },
        { text: '鹿児島', value: 'Kagoshima' },
        { text: '沖縄', value: 'Okinawa' }
      ]
    }
  },
  computed: {
    INFO_DATE: () => moment().format('M月D日'),
    MAIN_MESSAGE() {
      let main = this.weatherItem && this.weatherItem.weather[0].main
      if(main === 'Clear') {
        return 'はれ'
      } else if(main === 'Clouds') {
        return 'くもり'
      } else if(main === 'Rain') {
        return 'あめ'
      } else if(main === 'Snow') {
        return 'ゆき'
      } else if(main === 'Mist') {
        return 'きり'
      } else {
        return main
      }
    },
    TEMP_MESSAGE() {
      const temp = this.weatherItem && this.weatherItem.main.temp
      if(temp > 28) {
        return '暑い'
      } else if(temp > 23) {
        return 'ちょうど良い'
      } else if(temp > 15) {
        return '肌寒い'
      } else {
        return '寒い'
      }
    },
    HUMIDITY_MESSAGE() {
      const humidity = this.weatherItem && this.weatherItem.main.humidity
      if(humidity > 70) {
        return '湿度高い'
      } else if(humidity > 40) {
        return '湿度普通'
      } else {
        return '湿度低い'
      }
    },
    WIND_MESSAGE() {
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
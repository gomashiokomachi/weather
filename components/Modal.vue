<template>

<div class="modal" @click="$emit('close')">
  <ul class="modalList">
    <li class="modalItem" v-for="option in options">
      <label><input type="radio" v-model="selected" :value="option.value" @change="fetchWeather($event); fetchForecast($event)">{{ option.text }}</label>
    </li>
  </ul>
</div>

</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      selected: 'Tokyo',
      options: [
        { text: '北海道', value: 'Hokkaido' },
        { text: '青森', value: 'Aomori' },
        { text: '岩手', value: 'Iwate' },
        { text: '宮城', value: 'Miyagi' },
        { text: '秋田', value: 'Akita' },
        { text: '山形', value: 'Yamagata' },
        { text: '福島', value: 'Fukushima' },
        { text: '茨城', value: 'Ibaraki' },
        { text: '栃木', value: 'Tochigi' },
        { text: '群馬', value: 'Gunma' },
        { text: '埼玉', value: 'Saitama' },
        { text: '千葉', value: 'Chiba' },
        { text: '東京', value: 'Tokyo' },
        { text: '神奈川', value: 'Kanagawa' },
        { text: '新潟', value: 'Niigata' },
        { text: '富山', value: 'Toyama' },
        { text: '石川', value: 'Ishikawa' },
        { text: '福井', value: 'Fukui' },
        { text: '山梨', value: 'Yamanashi' },
        { text: '長野', value: 'Nagano' },
        { text: '岐阜', value: 'Gifu' },
        { text: '静岡', value: 'Shizuoka' },
        { text: '愛知', value: 'Aichi' },
        { text: '三重', value: 'Mie' },
        { text: '滋賀', value: 'Shiga' },
        { text: '京都', value: 'Kyoto' },
        { text: '大阪', value: 'Osaka' },
        { text: '兵庫', value: 'Hyogo' },
        { text: '奈良', value: 'Nara' },
        { text: '和歌山', value: 'Wakayama' },
        { text: '鳥取', value: 'Tottori' },
        { text: '島根', value: 'Shimane' },
        { text: '岡山', value: 'Okayama' },
        { text: '広島', value: 'Hiroshima' },
        { text: '山口', value: 'Yamaguchi' },
        { text: '徳島', value: 'Tokushima' },
        { text: '香川', value: 'Kagawa' },
        { text: '愛媛', value: 'Ehime' },
        { text: '高知', value: 'Kochi' },
        { text: '福岡', value: 'Fukuoka' },
        { text: '佐賀', value: 'Saga' },
        { text: '長崎', value: 'Nagasaki' },
        { text: '熊本', value: 'Kumamoto' },
        { text: '大分', value: 'Oita' },
        { text: '宮崎', value: 'Miyazaki' },
        { text: '鹿児島', value: 'Kagoshima' },
        { text: '沖縄', value: 'Okinawa' }
      ]
    }
  },
  computed: {
    ...mapState({
      weatherItem: state => state.api.weatherItem,
      forecastItem: state => state.api.forecastItem
    })
  },
  mounted() {
    this.getWeather({ area: this.selected })
    this.getForecast({ area: this.selected })
  },
  methods: {
    fetchWeather(e) {
      this.getWeather({ area: e.target.value })
    },
    fetchForecast(e) {
      this.getForecast({ area: e.target.value })
    },
    ...mapActions({
      getWeather: 'api/getWeather',
      getForecast: 'api/getForecast'
    })
  }
}

</script>

<style scoped>

  .modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    &::before {
      content: '';
      display: block;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, .8);
      position: absolute;
      top: 0;
      left: 0;
    }
    &::after {
      content: '×';
      display: block;
      font-size: 80px;
      color: #B0BBD9;
      position: absolute;
      top: 0px;
      left: 50px;
      cursor: pointer;
    }
  }
  .modalList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
    background: white;
    max-width: 960px;
    padding: 50px 30px;
    border-top: 50px #B0BBD9 solid;
    border-radius: 10px;
    position: absolute;
    top: 100px;
    left: 30px;
    right: 30px;
    margin: auto;
    z-index: 200;
  }
  .modalItem {
    text-align: center;
    line-height: 50px;
    width: 100px;
    height: 50px;
    & label {
      display: inline-block;
      cursor: pointer;
      font-size: 20px;
      font-weight: bold;
      &:hover {
        color: #B0BBD9;
        transform: scale(1.2);
      }
    }
    & input {
      display: none;
    }
  }

</style>
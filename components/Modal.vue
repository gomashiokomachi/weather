<template>

<div class="modal" @click="$emit('close')">
  <ul class="modalList">
    <li class="modalItem" v-for="city in cities">
      <label><input type="radio" :value="city.value" @change="fetchWeather($event); fetchForecast($event)">{{ city.text }}</label>
    </li>
  </ul>
</div>

</template>

<script>

import { mapActions, mapState } from 'vuex'
import { cities } from '~/utils/const'

export default {
  data() {
    return {
      cities
    }
  },
  computed: {
    ...mapState({
      weatherItem: state => state.api.weatherItem,
      forecastItem: state => state.api.forecastItem
    })
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
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
    background: white;
    max-width: 520px;
    max-height: 610px;
    padding: 30px 100px;
    border-top: 50px #B0BBD9 solid;
    border-radius: 10px;
    position: absolute;
    top: 100px;
    left: 30px;
    right: 30px;
    bottom: 30px;
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
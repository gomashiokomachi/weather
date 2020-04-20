<template>

<div class="viewArea" :class="[TIME_VIEW, MAIN_VIEW]">
  <div class="clouds" :class="[MAIN_VIEW, WIND_VIEW]">
    <fa class="cloud" :icon="faCloud" />
    <fa class="cloud" :icon="faCloud" />
    <fa class="cloud" :icon="faCloud" />
  </div>
  <div v-if="MAIN_VIEW === 'Rain'" class="rainView">
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
  <DetailInfo />
  <figure class="ground"><img src="/ground.png"></figure>
</div>

</template>

<script>

import { mapActions, mapState } from 'vuex'
import moment from 'moment'
import DetailInfo from '~/components/DetailInfo.vue'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    DetailInfo
  },
  computed: {
    TIME_VIEW: () => {
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
      return this.weatherItem && this.weatherItem.weather[0].main
    },
    WIND_VIEW() {
      const speed = this.weatherItem && this.weatherItem.wind.speed
      if(speed > 10) {
        return 'fast'
      } else if(speed > 3) {
        return 'normal'
      } else {
        return 'slow'
      }
    },
    faCloud: () => faCloud,
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

  .viewArea {
    overflow: hidden;
    width: 600px;
    padding: 200px 0 100px;
    margin: 0 10px;
    position: relative;
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .clouds {
    &.Clouds,
    &.Rain {
      & .cloud {
        color: #626a73;
      }
    }
    &.fast {
      & .cloud {
        animation-duration: 20s;
        &:nth-of-type(2) {
          animation-delay: 7s;
        }
        &:nth-of-type(3) {
          animation-delay: 12s;
        }
      }
    }
    &.normal {
      & .cloud {
        animation-duration: 40s;
        &:nth-of-type(2) {
          animation-delay: 13s;
        }
        &:nth-of-type(3) {
          animation-delay: 23s;
        }
      }
    }
    &.slow {
      & .cloud {
        animation-duration: 60s;
      }
    }
    & .cloud {
      font-size: 100px;
      color: white;
      position: absolute;
      right: -25%;
      animation: cloud linear infinite;
      z-index: 10;
      &:nth-of-type(1) {
        top: 10px;
      }
      &:nth-of-type(2) {
        top: 90px;
        animation-delay: 20s;
      }
      &:nth-of-type(3) {
        top: 50px;
        animation-delay: 35s;
      }
    }
  }
  @keyframes cloud {
    0% {transform: translateX(0);}
    to {transform: translateX(-600%);}
  }
  .ground {
    position: absolute;
    bottom: 0;
    z-index: 10;
    & img {
      display: block;
      width: 100%;
    }
  }

  @media screen and (max-width:480px) {
    .viewArea {
      margin-bottom: 55px;
    }
  }

</style>
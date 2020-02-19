<template>
  <div class="container">
    <div v-if="weatherItem">{{weatherItem}}</div>
    <Info />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Info from '~/components/Info.vue'

export default {
  components: {
    Info
  },
    computed: {
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

<style>
    .container{
        background: url("/bg.png") 0 0 no-repeat;
        padding-bottom: calc(100%*1500/2000);
        background-size: 100% auto;
    }
</style>

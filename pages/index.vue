<template>
  <div class="container">
    <div v-if="weatherItem">{{weatherItem}}</div>
    <figure class="bg"><img src="/bg.png" /></figure>
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
.bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    & img {
        width: 100%;
        display: block;
    }
}
</style>

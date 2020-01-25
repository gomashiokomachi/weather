<template>
  <div class="container">
    <div v-if="weatherItem">{{weatherItem}}</div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
    &:hover{
        background: red;
    }
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

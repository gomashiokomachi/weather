<template>

<nav>
    <ul>
        <li><nuxt-link to="/">ホーム</nuxt-link></li>
        <li>地域を変更</li>
    </ul>
</nav>

</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
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

<style scoped>



</style>

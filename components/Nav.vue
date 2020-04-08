<template>

<nav class="navArea">
    <ul class="navList">
        <li class="navItem"><nuxt-link to="/"><fa class="navIcon" :icon="faHome" />ホーム</nuxt-link></li>
        <li class="navItem"><fa class="navIcon" :icon="faMapMarkerAlt" />地域を変更</li>
    </ul>
    
    <select v-model="selected" @change="fetchForecast">
        <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
</nav>

</template>

<script>

import { mapActions, mapState } from 'vuex'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default {
    data () {
        return {
            selected: 'Tokyo',
            options: [
                { text: '北海道', value: 'Hokkaido' },
                { text: '宮城', value: 'Miyagi' },
                { text: '新潟', value: 'Niigata' },
                { text: '東京', value: 'Tokyo' },
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
        faMapMarkerAlt: () => faMapMarkerAlt,
        faHome: () => faHome,
        ...mapState({
              forecastItem: state => state.api.forecastItem
        })
    },
    mounted() {
        this.getForecast({ area: this.selected })
    },
    methods: {
        fetchForecast(e) {
            this.getForecast({ area: e.target.value })
        },
        ...mapActions({
            getForecast: 'api/getForecast'
        })
    }
}

</script>

<style scoped>

    .navArea{
        margin: 100px auto auto;
    }
    .navList{
        list-style: none;
    }
    .navItem{
        font-size: 20px;
        & .navIcon{
            width: 40px;
        }
    }

</style>

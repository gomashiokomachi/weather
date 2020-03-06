<template>

<div class="container">
    <Nav />
    <DetailInfoBg />
    <DetailInfo />
    <FiveDaysWeather />
</div>

</template>

<script>

import Nav from '~/components/Nav.vue'
import DetailInfoBg from '~/components/DetailInfoBg.vue'
import DetailInfo from '~/components/DetailInfo.vue'
import FiveDaysWeather from '~/components/FiveDaysWeather.vue'

export default {
    components: {
        Nav,
        DetailInfoBg,
        DetailInfo,
        FiveDaysWeather
    }
}

</script>

<style scoped>

    .container{
        background: url("/bbg.jpg");
    }

</style>

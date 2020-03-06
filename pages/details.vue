<template>

<div class="container">
    <Nav />
    <DetailInfo />
    <FiveDaysWeather />
</div>

</template>

<script>

import Nav from '~/components/Nav.vue'
import DetailInfo from '~/components/DetailInfo.vue'
import FiveDaysWeather from '~/components/FiveDaysWeather.vue'

export default {
    components: {
        Nav,
        DetailInfo,
        FiveDaysWeather
    }
}

</script>

<style scoped>

    .container{
        display: flex;
        background: url("/bbg.jpg");
    }

</style>

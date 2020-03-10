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
        position: relative;
        &::before{
            content: '';
            background: url("/bbg.jpg");
            width: 100vw;
            height:100vh;
            margin-left: calc( ( ( 100% - 100vw ) / 2 ) );
            margin-right: calc( ( ( 100% - 100vw ) / 2 ) );
            position: absolute;
            z-index: -10;
        }
    }

    @media screen and (min-width:1200px){
        .container{
            width: 1200px;
            margin: 0 auto;
        }
    }

</style>

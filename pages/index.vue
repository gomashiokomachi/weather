<template>

<div class="container">
    <Info />
    <Window />
    <Girl />
</div>

</template>

<script>

import Info from '~/components/Info.vue'
import Window from '~/components/Window.vue'
import Girl from '~/components/Girl.vue'

export default {
    components: {
        Info,
        Window,
        Girl
    }
}

</script>

<style scoped>
    .container{
        background: url("/bg.png") 0 0 no-repeat;
        padding-bottom: calc(100%*1500/2000);
        background-size: contain;
        position: relative;
        &::before{
            content: '';
            background: url("/bbg.jpg");
            width: 100vw;
            height: 100vh;
            margin-left: calc( ( ( 100% - 100vw ) / 2 ) );
            margin-right: calc( ( ( 100% - 100vw ) / 2 ) );
            position: absolute;
            z-index: -10;
        }
    }
    @media screen and (min-width:1200px){
        .container{
            width: 1200px;
            padding-bottom: 900px;
            margin: 0 auto;
        }
    }
    @media screen and (max-width:768px){
        .container{
            padding-bottom: calc(140%*1500/2000);
            background-size: cover;
            background-position: right top;
        }
    }
</style>

<template>

<div class="windowArea" :class="[TIME_VIEW, MAIN_VIEW]">
    <div v-if="MAIN_VIEW === 'Rain'" class="rainView">
        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
</div>

</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
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

    .windowArea{
        overflow: hidden;
        width: 20%;
        height: 40%;
        position: absolute;
        left: 0;
        bottom: calc(60%*1500/2000);
        z-index: -1;
        &:after{
            content: '';
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .daytime{
        background: #DAF1FF;
    }
    .evening{
        background: #f4a460;
    }
    .night{
        background: #003366;
    }
    .Clouds:after, .Rain:after{
        background: #778899;
    }
    .Snow:after{
        background: white;
    }
    .rainView {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        & span {
            position: absolute;
            width: 1px;
            height: 50px;
            background: white;
            opacity: .4;
            &:nth-of-type(1) {top: -190px;left: 5%;animation: rain 10s infinite;}
            &:nth-of-type(2) {top: -180px;left: 10%;animation: rain 11s infinite;}
            &:nth-of-type(3) {top: -170px;left: 15%;animation: rain 8s infinite;}
            &:nth-of-type(4) {top: -160px;left: 20%;animation: rain 12s infinite;}
            &:nth-of-type(5) {top: -150px;left: 25%;animation: rain 10s infinite;}
            &:nth-of-type(6) {top: -150px;left: 30%;animation: rain 11s infinite;}
            &:nth-of-type(7) {top: -160px;left: 35%;animation: rain 13s infinite;}
            &:nth-of-type(8) {top: -170px;left: 40%;animation: rain 7s infinite;}
            &:nth-of-type(9) {top: -180px;left: 45%;animation: rain 9s infinite;}
            &:nth-of-type(10) {top: -190px;left: 50%;animation: rain 11s infinite;}
            &:nth-of-type(11) {top: -190px;left: 55%;animation: rain 10s infinite;}
            &:nth-of-type(12) {top: -180px;left: 60%;animation: rain 6s infinite;}
            &:nth-of-type(13) {top: -170px;left: 65%;animation: rain 14s infinite;}
            &:nth-of-type(14) {top: -160px;left: 70%;animation: rain 12s infinite;}
            &:nth-of-type(15) {top: -150px;left: 75%;animation: rain 10s infinite;}
            &:nth-of-type(16) {top: -150px;left: 80%;animation: rain 14s infinite;}
            &:nth-of-type(17) {top: -160px;left: 85%;animation: rain 8s infinite;}
            &:nth-of-type(18) {top: -170px;left: 90%;animation: rain 9s infinite;}
            &:nth-of-type(19) {top: -180px;left: 95%;animation: rain 11s infinite;}
            &:nth-of-type(20) {top: -190px;left: 100%;animation: rain 13s infinite;}
        }
    }
    @keyframes rain {
        0% {transform: translate(0,0);}
        4% {transform: translate(0,600px);}

        5% {transform: translate(200px,0);}
        9% {transform: translate(200px,600px);}

        10% {transform: translate(-100px,0);}
        14% {transform: translate(-100px,600px);}

        15% {transform: translate(-200px,0);}
        19% {transform: translate(-200px,600px);}

        20% {transform: translate(100px,0);}
        24% {transform: translate(100px,600px);}

        25% {transform: translate(-150px,0);}
        29% {transform: translate(-150px,600px);}

        30% {transform: translate(-80px,0);}
        34% {transform: translate(-80px,600px);}

        35% {transform: translate(150px,0);}
        39% {transform: translate(150px,600px);}

        40% {transform: translate(-60px,0);}
        44% {transform: translate(-60px,600px);}

        45% {transform: translate(90px,0);}
        49% {transform: translate(90px,600px);}

        50% {transform: translate(60px,0);}
        54% {transform: translate(60px,600px);}

        55% {transform: translate(-60px,0);}
        59% {transform: translate(-60px,600px);}

        60% {transform: translate(-40px,0);}
        64% {transform: translate(-40px,600px);}

        65% {transform: translate(40px,0);}
        69% {transform: translate(40px,600px);}

        70% {transform: translate(-20px,0);}
        74% {transform: translate(-20px,600px);}

        75% {transform: translate(-110px,0);}
        79% {transform: translate(-110px,600px);}

        80% {transform: translate(20px,0);}
        84% {transform: translate(20px,600px);}

        85% {transform: translate(-20px,0);}
        89% {transform: translate(-20px,600px);}

        90% {transform: translate(50px,0);}
        99% {transform: translate(50px,600px);}

        100% {transform: translate(0,0);}
}

</style>

<template>

<section class="infoArea">
    <h1 class="infoTitle">天気</h1>
    <ul class="infoDateTime">
        <li class="infoDate">日付</li>
        <li class="infoTime">時間</li>
    </ul>
    <ul v-if="weatherItem" class="infoList">
        <li class="infoListItem">天気{{weatherItem.weather[0].main}}</li>
        <li class="infoListItem">温度{{weatherItem.main.temp}}</li>
        <li class="infoListItem">湿度{{weatherItem.main.humidity}}</li>
        <li class="infoListItem">風速{{weatherItem.wind.speed}}</li>
        <li class="infoListItem">アイス</li>
        <li class="infoListItem">もっと詳しく！</li>
    </ul>
</section>

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

.infoArea{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background: white;
    width: 300px;
    padding: 10px 10px 0;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(40%*1500/2000);
    &::after{
        content: '';
        display: inline-block;
        width: 100px;
        height: 100px;
        background-image: url(/info.png);
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        bottom: -56px;
        right: -100px;
    }
}
.infoTitle{
    order: 2;
    text-align: center;
    font-size: 18px;
}
.infoDateTime{
    order: 1;
    display: flex;
    justify-content: flex-end;
    list-style: none;
    font-size: 14px;
}
.infoList{
    order: 3;
    list-style: none;
    margin-top: 14px;
}
.infoListItem{
    display: flex;
    padding: 14px;
    border-top: 1px #333 solid;
    line-height: 40px;
    font-size: 22px;
    &::before{
        content: '';
        display: block;
        background: pink;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 14px;
    }
}
    @media screen and (min-width:1200px){
        .infoArea{
            width: 320px;
            &::after{
                width: 120px;
                height: 120px;
                bottom: -66px;
                right: -120px;
            }
        }
        .infoTitle{
            font-size: 20px;
        }
        .infoDateTime{
            font-size: 16px;
        }
        .infoList{
            margin-top: 16px;
        }
        .infoListItem{
            padding: 16px;
            line-height: 42px;
            font-size: 24px;
            &::before{
                width: 42px;
                height: 42px;
                margin-right: 16px;
            }
        }
    }
    @media screen and (max-width:1000px){
        .infoArea{
            width: 260px;
            &::after{
                width: 60px;
                height: 60px;
                bottom: -33px;
                right: -60px;
            }
        }
        .infoTitle{
            font-size: 14px;
        }
        .infoDateTime{
            font-size: 10px;
        }
        .infoList{
            margin-top: 10px;
        }
        .infoListItem{
            padding: 10px;
            line-height: 36px;
            font-size: 18px;
            &::before{
                width: 36px;
                height: 36px;
                margin-right: 10px;
            }
        }
    }
    @media screen and (max-width:768px){
        .infoArea{
            left: 50px;
            right: auto;
            &::after{
                display: none;
            }
        }
    }
</style>

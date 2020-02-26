<template>

<section class="infoArea">
    <h1 class="infoTitle">天気</h1>
    <ul class="infoDateTime">
        <li class="infoDate">日付</li>
        <li class="infoTime">時間</li>
    </ul>
    <ul v-if="weatherItem" class="infoList">
        <li class="infoListItem">天気{{weatherItem.weather[0].main}}</li>
        <li class="infoListItem">{{TEMP_MESSAGE}}</li>
        <li class="infoListItem">{{HUMIDITY_MESSAGE}}</li>
        <li class="infoListItem">{{WIND_MESSAGE}}</li>
        <li class="infoListItem">アイス</li>
        <li class="infoListItem">もっと詳しく！</li>
    </ul>
</section>

</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
    computed: { //weatherItemが変わったら実行される
        TEMP_MESSAGE() {
            const temp = this.weatherItem && this.weatherItem.main.temp
            if(temp > 301.15) {
                return '暑い'
            } else if(temp > 296.15) {
                return 'ちょうど良い'
            } else if(temp > 288.15) {
                return '肌寒い'
            } else {
                return '寒い'
            }
        },
        HUMIDITY_MESSAGE() {
            const humidity = this.weatherItem && this.weatherItem.main.humidity
            if(humidity > 70) {
                return '湿度高い'
            } else if(humidity > 40) {
                return '湿度普通'
            } else {
                return '湿度低い'
            }
        },
        WIND_MESSAGE() {
            const speed = this.weatherItem && this.weatherItem.wind.speed
            if(speed > 10) {
                return '風強い！'
            } else if(speed > 3) {
                return '風普通'
            } else {
                return '風弱い'
            }
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
    z-index: 10;
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
            left: 6%;
            right: auto;
            top: calc(12%*1500/2000);
            bottom: auto;
            &::after{
                display: none;
            }
        }
    }
    @media screen and (max-width:500px){
        .infoArea{
            width: 160px;
        }
        .infoTitle{
            font-size: 12px;
        }
        .infoList{
            margin-top: 8px;
        }
        .infoListItem{
            padding: 8px;
            line-height: 20px;
            font-size: 14px;
            &::before{
                width: 20px;
                height: 20px;
                margin-right: 8px;
            }
        }
    }
</style>

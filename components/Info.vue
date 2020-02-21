<template>

<section class="infoArea">
    <h1 class="infoTitle">天気</h1>
    <ul class="infoDateTime">
        <li class="infoDate">日付</li>
        <li class="infoTime">時間</li>
    </ul>
    <ul class="infoList">
        <li class="infoListItem">天気</li>
        <li class="infoListItem">風量</li>
        <li class="infoListItem">湿度</li>
        <li class="infoListItem">アイス</li>
        <li class="infoListItem">もっと詳しく！</li>
    </ul>
</section>

</template>

<script>

import GnavItem from '~/components/GnavItem.vue'

export default {
    data(){
        return{
            globalNavItems:[{
                    link: '/',
                    label: 'トップ',
                    name: 'index'
                },
                {
                    link: '/about',
                    label: 'このサイトについて',
                    name: 'about'
                },
                {
                    link: '/profile',
                    label: 'プロフィール',
                    name: 'profile'
                }
            ]
        }
    },
    components: {
        GnavItem
    },
}

</script>

<style scoped>

.infoArea{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background: white;
    width: 28%;
    padding: 1% 1% 0;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(46%*1500/2000);
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
    font-size: 20px;
}
.infoDateTime{
    order: 1;
    display: flex;
    justify-content: flex-end;
    list-style: none;
    font-size: 16px;
}
.infoList{
    order: 3;
    list-style: none;
    margin-top: 16px;
}
.infoListItem{
    display: flex;
    padding: 16px;
    border-top: 1px #333 solid;
    line-height: 46px;
    font-size: 24px;
    &::before{
        content: '';
        display: block;
        background: pink;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        margin-right: 16px;
    }
}
    @media screen and (min-width:1375px){
        .infoArea::after{
            width: 120px;
            height: 120px;
            bottom: -66px;
            right: -120px;
        }
        .infoTitle{
            font-size: 24px;
        }
        .infoDateTime{
            font-size: 20px;
        }
        .infoList{
            margin-top: 20px;
        }
        .infoListItem{
            padding: 20px;
            line-height: 50px;
            font-size: 28px;
            &::before{
                width: 50px;
                height: 50px;
                margin-right: 20px;
            }
        }
    }
</style>

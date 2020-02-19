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
    width: 400px;
    padding: 10px 10px 0;
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 10;
}
.infoTitle{
    order: 2;
    text-align: center;
    font-size: 24px;
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
    margin-top: 20px;
}
.infoListItem{
    display: flex;
    padding: 20px;
    border-top: 1px #333 solid;
    line-height: 50px;
    font-size: 24px;
    &::before{
        content: '';
        display: block;
        background: pink;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
    }
}
</style>

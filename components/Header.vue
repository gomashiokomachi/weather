<template>

<header>
    <h1 class="testTitle">Header</h1>
    <ul class="gnav">
        <GnavItem v-for="navItem in globalNavItems" :href="navItem.link" 
        :selected="$route.name === navItem.name"
        :key="navItem.name"
        >
            {{navItem.label}}
        </GnavItem>
    </ul>
</header>

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

    .testTitle{
        font-size: 50px;
        margin: 20px;
    }

</style>

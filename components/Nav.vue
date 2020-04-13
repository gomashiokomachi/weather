<template>

<nav class="navArea">
    <ul class="navList">
        <li class="navItem"><nuxt-link class="gnavLink" to="/"><fa class="navIcon" :icon="faHome" />ホーム</nuxt-link></li>
        <li class="navItem modalBtn" @click="show = true"><fa class="navIcon" :icon="faMapMarkerAlt" />地域を変更</li>
    </ul>
    <Modal @close="show = false" v-if="show" />
</nav>

</template>

<script>

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Modal from '~/components/Modal.vue'

export default {
    components: {
        Modal
    },
    data () {
        return {
            show: false,
        }
    },
    computed: {
        faMapMarkerAlt: () => faMapMarkerAlt,
        faHome: () => faHome,
    }
}

</script>

<style>

    .navArea {
        margin: 100px auto auto;
    }
    .navList {
        list-style: none;
    }
    .navItem {
        font-size: 20px;
        font-weight: bold;
        & .navIcon {
            width: 40px;
        }
    }
    .gnavLink:link,
    .gnavLink:visited {
        text-decoration: none;
        color: black;
    }
    .gnavLink:hover {
        color: #B0BBD9;
    }
    .modalBtn {
        cursor: pointer;
        &:hover {
            color: #B0BBD9;
        }
    }

</style>

<template>

<nav class="navArea">
  <ul class="navList">
    <li class="navItem"><nuxt-link class="gnavLink" to="/"><fa class="navIcon" :icon="faHome" /><span>ホーム</span></nuxt-link></li>
    <li class="navItem modalBtn" @click="show = true"><fa class="navIcon" :icon="faMapMarkerAlt" /><span>地域を変更</span></li>
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
    padding-top: 100px;
    margin: 0 auto;
  }
  .navList {
    list-style: none;
  }
  .navItem {
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
    &:first-of-type {
      margin-top: 0;
    }
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

  @media screen and (max-width:1024px) {
    .navArea {
      padding-top: 30px;
    }
    .navItem {
      font-size: 30px;
      & span {
        display: none;
      }
    }
  }
  @media screen and (max-width:480px) {
    .navArea {
      background: white;
      width: 100vw;
      padding: 10px 0;
      border-top: 1px gray solid;
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 40;
    }
    .navList {
      display: flex;
      justify-content: space-around;
    }
    .navItem {
      margin-top: 0;
    }
  }

</style>
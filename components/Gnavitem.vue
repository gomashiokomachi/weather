<template>

    <li><nuxt-link :to="href" :class="['gnav-link', {on: selected}]"><slot /></nuxt-link></li>

</template>

<script>

export default {
    props: {
        href: String,
        selected: Boolean
    }
}

</script>

<style scoped>

    .gnav-link {
        color: black;
        background: #ccc;
    }
    .on{
        color: black;
        background: red;
    }

</style>

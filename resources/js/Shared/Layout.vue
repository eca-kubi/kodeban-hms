<template>
    <main>
        <header>
            <inertia-link href="/">Home</inertia-link>
            <inertia-link href="/about">About</inertia-link>
            <inertia-link href="/contact">Contact</inertia-link>
        </header>

        <article>
            <slot/>
        </article>
    </main>
</template>

<script>


import {Head, Link} from "@inertiajs/inertia-vue3";

export default {
    props: [

    ],
    name: "Layout",
    components: {
    }
}
</script>

<style scoped>

</style>

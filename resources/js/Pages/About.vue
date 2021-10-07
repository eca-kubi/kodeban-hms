<template>
    <Head title="About"></Head>
    <layout>
        <div>
            This is a the about page {{ foo }}
        </div>
    </layout>
</template>

<script>

    import Layout from "../Shared/Layout";
    import {Head} from "@inertiajs/inertia-vue3";

    export default {
        props: [
            'foo',
            'title'
        ],
        components: {
            Layout,
            Head
        }
    }
</script>

<template>
    <div class="video">
        <h1 class="video__title">{{ title }}</h1>
        <iframe
            class="video__iframe"
            type="text/html"
            width="640"
            height="360"
            :src="url"
            frameborder="0"
        />
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: false
        }
    },
    data: () => ({

    }),
    computed: {
        url() {
            return `http://www.youtube.com/embed/${this.id}?autoplay=1`;
        }
    }
}
</script>

<style lang="scss">

</style>

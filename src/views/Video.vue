<template>
    <div class="video">
        <h1 class="video__title">{{ title }}</h1>
        <iframe
            class="video__iframe"
            type="text/html"
            width="100%"
            height="524"
            :src="url"
            frameborder="0"
        />
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('fetchVideoDetails', this.id);
    },
    destroyed() {
        this.$destroy();
        this.$store.dispatch('clearVideoTitle');
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        url() {
            return `http://www.youtube.com/embed/${this.id}?autoplay=1`;
        },
        title() {
            return this.$store.getters.videoTitle;
        }
    }
}
</script>

<style lang="scss">
.video {
    &__title {
        margin-top: 0;
    }
}
</style>

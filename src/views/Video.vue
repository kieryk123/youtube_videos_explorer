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
        this.fetchVideoDetails();
    },
    deactivated() {
        this.$destroy();
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data: () => ({
        title: ''
    }),
    methods: {
        fetchVideoDetails() {
            const searchUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&type=video&id=${this.id}&key=AIzaSyDdk4T-3uzGQUS1C0STzF6VZCMK-0fNIiM`;

            fetch(searchUrl)
                .then(response => response.json())
                .then(response => {
                    this.title = response.items[0].snippet.title;
                });
        }
    },
    computed: {
        url() {
            return `http://www.youtube.com/embed/${this.id}?autoplay=1`;
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

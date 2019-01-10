<template>
    <div class="home">
        <div class="home__results-wrapper">
            <SearchResult v-for="result in searchResults"
                :thumbnail="result.thumbnailUrl"
                :title="result.title"
                :author="result.author"
                :description="result.description"
            >
            </SearchResult>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../main';
import SearchResult from '../components/SearchResult.vue';

export default {
    data: () => ({
        searchQuery: 'awesome+music',
        searchResults: []
    }),
    created() {
        this.fetchResults();
        eventBus.$on('onSearchFormSubmit', (response) => this.fetchResults(response.searchQuery));
    },
    methods: {
        fetchResults(searchQuery = this.searchQuery) {
            const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&&type=video&key=AIzaSyDdk4T-3uzGQUS1C0STzF6VZCMK-0fNIiM`;

            fetch(searchUrl)
                .then(response => response.json())
                .then(response => this.pushResultsToData(response.items));
        },
        pushResultsToData(arrayOfResults) {
            this.searchResults = [];

            arrayOfResults.forEach((result) => {
              const title = result.snippet.title;
              const author = result.snippet.channelTitle;
              const description = result.snippet.description;
              const thumbnailUrl = result.snippet.thumbnails.medium.url;
              const videoUrl = `https://youtu.be/${result.id.videoId}`;

              this.searchResults.push({
                title,
                author,
                description,
                thumbnailUrl,
                videoUrl
              });
            });
        }
    },
    components: {
        SearchResult
    }
}
</script>

<style lang="scss">

</style>

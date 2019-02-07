<template>
    <div class="home">
        <div class="home__results-wrapper">
            <transition-group name="result-fade" mode="out-in">
                <SearchResult v-for="result in searchResults"
                    :key="result.id"
                    :id="result.id"
                    :thumbnail="result.thumbnailUrl"
                    :title="result.title"
                    :author="result.author"
                    :description="result.description"
                />
            </transition-group>
        </div>
        <div class="home__pagination-wrapper">
            <PaginationNav
                :nextPageToken="nextPageToken"
                :prevPageToken="prevPageToken"
            />
        </div>
    </div>
</template>

<script>
import { eventBus } from '../main';
import SearchResult from '../components/SearchResult.vue';
import PaginationNav from '../components/PaginationNav.vue';

export default {
    created() {
        eventBus.$on('onSearchFormSubmit', (response) => this.handleSearchFormSubmit(response));
        eventBus.$on('onPageChange', (response) => this.handlePageChange(response));
        eventBus.$emit('onRouteChange');
        this.fetchResults();
    },
    data: () => ({
        searchQuery: '',
        searchResults: [],
        pageToken: '',
        nextPageToken: '',
        prevPageToken: ''
    }),
    methods: {
        fetchResults(searchQuery = this.searchQuery) {
            let searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&type=video&key=AIzaSyDdk4T-3uzGQUS1C0STzF6VZCMK-0fNIiM`;

            if (this.pageToken != '') {
                searchUrl += `&pageToken=${this.pageToken}`;
            }

            fetch(searchUrl)
                .then(response => response.json())
                .then(response => this.pushResultsToData(response));
        },
        pushResultsToData(response) {
            const arrayOfResults = response.items;

            // set page tokens
            this.nextPageToken = response.nextPageToken;
            this.prevPageToken = response.prevPageToken;

            // clear results array
            this.searchResults = [];

            arrayOfResults.forEach((result) => {
              const title = result.snippet.title;
              const author = result.snippet.channelTitle;
              const description = result.snippet.description;
              const thumbnailUrl = result.snippet.thumbnails.medium.url;
              const id = result.id.videoId;

              this.searchResults.push({
                title,
                author,
                description,
                thumbnailUrl,
                id
              });
            });
        },
        changePage(pageToken) {
            this.updatePageToken(pageToken);
            this.fetchResults();
        },
        updateSearchQuery(searchQuery) {
            this.searchQuery = searchQuery;
        },
        updatePageToken(pageToken) {
            this.pageToken = pageToken;
        },
        handleSearchFormSubmit(response) {
            this.updatePageToken('');
            this.updateSearchQuery(response.searchQuery);
            this.fetchResults(response.searchQuery);
        },
        handlePageChange(response) {
            this.changePage(response.pageToken)
        }
    },
    components: {
        SearchResult,
        PaginationNav
    }
}
</script>

<style lang="scss">
.home {
    &__results-wrapper {
        min-height: 1000px;
    }

    &__pagination-wrapper {
        padding-top: 10px;
    }
}
</style>

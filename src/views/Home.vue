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
import SearchResult from '../components/SearchResult.vue';
import PaginationNav from '../components/PaginationNav.vue';

export default {
    created() {
        this.$store.dispatch('fetchSearchResults');
    },
    computed: {
        searchResults() {
            return this.$store.getters.searchResults;
        },
        prevPageToken() {
            return this.$store.getters.prevPageToken;
        },
        nextPageToken() {
            return this.$store.getters.nextPageToken;
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

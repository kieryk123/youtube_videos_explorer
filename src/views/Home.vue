<template>
    <div class="home">
        <div class="home__results-wrapper">
            <SearchResult
                :thumbnail="'http://placehold.it/210x130'"
                :title="'Video title'"
                :author="'Video author'"
                :description="'Video description'"
            >
            </SearchResult>
            <SearchResult
                :thumbnail="'http://placehold.it/210x130'"
                :title="'Video title 2'"
                :author="'Video author 2'"
                :description="'Video description 2'"
            >
            </SearchResult>
        </div>
    </div>
</template>

<script>
import SearchResult from '../components/SearchResult.vue';

export default {
    data: () => ({

    }),
    components: {
        SearchResult
    }
}
</script>

<style lang="scss">

</style>

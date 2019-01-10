<template>
    <div class="search-result">
        <img :src="thumbnail" alt="" class="search-result__thumbnail">
        <div class="search-result__content">
            <p class="search-result__title">{{ title }}</p>
            <p class="search-result__author">{{ author }}</p>
            <p v-if="description" class="search-result__description">{{ description }}...</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        thumbnail: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        }
    },
    data: () => ({

    })
}
</script>

<style lang="scss">
.search-result {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid rgba(#282828, 0.4);

    &:last-child {
        border: 0;
    }

    &:hover {
        cursor: pointer;
    }

	&__thumbnail {
        width: 210px;
        height: auto;
	}

	&__content {
        flex-basis: calc(100% - 210px);
        padding: 0 20px 0 20px;
	}

	&__title {
        color: #282828;
        font-weight: 700;
        font-size: 18px;
        margin-top: 0;
        margin-bottom: 0;
	}

	&__author {
        color: #282828;
        font-size: 14px;
        margin-top: 3px;
        margin-bottom: 10px;
	}

	&__description {
        color: #282828;
        font-size: 16px;
        margin-top: 0;
        margin-bottom: 5px;
	}
}
</style>

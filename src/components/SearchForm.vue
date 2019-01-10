<template>
    <form v-on:submit.prevent="onSubmit" class="search-form">
        <input
            v-model="searchQuery"
            class="search-form__input"
            type="text"
            placeholder="Search Youtube"
        >
        <input
            class="search-form__submit"
            type="submit"
            value=""
        >
    </form>
</template>

<script>
import { eventBus } from '../main';

export default {
    data: () => ({
        searchQuery: ''
    }),
    methods: {
        onSubmit() {
            eventBus.$emit('onSearchFormSubmit', {
                searchQuery: this.searchQuery.split(' ').join('+')
            });
        }
    }
}
</script>

<style lang="scss">
.search-form {
    display: block;

    &__input {
        height: 38px;
        font-size: 16px;
        padding: 3px 10px;
        border: 1px solid rgba(#282828, 0.3);
        outline: 0;
        box-shadow: none;
        color: #282828;
        vertical-align: middle;
    }

    &__submit {
        height: 38px;
        width: 38px;
        vertical-align: middle;
        border: 1px solid rgba(#282828, 0.3);
        border-left: 0;
        background-color: rgba(#282828, 0.05);
        transform: translateX(-1px);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 60%;
        background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDYzMi4zOTkgNjMyLjM5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjMyLjM5OSA2MzIuMzk5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI1NS4xMDgsMEMxMTkuODYzLDAsMTAuMjA0LDEwOS42NiwxMC4yMDQsMjQ0LjkwNGMwLDEzNS4yNDUsMTA5LjY1OSwyNDQuOTA1LDI0NC45MDQsMjQ0LjkwNSAgIGM1Mi4wMDYsMCwxMDAuMjM4LTE2LjIyMywxMzkuODgzLTQzLjg1NGwxODUuMjA1LDE4NS4xNzZjMS42NzEsMS42NzIsNC4zNzksMS42NzIsNS45NjQsMC4xMTVsMzQuODkyLTM0Ljg5MSAgIGMxLjYxMy0xLjYxMywxLjQ3LTQuMzc5LTAuMTE1LTUuOTY1TDQzOC4xNTEsNDA3LjYwNWMzOC40OTMtNDMuMjQ2LDYxLjg2LTEwMC4yMzcsNjEuODYtMTYyLjcwMiAgIEM1MDAuMDEyLDEwOS42NiwzOTAuMzUzLDAsMjU1LjEwOCwweiBNMjU1LjEwOCw0NjAuOTk2Yy0xMTkuMzQsMC0yMTYuMDkyLTk2Ljc1Mi0yMTYuMDkyLTIxNi4wOTIgICBjMC0xMTkuMzQsOTYuNzUxLTIxNi4wOTEsMjE2LjA5Mi0yMTYuMDkxczIxNi4wOTEsOTYuNzUxLDIxNi4wOTEsMjE2LjA5MUM0NzEuMTk5LDM2NC4yNDQsMzc0LjQ0OCw0NjAuOTk2LDI1NS4xMDgsNDYwLjk5NnoiIGZpbGw9IiM4MjgyODIiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);

        &:hover {
            cursor: pointer;
        }
    }
}
</style>

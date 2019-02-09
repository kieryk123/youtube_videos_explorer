<template>
    <div class="pagination-nav">
        <button
            class="pagination-nav__btn pagination-nav__btn--prev"
            :class="disabledPrevClass"
            @click="onPageChange(prevPageToken)"
        ></button>
        <button
            class="pagination-nav__btn pagination-nav__btn--next"
            :class="disabledNextClass"
            @click="onPageChange(nextPageToken)"
        ></button>
    </div>
</template>

<script>
export default {
    props: {
        prevPageToken: {
            type: String,
            required: false
        },
        nextPageToken: {
            type: String,
            required: false
        }
    },
    methods: {
        onPageChange(pageToken) {
            if (pageToken) {
                this.$store.dispatch('updatePageToken', pageToken);
                this.$store.dispatch('fetchSearchResults');
            }
        }
    },
    computed: {
        disabledPrevClass() {
            if (!this.prevPageToken) {
                return 'pagination-nav__btn--disabled';
            }
        },
        disabledNextClass() {
            if (!this.nextPageToken) {
                return 'pagination-nav__btn--disabled';
            }
        }
    }
}
</script>

<style lang="scss">
.pagination-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__btn {
        display: block;
        width: 40px;
        height: 40px;
        background-color: rgba(#282828, 0.05);
        border: 1px solid rgba(#282828, 0.3);
        transition: .1s background-color ease-in-out;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 60%;
        background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI2OC44MzIgMjY4LjgzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjY4LjgzMiAyNjguODMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI2NS4xNzEsMTI1LjU3N2wtODAtODBjLTQuODgxLTQuODgxLTEyLjc5Ny00Ljg4MS0xNy42NzgsMGMtNC44ODIsNC44ODItNC44ODIsMTIuNzk2LDAsMTcuNjc4bDU4LjY2MSw1OC42NjFIMTIuNSAgIGMtNi45MDMsMC0xMi41LDUuNTk3LTEyLjUsMTIuNWMwLDYuOTAyLDUuNTk3LDEyLjUsMTIuNSwxMi41aDIxMy42NTRsLTU4LjY1OSw1OC42NjFjLTQuODgyLDQuODgyLTQuODgyLDEyLjc5NiwwLDE3LjY3OCAgIGMyLjQ0LDIuNDM5LDUuNjQsMy42NjEsOC44MzksMy42NjFzNi4zOTgtMS4yMjIsOC44MzktMy42NjFsNzkuOTk4LTgwQzI3MC4wNTMsMTM4LjM3MywyNzAuMDUzLDEzMC40NTksMjY1LjE3MSwxMjUuNTc3eiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);

        &:hover {
            cursor: pointer;
            background-color: rgba(#282828, 0.08);
        }

        &--prev {
            transform: rotate(180deg);
        }

        &--disabled {
            opacity: 0.3;

            &:hover {
                cursor: not-allowed;
                background-color: rgba(#282828, 0.05);
            }
        }
    }
}
</style>

<template>
    <nav class="menu">
        <ul class="menu__list">
            <router-link
                v-for="item in menuItems"
                class="menu__item"
                :to="item.to"
                :tag="item.tag"
                active-class="menu__item--active"
                exact
            >
                <a class="menu__link" href="#">{{ item.name }}</a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
import SearchForm from './SearchForm.vue';

export default {
    data: () => ({
        menuItems: [
            {
                to: '/',
                tag: 'li',
                name: 'Home'
            },
            {
                to: '/about',
                tag: 'li',
                name: 'About'
            }
        ]
    })
}
</script>

<style lang="scss">
.menu {
    display: block;
    width: 100%;

    &__list {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    &__item {
        display: inline-block;

        &--active {
            color: black;
            font-weight: 600;
        }
    }

    &__link {
        font-size: 18px;
        text-decoration: none;
        color: #282828;
        padding: 5px 10px;
        margin: 0 5px;
    }
}
</style>

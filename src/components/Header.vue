<template>
    <header class="header">
        <div class="header__content-row">
            <div class="header__logo">Videos <span>Explorer</span></div>
            <div class="header__content-wrapper">
                <SearchForm/>
            </div>
        </div>
        <div class="header__nav-row">
            <Menu/>
        </div>
    </header>
</template>

<script>
import SearchForm from './SearchForm.vue';
import Menu from './Menu.vue';

export default {
    components: {
        SearchForm,
        Menu
    }
}
</script>

<style lang="scss">
.header {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #f4f4f4;
    padding: 30px;

    &__content-row {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    &__nav-row {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    &__logo {
        font-size: 30px;
        font-weight: 600;
        color: #282828;

        & > span {
            color: #ff0000;
        }
    }
}

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

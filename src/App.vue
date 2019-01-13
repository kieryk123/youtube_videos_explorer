<template>
    <div class="app">
        <Header/>
        <main>
            <keep-alive>
                <transition name="fade" mode="out-in">
                    <router-view/>
                </transition>
            </keep-alive>
        </main>
    </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
    components: {
      Header
    }
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

body {
    padding: 0;
    margin: 0;
    background-color: #e1e1e1;
    color: #282828;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
}

main {
    padding: 30px;
    background-color: white;
}

.app {
    max-width: 992px;
    margin: 0 auto;
}

.fade-leave-active {
    transition: opacity .2s ease;
    opacity: 0;
    animation: fade-out .2s ease-out forwards;
}

.fade-leave {
    opacity: 1;
}

.fade-enter-active {
    animation: fade-in .2s ease-out forwards;
}

.result-fade-leave-active {
    position: absolute;
    transition: opacity .2s ease;
    opacity: 0;
    animation: fade-out .2s ease-out forwards;
}

.result-fade-leave {
    opacity: 1;
}

.result-fade-enter-active {
    animation: fade-in .2s ease-out forwards;
}

@keyframes fade-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>

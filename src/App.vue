<template>
    <div class="app">
        <Header></Header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
    data: () => ({

    }),
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
</style>

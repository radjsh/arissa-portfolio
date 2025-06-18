<template>
    <div id="app">
        <div class="view-container">
            <Navigation />
            <router-view/>
        </div>
    </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
    name: "App",
    components: {
        Navigation
    },
    created() {
    },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 0px;
  cursor: url('../src/assets/pencil-cursor.svg'), auto;
}

</style>
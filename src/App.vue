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
    console.log("Test");
    },
}
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 0px;
  cursor: url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23a3ad80;%7D.cls-2%7Bfill:%23858e69;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M12.08,6.1c1.69,3.63-1,8.47-1,8.47s-5.45-1-7.14-4.67,1-8.47,1-8.47S10.39,2.47,12.08,6.1Z'/%3E%3Cpath class='cls-2' d='M11.06,15.57l-.18,0c-.25,0-6-1.18-7.86-5.23s.92-9.16,1-9.38A1,1,0,0,1,5.12.45c.25,0,6,1.18,7.86,5.23h0c1.89,4-.92,9.16-1,9.38A1,1,0,0,1,11.06,15.57Zm-5.58-13C4.87,4,3.72,7.09,4.83,9.48S9.09,13,10.52,13.41c.61-1.36,1.76-4.5.65-6.89S6.91,3,5.48,2.59Z'/%3E%3Cpath class='cls-1' d='M8,7.38a17.45,17.45,0,0,1,3.06,7.19'/%3E%3Cpath class='cls-2' d='M11.06,15.57a1,1,0,0,1-1-.88A16.7,16.7,0,0,0,7.2,8a1,1,0,0,1,1.6-1.2,18.52,18.52,0,0,1,3.26,7.67,1,1,0,0,1-.88,1.11Z'/%3E%3C/svg%3E"), default;
}

</style>
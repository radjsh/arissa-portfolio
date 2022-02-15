<template>
    <section :class="[mobileView ? 'card-m' : 'card']">
        <img :class="[mobileView ? 'image-m' : 'image']" :src="canvas.src">
    </section>
</template>

<script>
export default {
    name: 'gallery-canvas',
    props: ['canvas'],

    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },

    data () {
        return {
            mobileView: null,
            windowWidth: null
        }
    },

    methods: {
        checkScreen () {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750){
                this.mobileView= true;
                return;
            }
            this.mobileView = false;
        },
    }
}
</script>

<style scoped>
.image {
    width: 410px;
    height: auto;
    border-radius: 10px;
    margin-right: 24px;
}

.image-m {
    width: 200px;
    height: auto;
    border-radius: 10px;
    margin-right: 12px;
}
</style>

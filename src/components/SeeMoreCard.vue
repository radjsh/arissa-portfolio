<template>
    <div class="card">
        <router-link :to="{name: category.path}" @click="onClickSeeMore">
            <img :class="[mobileView ? 'image-m' : 'image']" :src="category.src">
        </router-link>
        <div class="text">
            <div :class="[mobileView ? 'title-m' : 'title']">{{ category.title }}</div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'see-more-card',
    props: ['category'],

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
        onClickSeeMore () {
            window.scrollTo(0, 0);
        },

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

@font-face {
  font-family: "Futura-Book";
  src: local("Futura-Book"),
   url("../fonts/Futura-Book-font.ttf") format("truetype");
  color: #2F2A1B;
}

.title {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    margin-top: 12px;
    text-align: left;
}

.title-m {
    font-family: 'Futura-Med';
    font-size: 12px;
    margin-top: 12px;
    text-align: left;
}

.image {
    width: 410px;
    height: auto;
    border-radius: 20px;
}

.image-m {
    width: 200px;
    height: auto;
    border-radius: 10px;
}

.card {
    flex: 1 1 50%;
    width: 410px;
    height: auto;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 12px;
    transition: 0.3s ease-in-out all;
    z-index: 5;
}

.card:hover {
    transform: translateY(-12px);
}
</style>

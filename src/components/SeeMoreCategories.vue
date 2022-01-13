<template>
    <section :class="[mobileView ? 'see-more-m' : 'see-more']">
        <see-more-card 
        v-for="category in categories"
        :key="category.title"
        :category="category"/>
    </section>
    
</template>

<script>
import SeeMoreCard from './SeeMoreCard.vue';

export default {
  components: { SeeMoreCard },
    name: "see-more-categories",
    props: ['pageType'],
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
      },

    data () {
        return {
            categories: [
                {
                    title: 'The Walt Disney Company, APAC',
                    src: require("@/assets/portfolio-categories/disney.svg"),
                    path: 'disney',
                },
                {
                    title: 'Shopee, Singapore',
                    src: require("@/assets/portfolio-categories/shopee.svg"),
                    path: 'shopee',
                },
                {
                    title: '30 days of UI challenge',
                    src: require("@/assets/portfolio-categories/30daysofuichallenge.svg"),
                    path: '',
                },
                {
                    title: 'Logos & Icons',
                    src: require("@/assets/portfolio-categories/logos.svg"),
                    path: 'logos-and-icons',
                },
                {
                    title: 'Telegram Stickers',
                    src: require("@/assets/portfolio-categories/telegram-sticker.svg"),
                    path: 'telegram-stickers',
                },
                {
                    title: 'Posters',
                    src: require("@/assets/portfolio-categories/posters.svg"),
                    path: 'posters',
                },
                {
                    title: 'Paintings',
                    src: require("@/assets/portfolio-categories/paintings.svg"),
                    path: 'paintings',
                },
                {
                    title: 'Digital Illustrations',
                    src: require("@/assets/portfolio-categories/digital-illustrations.svg"),
                    path: 'digital-illustrations',
                },
            ],
            mobileView: null,
            windowWidth: null,
        }
    },

    methods : {
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
.see-more {
    display: flex;
    flex: 1 1 40%;
    overflow: auto;
    white-space: nowrap;
    margin-left: 48px;
    margin-top: 24px;
}

.see-more-m {
    display: flex;
    flex: 1 1 40%;
    overflow: auto;
    white-space: nowrap;
    margin-left: 12px;
    margin-top: 24px;
}

::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
</style>
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
        this.toDisplay();

      },

    data () {
        return {
            categories: [
                {
                    title: 'CNN Scrollytelling Sites',
                    src: require("@/assets/portfolio-categories/cnn.jpg"),
                    path: 'cnn',
                },
                {
                    title: 'The Walt Disney Company',
                    src: require("@/assets/portfolio-categories/disney.jpg"),
                    path: 'disney',
                },
                {
                    title: 'LTA Move Lite Campaign',
                    src: require("@/assets/portfolio-categories/lta.jpg"),
                    path: 'lta',
                },
                {
                    title: 'Worm Squirm Typeface',
                    src: require("@/assets/portfolio-categories/worm-squirm.jpg"),
                    path: 'wormsquirm',
                },
                {
                    title: 'Samsung x Casetify',
                    src: require("@/assets/portfolio-categories/samsungxcasetify.jpg"),
                    path: 'samsung',
                },
                {
                    title: 'Shopee UI/UX',
                    src: require("@/assets/portfolio-categories/shopee.jpg"),
                    path: 'shopee',
                },
                {
                    title: 'Hop App',
                    src: require("@/assets/portfolio-categories/hop.jpg"),
                    path: 'hop',
                },
                {
                    title: '2022 SUTD Yearbook',
                    src: require("@/assets/portfolio-categories/yearbook.jpg"),
                    path: 'yearbook',
                },
                {
                    title: '30 days of UI challenge',
                    src: require("@/assets/portfolio-categories/30daysofuichallenge.svg"),
                    path: 'ui-challenge',
                },
                {
                    title: 'Logos & Icons',
                    src: require("@/assets/portfolio-categories/logos.svg"),
                    path: 'logos-and-icons',
                },
                {
                    title: 'Telegram Stickers',
                    src: require("@/assets/portfolio-categories/tele.jpg"),
                    path: 'telegram-stickers',
                },
                {
                    title: 'Digital Illustrations',
                    src: require("@/assets/portfolio-categories/digital-illustrations.svg"),
                    path: 'digital-illustrations',
                },
            ],
            display: [],
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
        toDisplay() {
            this.display = this.categories;
            for (let i = 0; i < this.categories.length; i++){
                if (this.categories[i].path == this.pageType){
                    this.display.splice(i, 1);
                }
            }
            return this.display;
        }
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
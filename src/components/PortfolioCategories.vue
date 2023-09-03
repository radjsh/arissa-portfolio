<template>
    <section class="category">
        <portfolio-card class="reveal"
        v-for="category in categories"
        :key="category.title"
        :category="category"/>
    </section>
    
</template>

<script>
import PortfolioCard from './PortfolioCard.vue';

export default {
    components: { PortfolioCard },
    name: "portfolio-categories",
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
        window.addEventListener('scroll', this.reveal);
      },

    data () {
        return {
            categories: [
                {
                    title: 'CNN Scrollytelling Sites',
                    subheader: 'website design',
                    src: require("@/assets/portfolio-categories/cnn.jpg"),
                    path: 'cnn',
                },
                {
                    title: 'The Walt Disney Company, APAC',
                    subheader: 'graphic design & creative marketing',
                    src: require("@/assets/portfolio-categories/disney.jpg"),
                    path: 'disney',
                },
                {
                    title: 'Shopee, Singapore',
                    subheader: 'ui/ux design & prototyping',
                    src: require("@/assets/portfolio-categories/shopee.jpg"),
                    path: 'shopee',
                },
                {
                    title: 'Hop App, Singapore',
                    subheader: 'ui/ux design & prototyping',
                    src: require("@/assets/portfolio-categories/hop.jpg"),
                    path: 'hop',
                },
                {
                    title: '2022 SUTD Yearbook',
                    subheader: 'editorial design',
                    src: require("@/assets/portfolio-categories/yearbook.jpg"),
                    path: 'yearbook',
                },
                {
                    title: '30 days of UI challenge',
                    subheader: 'ui/ux design & graphic design',
                    src: require("@/assets/portfolio-categories/30daysofuichallenge.svg"),
                    path: 'ui-challenge',
                },
                {
                    title: 'Logos & Icons',
                    subheader: 'graphic design',
                    src: require("@/assets/portfolio-categories/logos.svg"),
                    path: 'logos-and-icons',
                },
                {
                    title: 'Telegram Stickers',
                    subheader: 'illustrations, graphic design & animation',
                    src: require("@/assets/portfolio-categories/tele.jpg"),
                    path: 'telegram-stickers',
                },
                {
                    title: 'Posters',
                    subheader: 'graphic design',
                    src: require("@/assets/portfolio-categories/posters.svg"),
                    path: 'posters',
                },
                {
                    title: 'Digital Illustrations',
                    subheader: 'graphic design & digital illustration',
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
        reveal () {
            var reveals = document.querySelectorAll(".reveal")

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 200;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }               
            }           
        },
    }
}
</script>

<style scoped>
.category {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    }

.reveal {
    position: relative;
    transform: translateY(100px);
    opacity: 0;
    transition: 1s all ease;
}

.reveal.active{
  transform: translateY(0);
  opacity: 1;
}
</style>
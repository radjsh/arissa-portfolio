<template>
    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <img src="@/assets/ui-challenge/ui-challenge-banner.svg" :class="[mobileView ? 'banner-m' : 'banner']">
        <div class="heading">
            <header :class="[mobileView ? 'header-m' : 'header']">30 Days of UI Challenge</header>
            <p :class="[mobileView ? 'subheader-posters-m' : 'subheader-posters']">UI/UX Design</p>
        </div>
        <div class="row specs-row" v-if="!mobileView">
            <div class="col l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Project Type:</p></li>
                    <li><p class="specs-list">Personal</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Strategies:</p></li>
                    <li><p class="specs-list">Research, UI/UX Design and Graphic Design </p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">May 2019 - Jan 2022</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Tools Used:</p></li>
                    <li><p class="specs-list">Adobe Illustrator and Figma</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Project Type:</text> Personal</p>
            <p class="specs-list-m"><text class="specs-title-m">Strategies:</text> Research, UI/UX Design and Graphic Design</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> May 2019 - Jan 2022</p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Adobe Illustrator and Figma</p>
        </div>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
            To build up my ui/ux vocabulary, I challenged myself to design 30 different prompts. I practiced creating designs for both mobile and desktop, with emphasis on simplicity, clarity and coherence. I took the chance to experiment with bold and unique elements, while still keeping functionality in mind.
        </div>
        <section class="posters">
            <poster v-for="poster in posters" :key="poster.title" :poster="poster"></poster>
        </section>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
            To view the entire challenge, check out my <b><a class="link-style" href="https://dribbble.com/arissa/collections/4198970-30-days-of-UI-challenge" target="_blank">dribbble collection</a></b>!
        </div>
        <div class="see-more-div">
            <text :class="[mobileView ? 'sm-title-m' : 'sm-title']">See More Projects</text> 
            <see-more-categories/>
        </div>
        <contact-me/>
    </div>
</template>

<script>
import Poster from "../components/Poster.vue";
import SeeMoreCategories from "../components/SeeMoreCategories.vue";
import ContactMe from "../components/ContactMe.vue";

export default ({
    name: "ui-challenge",
    components: { Poster, SeeMoreCategories, ContactMe },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
        window.addEventListener('scroll', this.reveal);
    },

    data () {
        return {
            mobileView: null,
            windowWidth: null,
            posters: [
                { 
                    title: "Day 01: Sign Up / Login Page, App UI",
                    src: require("@/assets/ui-challenge/day1.svg")
                },
                { 
                    title: "Day 08: Settings, Web UI",
                    src: require("@/assets/ui-challenge/day8.svg")
                }, 
                { 
                    title: "Day 11: Pomodoro Timer, App UI",
                    src: require("@/assets/ui-challenge/day11.svg")
                },  
                { 
                    title: "Day 12: News Article, App UI",
                    src: require("@/assets/ui-challenge/day12.svg")
                },  
                { 
                    title: "Day 15: Ecommerce Item, Web UI",
                    src: require("@/assets/ui-challenge/day15.svg")
                },  
                { 
                    title: "Day 18: Food Delivery, App UI",
                    src: require("@/assets/ui-challenge/day18.svg")
                },  
                { 
                    title: "Day 19: Bus Timing, App UI",
                    src: require("@/assets/ui-challenge/day19.svg")
                },                                                              
            ],
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
            console.log("Scrolling")
            var reveals = document.querySelectorAll(".reveal")

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
}
            }           
        },
    }
})
</script>

<style scoped>
@font-face {
  font-family: "Futura-Med";
  src: local("Futura-Med"),
   url("../fonts/Futura-medium-bt.ttf") format("truetype");
  color: #2F2A1B;
}

.banner {
    margin-top: 20px;
}

.banner-m {
    margin-top: 24px;
    height: 100px;
    width: 100%;
    overflow: 0;
}

.header {
    font-family: "Josefin Sans", sans-serif;
    font-size: 36px;
    margin-top: 64px;
}

.header-m {
    font-family: "Futura-Med";
    font-size: 24px;
    margin-top: 36px;   
}

.subheader-posters {
    font-family: "Futura-Book";
    margin-top: 12px;
}

.subheader-posters-m {
    font-family: "Futura-Book";
    font-size: 14px;
    margin-top: 12px;
}

ul {
    display: block;
    list-style-type: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}

.specs-row {
    margin-top: 48px;
    display: flex;
    justify-content: center;
}

.specs {
    margin-left: 24px;
    margin-right: 24px;
    text-align: start;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
}

col {
    text-align: left;
}

.col-list {
    margin-top: 24px;
    text-align: start;
    margin-left: 24px;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.specs-title, .specs-list {
    margin: 12px 0;
}

.specs-title {
    font-family: "Josefin Sans", sans-serif;
    font-size: 18px;
}

.specs-title-m {
    font-family: "Futura-Med";
    font-size: 14px;
}

.specs-list {
    font-family: "Futura-Book";
    font-size: 18px;
}

.specs-list-m {
    font-family: "Futura-Book";
    font-size: 14px;
}

.introduction {
    font-family: "Futura-Book";
    font-size: 18px;
    margin-top: 48px;
    text-align: start;
    margin-left: 148px;
    margin-right: 148px;
}

.introduction-m {
    font-family: "Futura-Book";
    margin: 24px 24px 0px 24px;
    text-align: start;
    font-size: 14px;
}

.see-more-div{
    text-align: start;
    margin-top: 100px;
}

.sm-title {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 24px;
    margin-left: 48px;
}

.sm-title-m {
    font-family: 'Futura-Med';
    font-size: 16px;
    margin-left: 24px;
}

a {
    color: #EA4C89;
}

a:hover {
   color: #ED9DC1; 
}
</style>
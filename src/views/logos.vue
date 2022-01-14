<template>
    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <img src="@/assets/logos/logos-banner.svg" :class="[mobileView ? 'banner-m' : 'banner']">
        <div class="heading">
            <header :class="[mobileView ? 'header-m' : 'header']">Logos and Icons</header>
            <p :class="[mobileView ? 'subheader-posters-m' : 'subheader-posters']">Freelance, UI/UX Design and Graphic Design</p>
        </div>
        <div class="row specs-row" v-if="!mobileView">
            <div class="col l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Project Type:</p></li>
                    <li><p class="specs-list">Freelance</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Strategies:</p></li>
                    <li><p class="specs-list">UI/UX Design and Graphic Design</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">March 2020 - Present</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Tools Used:</p></li>
                    <li><p class="specs-list">Figma and Adobe Illustrator</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Project Type:</text> Freelance</p>
            <p class="specs-list-m"><text class="specs-title-m">Strategies:</text> UI/UX Design and Graphic Design</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> March 2020 - Present</p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Figma and Adobe Illustrator</p>
        </div>
        <header :class="[mobileView ? 'header-2-m' : 'header-2']">Logos</header>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">During the 2020 circuit breaker, I approached small local businesses based in Singapore, offering my design services. This fueled my passion in creating graphical logos and icons freelance. Here are some of them that I designed using Adobe Illustrator!
        </div>
        <section class="posters">
            <poster v-for="logo in logos" :key="logo.title" :poster="logo"></poster>
        </section>
        <header :class="[mobileView ? 'header-2-m' : 'header-2']">Icons</header>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">I believe that icons are a great way for brands to express themselves while aligning with their brand identity. I’ve created icon sets for a range of purposes, from internal admin terminals, to in-app buttons and Instagram story highlights.
        </div>
        <section class="posters">
            <poster v-for="icon in icons" :key="icon.title" :poster="icon"></poster>
        </section>
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
    name: "logos-and-icons",
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
            logos: [
                { 
                    title: "Freckeals",
                    src: require("@/assets/logos/freckeals.svg"),
                    desc: "Freckeals is an Instagram based clothing shop that sells secondhand clothing to young female adults. The logo was inspired by her popular item which was initially her profile picture."
                },
                { 
                    title: "Pokey Belly",
                    src: require("@/assets/logos/pokeybelly.svg"),
                    desc: "Pokey Belly was a poké bowl delivery company that brought tasty and affordable poké bowls to university students. The sumo x bowl design was inspired by Japanese sumos, paying homage to poké bowl's Japanese heritage, while also having a cute twist."
                },
                { 
                    title: "Mental Bakedowns",
                    src: require("@/assets/logos/mental-bakedowns.svg")
                },
                { 
                    title: "kookieskakes",
                    src: require("@/assets/logos/kookieskakes.svg"),
                    desc: "Kookieskakes is an Instagram based homebakery. Kookieskakes requested a bear as the main focus of their logo. I sweetened it up by incorporating elements of their products, showcasing their specialtiy."
                },
                { 
                    title: "SUTD Diving Club",
                    src: require("@/assets/logos/diving.svg")
                },                                                                          
            ],

            icons: [
                { 
                    title: "In-app category icons for Hop App",
                    src: require("@/assets/logos/hop-icons.svg"),
                },
                { 
                    title: "Instagram highlight icons for @cloverbakes_",
                    src: require("@/assets/logos/cloverbakes-icons.svg"),
                },
                { 
                    title: "Category icons for AirPay Thailand and Vietnam",
                    src: require("@/assets/logos/airpay-icons.svg")
                },      
                { 
                    title: "Internal admin terminal panel for Shopee Singapore",
                    src: require("@/assets/logos/shopee-admin-icons.svg")
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

.header-2 {
    font-family: "Josefin Sans", sans-serif;
    font-size: 36px;
    margin-top: 64px;
    text-align: left;
    margin-left: 148px;
}

.header-2-m {
    font-family: "Futura-Med";
    font-size: 24px;
    margin-top: 36px;   
    text-align: left;
    margin-left: 24px;
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
    line-height: 26px;
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
</style>
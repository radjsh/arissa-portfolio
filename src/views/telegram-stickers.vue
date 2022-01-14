<template>
    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <img src="@/assets/tele-stickers/tele-sticker-banner.svg" :class="[mobileView ? 'banner-m' : 'banner']">
        <div class="heading">
            <header :class="[mobileView ? 'header-m' : 'header']">Telegram Stickers</header>
            <p :class="[mobileView ? 'subheader-posters-m' : 'subheader-posters']">Personal Project, Illustration and Animation</p>
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
                    <li><p class="specs-list">Illustrations and Animation</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">September 2020 - Present</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Tools Used:</p></li>
                    <li><p class="specs-list">Procreate, Adobe Illustrator and After Effects</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Project Type:</text> Personal</p>
            <p class="specs-list-m"><text class="specs-title-m">Strategies:</text> Illustrations and Animation</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> September 2020 - Present</p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Procreate, Adobe Illustrator and After Effects</p>
        </div>
        <header :class="[mobileView ? 'header-2-m' : 'header-2']">Static Telegram Sticker Pack</header>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">I believe that there is no better way to express yourself over text, than to use the stickers that you have created yourself. I created bonk (yes, I named my sticker pack bonk without knowing that I couldn’t change it later), for fun. It has now grown into a collaborative sticker pack, with friends sharing me emojis and expressions that they would like to see. 
            <br><br>Bonk consists of <b>74</b> digitally drawn expressive stickers, used <b>2.5million</b> times among <b>45,000</b> telegram users to date.
            <br><br>Save Bonk to your device here: <b><a class="link-style" href="https://t.me/addstickers/rissaartt" target="_blank">https://t.me/addstickers/rissaartt</a></b>
        </div>
        <section class="posters">
            <poster v-for="logo in logos" :key="logo.title" :poster="logo"></poster>
        </section>
        <header :class="[mobileView ? 'header-2-m' : 'header-2']">Animated Telegram Sticker Pack</header>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">I have always been interested in motion graphics and animation. With Bonk as a basis, I decided to challenge myself and animate a telegram sticker pack that captures the joys and tribulations of everyday life. Hence, the birth of Bonky. <br>
        <br>Bonky consists of <b>17</b> vector animations, used <b>20,000</b> times among <b>9,000</b> telegram users to date.
        <br><br>Save Bonky to your device here: <b><a class="link-style" href="https://t.me/addstickers/rissaartt-animated" target="_blank">https://t.me/addstickers/rissaartt</a></b>

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
    name: "telegram-stickers",
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
                    title: "",
                    src: require("@/assets/tele-stickers/tele-sticker-all.svg"),
                }                                                                        
            ],

            icons: [
                { 
                    title: "",
                    src: require("@/assets/tele-stickers/ats-2.gif"),
                },
                { 
                    title: "",
                    src: require("@/assets/tele-stickers/ats-1.gif"),
                },
                { 
                    title: "",
                    src: require("@/assets/tele-stickers/ats-4.gif"),
                },
                { 
                    title: "",
                    src: require("@/assets/tele-stickers/ats-3.gif"),
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

.header-m-2 {
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

.specs-list-m {
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

a {
    color: #7287B2;
}

a:hover {
   color: #B1BCD5; 
}

.link-style {
    text-underline-offset: 2px;
    text-decoration-color: #F7C760;
    text-decoration-thickness: 3px;
}
</style>
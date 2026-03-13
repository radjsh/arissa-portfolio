<template>
    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <img src="@/assets/tele-stickers/telesticker-banner.jpg" :class="[mobileView ? 'banner-m' : 'banner']">
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
            <br><br>Bonk consists of <b>93</b> digitally drawn expressive stickers, used <b>7.2 million</b> times among <b>82,000</b> telegram users to date.
            <br><br>Save Bonk to your device here: <b><a class="link-style" href="https://t.me/addstickers/rissaartt" target="_blank">https://t.me/addstickers/rissaartt</a></b>
        </div>
        <section class="posters">
            <poster v-for="logo in logos" :key="logo.title" :poster="logo"></poster>
        </section>
        <header :class="[mobileView ? 'header-2-m' : 'header-2']">Animated Telegram Sticker Pack</header>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">I have always been interested in motion graphics and animation. With Bonk as a basis, I decided to challenge myself and animate a telegram sticker pack that captures the joys and tribulations of everyday life. Hence, the birth of Bonky. <br>
        <br>Bonky consists of <b>20</b> vector animations, used <b>1.2 million</b> times among <b>28,000</b> telegram users to date.
        <br><br>Save Bonky to your device here: <b><a class="link-style" href="https://t.me/addstickers/rissaartt-animated" target="_blank">https://t.me/addstickers/rissaartt</a></b>

        </div>
        <section class="posters">
            <poster v-for="icon in icons" :key="icon.title" :poster="icon"></poster>
        </section>
        <div class="see-more-div">
            <text :class="[mobileView ? 'sm-title-m' : 'sm-title']">See More Projects</text> 
            <see-more-categories :pageType="category"/>
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
            category: "telegram-stickers",
            logos: [
                { 
                    title: "",
                    src: require("@/assets/tele-stickers/telesticker-all.jpg"),
                }                                                                        
            ],

            icons: [
                { 
                    title: "",
                    src: require("@/assets/tele-stickers/ats-1.gif"),
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
.banner {
    margin-top: 20px;
}

.banner-m {
    height: 100px;
}

.header-2 {
    margin-left: 148px;
}

.header-m-2 {
    font-family: "Futura-Med";
    font-size: 24px;
    margin-top: 36px;
}

.introduction {
    font-size: 18px;
    margin-left: 148px;
    margin-right: 148px;
    line-height: 26px;
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
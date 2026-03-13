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
                    <li><p class="specs-list">March 2020 - June 2022</p></li>
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
            category: "logos-and-icons",
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
    margin-top: 56px;
}

.banner-m {
    margin-top: 24px;
    height: 100px;
}

.header-2 {
    margin-left: 250px;
    margin-right: 180px;
}

.introduction {
    font-size: 18px;
    margin-left: 250px;
    margin-right: 180px;
    line-height: 26px;
}
</style>
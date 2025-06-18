<template>
    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <img src="@/assets/poster/poster-banner.svg" :class="[mobileView ? 'banner-m' : 'banner']">
        <div class="heading">
            <header :class="[mobileView ? 'header-m' : 'header']">Posters</header>
            <p :class="[mobileView ? 'subheader-posters-m' : 'subheader-posters']">Graphic Design</p>
        </div>
        <div class="row specs-row" v-if="!mobileView">
            <div class="col l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Project Type:</p></li>
                    <li><p class="specs-list">School and Clubs</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Strategies:</p></li>
                    <li><p class="specs-list">Graphic Design</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">May 2019 - Present</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Tools Used:</p></li>
                    <li><p class="specs-list">Adobe Illustrator and Photoshop</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Project Type:</text> School and Clubs</p>
            <p class="specs-list-m"><text class="specs-title-m">Strategies:</text> Graphic Design</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> May 2019 - Present</p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Adobe Illustrator and Photoshop</p>
        </div>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
            Designing posters was my first deep dive into graphic design. Here is my collection of graphical posters that I created for school events, projects and workshops.
        </div>
        <section class="posters">
            <poster v-for="poster in posters" :key="poster.title" :poster="poster"></poster>
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
    name: "posters",
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
            category: "posters",
            posters: [
                { 
                    title: "Introduction to Adobe Illustrator Workshop 2022",
                    src: require("@/assets/poster/intro-to-illustrator-2022.svg")
                },
                { 
                    title: "Animated Telegram Stickers Workshop 2022",
                    src: require("@/assets/poster/animated-tele-sticker.svg")
                },
                { 
                    title: "PLENT Smart Event Planner Application Poster",
                    src: require("@/assets/poster/plent.svg")
                },
                { 
                    title: "SUTD Hoodie Design Competition 2021",
                    src: require("@/assets/poster/sutd-hoodie-design.svg")
                },
                { 
                    title: "2022 SUTD Yearbook Committee Recruitment",
                    src: require("@/assets/poster/yearbook-recruitment.svg")
                },
                { 
                    title: "SUTD Root Cove Promotional Poster",
                    src: require("@/assets/poster/rootcove.svg")
                },    
                { 
                    title: "Introduction to Adobe Illustrator Workshop 2021",
                    src: require("@/assets/poster/intro-to-illustrator-2021.svg")
                },        
                { 
                    title: "Computational Structures D-Press Project Poster",
                    src: require("@/assets/poster/dpress.svg")
                },          
                { 
                    title: "SUTD Diving - Discover Scuba Diving",
                    src: require("@/assets/poster/diving.svg")
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

@font-face {
  font-family: "Josefin Sans";
  src: local("Josefin Sans"),
   url("../fonts/JosefinSans-VariableFont_wght.ttf") format("truetype");
  color: #2F2A1B;
}

.banner {
    margin-top: 56px;
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
    font-weight: 600;
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
    font-weight: 600;
}

.specs-title-m {
    font-family: "Futura-Med";
    font-size: 14px;
}

.specs-list-m {
    font-family: "Futura-Book";
    font-size: 14px;
}

.specs-list {
    font-family: "Futura-Book";
    font-size: 18px;
}

.introduction {
    font-family: "Futura-Book";
    font-size: 18px;
    margin-top: 48px;
    text-align: start;
    margin-left: 180px;
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
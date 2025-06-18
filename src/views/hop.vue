<template>
    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <img src="@/assets/hop/banner.svg" :class="[mobileView ? 'banner-m' : 'banner']">
        <div class="heading">
            <header :class="[mobileView ? 'header-m' : 'header']">Hop App</header>
            <p :class="[mobileView ? 'subheader-posters-m' : 'subheader-posters']">Freelance Project, UI/UX Design</p>
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
                    <li><p class="specs-list">Research, UI/UX Design, Prototyping and Graphic Design</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">May 2021 - July 2021</p></li>
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
            <p class="specs-list-m"><text class="specs-title-m">Project Type:</text> Freelance</p>
            <p class="specs-list-m"><text class="specs-title-m">Strategies:</text>Research, UI/UX Design, Prototyping and Graphic Design</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> May 2021 - July 2021</p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Adobe Illustrator and Figma</p>
        </div>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            I was approached by ME Tech and Hop to research, ideate and design a mobile application for <b>parents to easily find and book enrichment classes for their children</b>. The project deliverable included UX research on the target audience, a high fidelity mobile application prototype, complementary admin and partner terminals protoype and the hop website design.
        </div>
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">The Problem</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">More and more parents are investing in enrichment classes for children in their early development ages. However, information about the different enrichment classes are scattered across the internet, with a <b>lack of a centralised platform</b> to consolidate and streamline the searching and booking process.</div>
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">User Journey</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">After the initial brief from Hop, we finalised our target audience to be <b>millennial parents</b>, with children of age 1 - 12 years old. To better understand the users, I spoke to a group of the target users, and created a user journey to identify the key stages in the user's decision making process, as well as to identify their motivations, pain points and areas of opportunities.</div>
        <poster key="userJourney" :poster="userJourney"></poster>
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Identifying User Needs</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">From my research and analysis, I identified user's key problems, and proposed the following improvements to tackle them.</div>
        <poster key="userJourney" :poster="userNeeds"></poster>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Competitive Analysis</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">Before diving into the design, we looked at existing solutions in the market and evaluated their design based on Nielsen's Usability Hieuristics. The main competitors we looked into were ClassPass and KidsPass.</div>
        <poster key="competitorAnalysis" :poster="competitorAnalysis"></poster>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Low Fidelity Wireframe</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">I worked closely with the Hop team to ideate on the low fidelity wireframe. We came up with rough sketches of the prototype first before committing to a high fidelity prototype.</div>
        <poster key="lofi" :poster="lofi"></poster>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Design Library</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">I created a design components library to ensure that the high fidelity prototype would be consistent and stick to the brand identity. This included the colour scheme and usage, typography, and commonly used elements such as buttons, toasts and tabs. I also included technical documentation at this stage for the developers to easily refer to.</div>
        <poster key="designLibrary" :poster="designLibrary"></poster>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">High Fidelity Protoype</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">After finalising the wireframes and the overall look of the app, it was time to dive into the high fidelity prototype (yay finally)! I used Figma to create the different interfaces, and worked feature by feature. Throughout the process, I found myself creating multiple options of the same feature / flow. Creating different ways of doing a task helped to find the best possible way to achieve an outcome. What's not shown here is the countless reviews and disscussions made with the developers and client to ensure that the application covered all the essential features, and that the interactions were all as desired. An interactive prototype was created for testing within the team, and to help the developers visualise the transitions between the elements.</div>
        <poster key="classBottom" :poster="classBottom"></poster>
        <poster key="schedule" :poster="schedule"></poster>
        <div class="prototype">
        <div id="figma"><iframe style="border: 1px solid rgba(255, 255, 255);" width="375" height="667" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FwxtRWpAfyTPrmmrFAe9xsa%2Fhop-app%3Fnode-id%3D735%253A934%26scaling%3Dcontain%26page-id%3D0%253A1%26starting-point-node-id%3D735%253A1032%26show-proto-sidebar%3D1" allowfullscreen></iframe></div>
        </div>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Live Product</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">After months of hardwork and improvements, I am pleased to share that the mobile application is available for download on the <b><a class="link-style" href="https://apps.apple.com/sg/app/hop-app-sg/id1622379908" target="_blank">App Store</a></b> and on <b><a class="link-style" href="https://play.google.com/store/apps/details?id=com.hoptech.hopapp2" target="_blank">Google Play</a></b>.</div>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Conclusion</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            It was a thoroughly enjoyable experience to delve deeper into centralised children booking platforms, and to understand the perspectives of parents when finding classes for their children. The iterative process of creating options and refining them allowed me to get creative with my solutions, while also seeing how I can balance them to be simply understood by the users. Special thanks to Mike and Eugene, developers from ME Tech, and Germaine, client from Hop, for the opportunity to work on this project. To view the live website, check out <b><a class="link-style" href="https://www.hopapp.sg/" target="_blank">hopapp.sg</a></b>!
        </div>
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
    name: "hop",
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
            category: "hop",
            userJourney: { 
                src: require("@/assets/hop/user-journey.svg")
            },     
            userNeeds: {
                src: require("@/assets/hop/user-needs.svg")
            },      
            competitorAnalysis: {
                src: require("@/assets/hop/competitor-analysis.svg")
            },
            lofi: {
                src: require("@/assets/hop/lofi.svg")
            },
            designLibrary: {
                src: require("@/assets/hop/design-library.jpg")
            },
            classBottom: {
                src: require("@/assets/hop/class-bottom.jpg")
            },
            schedule: {
                src: require("@/assets/hop/scheduled.jpg")
            }                                             
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
    margin-top: 20px;
}

.banner-m {
    margin-top: 56px;
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
    font-weight: 600;
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
    line-height: 28px;
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
    color: #30C1D2;
}

a:hover {
   color: #14A1A8; 
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

.prototype--viewerContainer--JOiUY {
    margin: 0px;
}

#figma{
    margin: 0px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-top: 64px;
}

.prototype{
    display: flex;
    align-content: center;
    justify-content: center;
}
</style>
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
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Overview</header>
    
        <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
            Hop is a mobile application designed to <b>help parents discover, compare, and book enrichment classes for their children</b>. 
            
            I worked with ME Tech and Hop as the product UI/UX designer, owning research, end-to-end experience design, and prototyping for the parent-facing app, as well as partner and admin interfaces. 

            <br><br> The goal was to simplify a fragmented and time-consuming process into a single, centralised service that parents could trust.
        </div>
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">The Problem</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">More and more parents investing in enrichment classes for their children, especially in their early-development stages. However, information about the different enrichment classes are fragmented across blogs, search results and individual providers' websites, with a <b>lack of a centralised platform</b> to consolidate and streamline the searching and booking process. This makes it tedious and timeconsuming to compare options, book classes and manage schedules.</div>
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">User Journey</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">We defined our target audience to be <b>millennial parents with children of age 1 - 12 years old</b>. To better understand their needs and decision-making process, I spoke to a group of the target users, mapped out their user journey, and identified their motivations, pain points and potential areas of opportunities.</div>
        <poster key="userJourney" :poster="userJourney"></poster>
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Identifying User Needs</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">From my research and analysis, I identified user's key problems, and proposed the following improvements to tackle them:</div>
        <poster key="userJourney" :poster="userNeeds"></poster>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Competitive Analysis</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">I analysed existing platforms such as ClassPass and KidsPass, evaluating them against Nielsen’s Usability Heuristics. This highlighted issues in clarity and user control, which helped in informing my decisions when designing navigation, feedback, and error prevention features.</div>
        <poster key="competitorAnalysis" :poster="competitorAnalysis"></poster>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Low Fidelity Wireframe</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">I worked closely with the Hop team to explore early concepts and through low fidelity wireframe. This allowed us to quickly test layout ideas, user flows and information hierarchy before committing to higher-fidelity designs.</div>
        <poster key="lofi" :poster="lofi"></poster>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Design Library</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">To support consistency and developer handoff, I created a design components library which included the colour scheme and usages, typography, and commonly used elements such as buttons, toasts and tabs. I also documented interaction and usage guidelines for developers to easily refer to.</div>
        <poster key="designLibrary" :poster="designLibrary"></poster>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">High Fidelity Protoype</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">I designed the high-fidelity mobile prototype in Figma, working feature by feature and iterating through multiple flow options to evaluate which option provides the best ease and clarity. Throughout the process, I collaborated closely with developers and the client to ensure feasibility, edge case coverage and smooth interactions. 
            
            <br><br>An interactive prototype was used for internal testing and stakeholder alignment, helping the team visualise transitions and validate assumptions before development.</div>
        <poster key="classBottom" :poster="classBottom"></poster>
        <poster key="schedule" :poster="schedule"></poster>
        <div class="prototype">
        <div id="figma"><iframe style="border: 1px solid rgba(255, 255, 255);" width="375" height="667" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FwxtRWpAfyTPrmmrFAe9xsa%2Fhop-app%3Fnode-id%3D735%253A934%26scaling%3Dcontain%26page-id%3D0%253A1%26starting-point-node-id%3D735%253A1032%26show-proto-sidebar%3D1" allowfullscreen></iframe></div>
        </div>
        
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Conclusion</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            This project strengthened my experience in designing <b>transactional, service-oriented products</b> that require careful organisation of information, clarity and trust. Through balancing user needs, technical constraints and business goals, I was reminded about the importance of strong information architecture and iterative decision-making.

            If this product were to continue updating, I would focus on longitudinal user feedback, accessibility considerations, and deeper personalisation as parents’ needs change over time.</div>
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
                src: require("@/assets/hop/lofi.jpg")
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
    margin-left: 240px;
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
    font-size: 20px;
    margin-top: 48px;
    text-align: start;
    margin-left: 240px;
    margin-right: 240px;
    line-height: 28px;
}

.overview {
    font-family: "Futura-Book";
    font-size: 24px;
    margin-top: 48px;
    text-align: start;
    margin-left: 240px;
    margin-right: 240px;
    line-height: 36px;
}

.introduction-m {
    font-family: "Futura-Book";
    margin: 24px 24px 0px 24px;
    text-align: start;
    font-size: 14px;
}

.overview-m {
    font-family: "Futura-Book";
    margin: 24px 24px 0px 24px;
    text-align: start;
    font-size: 18px;
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
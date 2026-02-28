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
                    <li><p class="specs-list">Research, UI/UX Design and Prototyping</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">2021 (Revisited in 2026)</p></li>
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
            <p class="specs-list-m"><text class="specs-title-m">Strategies:</text>Research, UI/UX Design and Prototyping</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> 2021 (Revisited in 2026) </p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Figma and Adobe Illustrator</p>
        </div>
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Context</header>
    
        <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
            Hop is a mobile application designed to <b>help parents discover, compare, and book enrichment classes for their children with confidence</b>. 
            
             <br><br>In 2021, I worked with ME Tech and Hop's founder as the product UI/UX designer, owning research, end-to-end experience design, and prototyping for the parent-facing app. 

            <br><br>I revisited the project in 2026 to see how my thinking has evolved, reflect critically on my work, and redesign with new insights.
        </div>
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Original Approach</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            In 2021, we defined our target audience as <b>millennial parents with children aged 1–12</b>. The founder had previously conducted exploratory interviews to validate the demand for children's enrichment bookings. Given the tight product launch timeline, I synthesised those early insights, mapped out the end-to-end user journey, and identified key pain points to prioritise what we could ship for the MVP.
        </div>
        <poster key="userJourney" :poster="userJourney"></poster>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            The initial focus was on <b>reducing fragmentation across platforms</b>, making <b>search and filtering efficient </b> and <b>streamlining booking and schedule management</b>. 

            <br><br> The solution emphasised task completion and reducing booking friction.
        </div>
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Original Problem Framing</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">At that time, we framed the problem as: 
            <br><br>Information about enrichment classes is fragmented across the internet, making it <b>tedious and time-consuming</b> for parents to search, compare and book classes.        </div>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Where It Fell Short</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            After revisiting the project and conducting secondary research across parenting forums and blogs, I recognised a critical gap in the product's framing.
            
            <br><br>The initial designfocused heavily on task completion – searching, filtering, booking – but not the emotional weight behind decision-making. Choosing enrichment classes, especially for young children, is not simply a booking problem, but rather a huge trust decision. Parents are evaluating <b>credibility, safety and the long-term impact on their child</b>. While the product helped parents complete actions, it did not sufficiently <b>reduce anxiety or build confidence</b>.

            <br><br>From my research, here are some of the concerns that surfaced:
        </div>
        <poster key="themes" :poster="themes"></poster>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            This shifted the focus of the product from: <b>“Helping parents find classes”</b> to <b>“Helping parents feel confident and safe in their decision.”</b>
        </div>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Emotional Journey Map</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            I reconstructed the customer journey map, this time mapping not just actions, but also their emotional states and doubts.
            <br><br>What became clear was that the highest friction points were not during filtering down classes, but rather <b>shortlisting and deciding which classes to choose</b>.
        </div>
        <poster key="ejm" :poster="ejm"></poster>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Revised Problem Statement</header>
        <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
            Hop aims to reduce the <b>cognitive and emotional burden</b> parents face when choosing enrichment classes, by providing <b>structured comparison tools, trusted reviews, and streamlined booking</b> in one centralised platform.
        </div> 
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Design Evolution</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
        After identifying that trust and confidence were core to parents’ decision-making, I ran a short prioritisation survey with 8 parents of young children to understand what factors mattered most when choosing between similar classes.

        <br><br><b>Distance</b> and <b>reviews</b> consistently ranked highest, followed by <b>cost</b> and <b>schedule fit</b>.

        Rather than directly mirroring the ranking, I did a deeper analysis on what these factors represented and how they can fit in the filtering and sorting system.
        </div>
        <poster key="factors" :poster="factors"></poster>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
        I first tested this structure through a low-fidelity prototype to validate hierarchy and information grouping before committing to visual design.
        </div>
        <poster key="lofi" :poster="lofi"></poster>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Components Library</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            Back in 2021, I built a component library to ensure consistency in design, and efficiency in development. It included color systems, typography, and commonly used elements such as buttons, toasts and tabs.

            <br><br> For this revamp, I built upon this design system rather than starting from scratch. This allowed me to maintain brand familiarity, speed up iteration and focus on improving interaction logic instead of reinventing a visual language.
        </div>
        <poster key="designLibrary" :poster="designLibrary"></poster>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">High Fidelity Protoype</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">I focused on four high-impact areas that directly influenced parental confidence:
        </div>
        <poster key="hifi" :poster="hifi"></poster>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            For the filter, I reordered the factors based on my defined hierarchy and focused on elimination first and refinement second.
        </div>
        <poster key="filter" :poster="filter"></poster>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            For the list of classes, I decluttered the top tab to prioritise showing 'filters', 'sort by' and 'date'. I also rearranged the information on class cards to prioritise key information.
        </div>
        <poster key="classListing" :poster="classListing"></poster>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            I added a new 'Sort By' tab that allows users to sort based on reviews, distance, cost and start time.
        </div>
        <poster key="sort" :poster="sort"></poster>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            I redesigned the leave a review component from a pop-up toast to a full-screen UI, with purposeful prompts and examples to help parents leave substantial reviews.
        </div>
        <poster key="leaveReviews" :poster="leaveReviews"></poster>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            Previously, 'Reviews' were just an afterthought and did not reflect much on each class's listing page. I've updated the Reviews segment to highlight keywords mentioned and to show a few parents' testimonies.
        </div>
        <poster key="reviews" :poster="reviews"></poster>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            Here are the overall updated flows to help reduce the <b>cognitive and emotional burden</b> parents face when choosing enrichment classes, through <b>structured comparison tools, trusted reviews, and streamlined booking</b> in one centralised platform.
        </div>
        <poster key="updatedFlows" :poster="updatedFlows"></poster>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Constraints & Measures of Success</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            Hop was discontinued in 2024 when the founder decided not to continue the product. As a result, I did not have access to the original user base or live product data to validate the design.

            <br><br>To test my updated approach, I conducted short interviews with 8 parents to gather directional feedback on the redesigned flows and priotisation logic. Participants highlighted that:
        </div>
        <poster key="feedback" :poster="feedback"></poster>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            While this was qualitative validation, I also defined clear product metrics that would determine success if implemented:
        </div>
        <poster key="metrics" :poster="metrics"></poster>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Reflections</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            Revisiting this project five years later, I realised that my initial approach focused heavily on the transactional aspect of booking a class – optimising the steps needed to complete the task efficiently. While functional clarity is important, I had overlooked the emotional weight behind parents' decision-making process.

            <br><br>Through further research, it became clear that parents are not simply evaluating logistics such as distance or schedule. They are making high-stakes decisions about their children's development, and rely heavily on reviews, credibility signals and reassuarance before feeling confident enough to commit.

            <br><br>With this shift in insight, the redesign focuses not only on <b>improving filtering and sorting mechanics</b>, but on <b>reducing anxiety through stronger trust signals and a more intentional review system</b>.

            <br><br>Revisiting older work has reminded me that good product design is not just about usability, but about understanding the emotional context in which decisions are made, and continuously refining solutions as our perspective evolves.
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
                src: require("@/assets/hop/lofi.jpg")
            },
            designLibrary: {
                src: require("@/assets/hop/design-library.jpg")
            },
            classListing: {
                src: require("@/assets/hop/class-listing.jpg")
            },
            filter: {
                src: require("@/assets/hop/filter.jpg")
            },
            themes: {
                src: require("@/assets/hop/activity-diagram.svg")
            },            
            ejm: {
                src: require("@/assets/hop/ejm.jpg")
            },            
            factors: {
                src: require("@/assets/hop/factors.svg")
            },            
            hifi: {
                src: require("@/assets/hop/hifi.svg")
            },
            sort: {
                src: require("@/assets/hop/sort.jpg")
            },
            leaveReviews: {
                src: require("@/assets/hop/leave-review.jpg")
            },    
            reviews: {
                src: require("@/assets/hop/reviews.jpg")
            },
            updatedFlows: {
                src: require("@/assets/hop/updated-flows.jpg")
            },
            feedback: {
                src: require("@/assets/hop/feedback.svg")
            },
            metrics: {
                src: require("@/assets/hop/metrics.svg")
            },
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
    font-size: 22px;
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
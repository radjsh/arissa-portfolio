<template>
    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <img src="@/assets/cnn-sia/banner.jpg" :class="[mobileView ? 'banner-m' : 'banner']">
        <div class="heading">
            <header :class="[mobileView ? 'header-m' : 'header']">SIA Experiencing World Class</header>
            <p :class="[mobileView ? 'subheader-posters-m' : 'subheader-posters']">Case Study, UI/UX Design</p>
        </div>
        <div class="row specs-row" v-if="!mobileView">
            <div class="col l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Client:</p></li>
                    <li><p class="specs-list">CNN x Singapore Airlines</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Strategies:</p></li>
                    <li><p class="specs-list">Research, UI/UX Design, Prototyping and Motion Design</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">July 2023 - March 2024</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Tools Used:</p></li>
                    <li><p class="specs-list">Adobe Illustrator, After Effects and Figma</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Client:</text> CNN x Singapore Airlines</p>
            <p class="specs-list-m"><text class="specs-title-m">Strategies:</text>Research, UI/UX Design, Prototyping and Motion Design</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> July 2023 - March 2024</p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Adobe Illustrator, After Effects and Figma</p>
        </div>
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Overview</header>
    
        <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
        Experiencing World Class is a <b>multi-narrative, interactive scrollytelling experience</b> created for Singapore Airlines in collaboration with CNN Create. 
        
        <br><br>The project translates <b>complex premium flight offerings into an engaging web story</b> through quizzes, animated illustrations and a talent-led film.

        <br><br>I was the sole product designer, leading idea conceptualisation, end-to-end user flows, and the overall visual and interaction design.
        <video 
            src="/videos/sia-overview.mp4"
            controls
            style="width:100%; margin-top: 80px;"
        ></video>
        </div>
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">The Challenge</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">Singapore Airlines wanted to highlight how its Premium Economy and Business Class cabins offer meaningful, world-class experiences, while strengthening brand affinity with affluent business travellers.

            <br><br>We had to communicate <b>multiple premium offerings without overwhelming users with information</b>, while making the experience feel <b>participatory and engaging</b>, rather than promotional.

            <br><br> I saw this as a design problem around <b>cognitive load and engagement </b>— how do we help users absorb detailed information while still enjoying the journey?
        </div>
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">The Design Process</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            We held weekly syncs with producers and SIA to align on content, scope and brand tone. I presented multiple interaction prototypes and collected feedback before finalising flows.
                    </div>
        <poster key="sketches" :poster="sketches"></poster>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            We prioritised experiences that maximised user discovery and engagement while staying true to SIA’s premium brand.
        </div>
        <poster key="lofi" :poster="lofi"></poster>
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">A Parallel Narrative Structure</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            As the brief required an accompanying film featuring two talents, I worked with the team to explore how their stories could be told in parallel rather than separately. We designed a <b>click-to-switch video interaction</b>, where both talents’ journeys play concurrently, allowing users to toggle between Premium Economy and Business Class experiences.
            This interaction became the backbone of the site, grounding all subsequent interactions within a single, cohesive narrative.

            <video 
            src="/videos/04-Video-Toggle.mp4"
            controls
            style="width:100%; margin-top: 80px;"
            ></video>
        </div>


        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Premium Dining: Learning Through Play</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
       To make the dining experience interactive, we designed a <b>dish-to-destination matching game</b> where users guess each dish’s country of origin before seeing the context. This active participation makes learning more engaging, and helps users better remember the information, while highlighting SIA’s premium, destination-inspired meals to strengthen brand perception. 
        
    
        <video 
            src="/videos/02-Interactive-Quiz-Shorter.mp4"
            controls
            style="width:100%; margin-top: 80px;"
            ></video>
    </div>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Immersive Cabin Experience</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            To simulate the feeling of moving through a cabin, we used a horizontal scroll interaction, allowing users to "stroll" down the aisle of a Premium Economy or Business Class cabin. 
            <br><br>
            Before committing to the illustrations and animations, we systematically listed out the different proof points we wanted to cover, and their accompanying illustrations and interactions.
        </div>
        <poster key="list" :poster="list"></poster>

        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            I animated the cabin illustrations (created by illustrator Alba), embedding micro-interactions that encourage exploration. These interactions were intentionally simple, focusing on discovery rather than instruction, to share SIA's extensive in-flight offerings.
        
            <video 
            src="/videos/03-Horizontal-Scroll-2.mp4"
            controls
            style="width:100%; margin-top: 80px;"
            ></video>
        </div>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">User Testing</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            While formal user testing was limited due to the nature of the campaign, internal feedback highlighted that the interactive elements made the experience surprisingly intuitive despite the amount of information presented.
            <br><br>
            One key takeaway for me was how small, playful interactions helped lower the barrier to engaging with information-heavy content, which can otherwise feel taxing.
        </div>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Campaign Analytics</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">

        <div class="row specs-row" v-if="!mobileView">
            <div class="col l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Total Page Views:</p></li>
                    <li><h2 :style="{  fontFamily: 'Futura-Med', fontSize: '36px', }"><AnimatedCounter :endValue="195842" /></h2></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Total Unique Visitors:</p></li>
                    <li><h2 :style="{  fontFamily: 'Futura-Med', fontSize: '36px', }"><AnimatedCounter :endValue="148029"/></h2></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Avg Visit Duration:</p></li>
                    <li><h2 :style="{  fontFamily: 'Futura-Med', fontSize: '36px', }">2min 17s</h2></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Strong Campaign Recall:</p></li>
                    <li><h2 :style="{  fontFamily: 'Futura-Med', fontSize: '36px', display: 'inline-flex', alignItems: 'baseline', marginTop:'16px' }"><AnimatedCounter :endValue="67" />%</h2></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Total Page Views:<h2 :style="{  fontFamily: 'Futura-Med', fontSize: '24px' }"><AnimatedCounter :endValue="195842" /></h2></text></p>
            <p class="specs-list-m"><text class="specs-title-m">Total Unique Visitors:<h2 :style="{  fontFamily: 'Futura-Med', fontSize: '24px' }"><AnimatedCounter :endValue="148029" /></h2></text></p>
            <p class="specs-list-m"><text class="specs-title-m">Avg Visit Duration:<h2 :style="{  fontFamily: 'Futura-Med', fontSize: '24px' }">2min 17s</h2></text></p>
            <p class="specs-list-m"><text class="specs-title-m">Strong Campaign Recall %:<h2 :style="{  fontFamily: 'Futura-Med', fontSize: '24px' }"><AnimatedCounter :endValue="67"/></h2></text></p>
        </div>

        Beyond engagement numbers that surpassed CNN's average, the campaign drove meaningful shifts in audience perception. From a quantitative online survey conducted by an independent research company, participants feedbacked that they came away with a stronger sense of SIA as a world-class airline with premium service and quality offerings, with notable uplifts in favourability, likelihood to recommend, and intent to fly for business purposes. 
        <br><br>One of the most satisfying outcomes was seeing the metrics confirm what we had hoped: users weren’t just clicking through the site — they were absorbing the information, exploring interactions, and leaving with a stronger understanding of SIA’s world-class offerings.

        <br><br> The project received an <b>Honourable Mention on Awwwards</b>, recognising both its interaction design and storytelling approach.


        </div>


        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Personal Reflection</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">Designing this campaign reinforced my belief that good digital experiences aren’t about showing everything at once, but about <b>guiding users through information at the right pace, and encouraging active participation</b>. My team and I approached each story with meticulous care, ensuring that we aligned with SIA's brand guidelines, while adding playful touches that reflected the feeling of being on a flight – exploring the cabin, discovering amenities and enjoying in-flight meals.
            
            <br><br>This project sharpened my interest in using interaction design not just to inform, but to help users feel curious to discover, and engaged as they explore a product.
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
import AnimatedCounter from "../components/AnimatedCounter.vue";

export default ({
    name: "SIA",
    components: { Poster, SeeMoreCategories, ContactMe, AnimatedCounter},
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
        window.addEventListener('scroll', this.reveal);
    },

    data () {
        return {
            mobileView: null,
            windowWidth: null,
            category: "cnn-sia",  
            sketches: {
                src: require("@/assets/cnn-sia/sketches.jpg")
            },
            lofi: {
                src: require("@/assets/cnn-sia/lofi.jpg")
            },
             list: {
                src: require("@/assets/cnn-sia/list.jpg")
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
.banner {
    margin-top: 20px;
    width: 100%;
}

.counter-number {
    font-family: "Futura-Med";
    font-size: 36px;
}
</style>

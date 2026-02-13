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
        Experiencing World Class is a multi-narrative, interactive scrollytelling experience created for Singapore Airlines in collaboration with CNN Create brand studio. The project translates complex premium flight offerings into an engaging, intuitive web story through quizzes, animated illustrations and a talent-led film.

        <br><br> The project received an <b>Honourable Mention on Awwwards</b>, recognising both its interaction design and storytelling approach.
        </div>
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">The Challenge</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">Singapore Airlines wanted to highlight how its Premium Economy and Business Class cabins offer meaningful, world-class experiences, while strengthening brand affinity with affluent business travellers.

            <br><br> The challenge was twofold: we had to communicate multiple premium offerings without overwhelming users with information, while making the experience feel participatory and engaging, rather than promotional.

            <br><br> I saw this as a design problem around <b>cognitive load and engagement </b>— how do we help users absorb detailed information while still enjoying the journey?
        </div>
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">A Parallel Narrative Structure</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            As the brief required an accompanying film featuring two talents, I worked with the team to explore how their stories could be told in parallel rather than separately. We designed a click-to-switch video interaction, where both talents’ journeys play concurrently, allowing users to toggle between Premium Economy and Business Class experiences.
            This interaction became the backbone of the site, grounding all subsequent interactions within a single, cohesive narrative.

            <video 
            src="/videos/04-Video-Toggle.mp4"
            controls
            style="width:100%; margin-top: 80px;"
            ></video>
        </div>


        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Premium Dining: Learning Through Play</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
        Instead of relying on static images and long descriptions, I explored ways to showcase the dining experience in a more interactive way. Drawing inspiration from playful knowledge-based web games such as Worldle, we designed a <b>dish-to-destination matching game</b>. 
        <br><br>
        Readers are presented with a dish and a map, and are invited to guess the dishes' country of origin – reflecting SIA's approach of serving destination-inspired meals onboard. This allowed users to actively engage with the content before revealing contextual information, making the learning process feel lighter and more memorable. 
        
    
        <video 
            src="/videos/02-Interactive-Quiz-Shorter.mp4"
            controls
            style="width:100%; margin-top: 80px;"
            ></video>
    </div>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">What we built #3: Immersive Cabin Experience</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">
            To simulate the feeling of moving through a cabin, we used a horizontal scroll interaction, allowing users to "stroll" down the aisle of a Premium Economy or Business Class cabin. 
            <br><br>
            I animated the cabin illustrations (created by illustrator Alba), embedding micro-interactions that encourage exploration. For example: dragging a battery bar to charge devices, interacting with seats to recline fully, and tapping buttons to access onboard features such as Wi-Fi. These interactions were intentionally simple, focusing on discovery rather than instruction.
        
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
import SeeMoreCategories from "../components/SeeMoreCategories.vue";
import ContactMe from "../components/ContactMe.vue";
import AnimatedCounter from "../components/AnimatedCounter.vue";

export default ({
    name: "SIA",
    components: { SeeMoreCategories, ContactMe, AnimatedCounter},
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
    width: 100%;
}

.banner-m {
    margin-top: 56px;
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

.counter-number {
    font-family: "Futura-Med";
    font-size: 36px;
}
</style>

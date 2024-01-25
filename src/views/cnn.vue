<template>
    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <img src="@/assets/cnn/cnn-banner.jpg" :class="[mobileView ? 'banner-m' : 'banner']">
        <div class="heading">
            <header :class="[mobileView ? 'header-m' : 'header']">CNN Scrollytelling Sites</header>
            <p :class="[mobileView ? 'subheader-posters-m' : 'subheader-posters']">Digital Designer</p>
        </div>
        <div class="row specs-row" v-if="!mobileView">
            <div class="col l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Company</p></li>
                    <li><p class="specs-list">CNN International, Create Brand Studio</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Strategies:</p></li>
                    <li><p class="specs-list">UI/UX Design, Prototyping, Animation</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">Sept 2022 - Present</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Tools Used:</p></li>
                    <li><p class="specs-list">Figma, Adobe Illustrator, Photoshop, After Effects</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Company:</text> CNN International, Create Brand Studio</p>
            <p class="specs-list-m"><text class="specs-title-m">Strategies:</text> UI/UX Design, Prototyping, Animation</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> Sept 2022 - Present</p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Figma, Adobe Illustrator, Photoshop, After Effects</p>
        </div>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
            At CNN Create Brand Studio, we create scrollytelling websites with third party clients to tell their story in an informative and engaging way. As a digital designer, I design the visuals and interactions of the websites and collaborate with developers to bring the vision to life. 
        </div>
        <div v-if="!mobileView" class="browse-title">
            Browse Live Projects:
        </div>
        <div v-else class="browse-title-m reveal">
            Click on project to view live:
        </div>
        <section v-if="!mobileView">
            <site v-for="site in sites" :key="site.title" :site="site"></site>
        </section>
        <section v-else>
            <site-mobile v-for="site in sites" :key="site.title" :site="site"></site-mobile>
        </section>
        <div class="see-more-div">
            <text :class="[mobileView ? 'sm-title-m' : 'sm-title']">See More Projects</text> 
            <see-more-categories :pageType="category"/>
        </div>
        <contact-me/>
    </div>
</template>

<script>
import Site from "../components/Site.vue";
import SeeMoreCategories from "../components/SeeMoreCategories.vue";
import ContactMe from "../components/ContactMe.vue";
import SiteMobile from "../components/SiteMobile.vue";


export default ({
    name: "cnn",
    components: { SeeMoreCategories, ContactMe, Site, SiteMobile },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
        if (this.mobileView){
            window.addEventListener('scroll', this.reveal);
        }
    },

    data () {
        return {
            mobileView: null,
            windowWidth: null,
            category: "cnn",
            sites: [
                {
                    title: "From Ocean to Plate",
                    sub: "JFOODO | 2024",
                    link: "https://sponsorcontent.cnn.com/edition/2024/jfoodo/en/ocean-to-plate/",
                    src: require("@/assets/cnn/JFOODO.jpg"),
                    showingImage: false,
                    mouseX: 0,
                    mouseY: 0,
                },
                {
                    title: "Booming Bangladesh",
                    sub: "Federation of Bangladesh Business Chamber | 2023",
                    link: "https://sponsorcontent.cnn.com/edition/2023/booming-bangladesh/",
                    src: require("@/assets/cnn/BB.jpg"),
                    showingImage: false,
                    mouseX: 0,
                    mouseY: 0,
                },
                {
                    title: "Enchanting Journeys",
                    sub: "Tokyo Convention & Visitors Bureau | 2023",
                    link: "https://sponsorcontent.cnn.com/edition/2023/enchanting-journeys/",
                    src: require("@/assets/cnn/SPT.jpg"),
                    showingImage: false,
                    mouseX: 0,
                    mouseY: 0,
                },
                {
                    title: "The Curious Traveler",
                    sub: "ParkRoyal | 2022",
                    link: "https://sponsorcontent.cnn.com/edition/2022/parkroyal/the-curious-traveler/",
                    src: require("@/assets/cnn/TCT.jpg"),
                    showingImage: false,
                    mouseX: 0,
                    mouseY: 0,
                },
                {
                    title: "Capturing Creativity",
                    sub: "Huawei | 2022",
                    link: "https://sponsorcontent.cnn.com/edition/2022/huawei/framing-creativity/",
                    src: require("@/assets/cnn/CC.jpg"),
                    showingImage: false,
                    mouseX: 0,
                    mouseY: 0,
                },
                {
                    title: "Discover Azerbaijan",
                    sub: "Azerbaijan | 2022",
                    link: "https://sponsorcontent.cnn.com/edition/2022/azerbaijan-tourism/discover-the-flavour-of-azerbaijan/",
                    src: require("@/assets/cnn/DA.jpg"),
                    showingImage: false,
                    mouseX: 0,
                    mouseY: 0,
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
                var elementVisible = 100;

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
    margin-top: 49px;
    width: 100%;
}

.banner-m {
    margin-top: 56px;
    height: auto;
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
    margin-left: 148px;
    margin-right: 148px;
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

.browse-title {
    font-family: "Josefin Sans", sans-serif;
    font-size: 18px;
    margin-top: 64px;
    text-align: start;
    margin-left: 148px;
}

.browse-title-m {
    font-family: "Josefin Sans", sans-serif;
    font-size: 18px;
    margin-top: 64px;
    margin-left: 24x;
}

.reveal {
    position: relative;
    transform: translateY(60px);
    opacity: 0;
    transition: 1s all ease;
}

.reveal.active{
  transform: translateY(0);
  opacity: 1;
}
</style>
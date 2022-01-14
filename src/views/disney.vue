<template>
    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <img src="@/assets/disney/disney-banner.svg" :class="[mobileView ? 'banner-m' : 'banner']">
        <div class="heading">
            <header :class="[mobileView ? 'header-m' : 'header']">The Walt Disney Company</header>
            <p :class="[mobileView ? 'subheader-posters-m' : 'subheader-posters']">Creative Marketing Intern, APAC CPGP</p>
        </div>
        <div class="row specs-row" v-if="!mobileView">
            <div class="col l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Company:</p></li>
                    <li><p class="specs-list">The Walt Disney Company</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Strategies:</p></li>
                    <li><p class="specs-list">Concept Design, Graphic Design, Mockups</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">Feb 2021 - Present</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Tools Used:</p></li>
                    <li><p class="specs-list">Adobe Photoshop, Illustrator and After Effects</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Company:</text> The Walt Disney Company</p>
            <p class="specs-list-m"><text class="specs-title-m">Strategies:</text> Concept Design, Graphic Design, Mockups</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> Feb 2021 - Present</p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Adobe Photoshop, Illustrator and After Effects</p>
        </div>
        <header :class="[mobileView ? 'header-2-m' : 'header-2']">Marvel Heroes Unite 2021</header>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">Marvel Heroes Unite brings together heroes across the multiverse. It celebrates each individuals’ strength and prowess, while emphasing the importance of banding together. 
        </div>
        <div class="row specs-row" v-if="!mobileView">
            <div class="col-2 l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Franchise:</p></li>
                    <li><p class="specs-list">Marvel</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Target Audience:</p></li>
                    <li><p class="specs-list">Young Adult and All Ages</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">Feb 2021 - Aug 2021</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Region:</p></li>
                    <li><p class="specs-list">APAC</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Franchise:</text> Marvel</p>
            <p class="specs-list-m"><text class="specs-title-m">Target Audience:</text> Young Adult and All Ages</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> Feb 2021 - Aug 2021</p>
            <p class="specs-list-m"><text class="specs-title-m">Region:</text> APAC</p>
        </div>
        <section class="posters">
            <poster v-for="mhu in mhus" :key="mhu.title" :poster="mhu"></poster>
        </section>
        <header :class="[mobileView ? 'header-2-m' : 'header-2']">Mickey Better Together</header>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">Mickey Better Together celebrates going out and doing good with the people around you. The campaign follows Mickey and Friends as they busk in the great outdoors, while taking care of each other. </div>
        <div class="row specs-row" v-if="!mobileView">
            <div class="col-2 l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Franchise:</p></li>
                    <li><p class="specs-list">Mickey and Friends</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Target Audience:</p></li>
                    <li><p class="specs-list">Families with kids below 5</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">June 2021 - Dec 2021</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Region:</p></li>
                    <li><p class="specs-list">APAC</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Franchise:</text> Mickey and Friends</p>
            <p class="specs-list-m"><text class="specs-title-m">Target Audience:</text> Families with kids below 5</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> June 2021 - Dec 2021</p>
            <p class="specs-list-m"><text class="specs-title-m">Region:</text> APAC</p>
        </div>
        <section class="posters">
            <poster v-for="mbt in mbts" :key="mbt.title" :poster="mbt"></poster>
        </section>
                
        <header :class="[mobileView ? 'header-2-m' : 'header-2']">Love Nature</header>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">Mickey Love Nature aspires to put its own twist on sustainability through regenerative design. By taking a modern design approach towards environmental themes, this campaign aims to appeal to the younger audience with a touch of revitalisation.</div>
        <div class="row specs-row" v-if="!mobileView">
            <div class="col-2 l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Franchise:</p></li>
                    <li><p class="specs-list">Disney</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Target Audience:</p></li>
                    <li><p class="specs-list">Young Adults</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">Aug 2021 - Dec 2021</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Region:</p></li>
                    <li><p class="specs-list">Korea</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Franchise:</text> Disney</p>
            <p class="specs-list-m"><text class="specs-title-m">Target Audience:</text> Young Adults</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> Aug 2021 - Dec 2021</p>
            <p class="specs-list-m"><text class="specs-title-m">Region:</text> Korea</p>
        </div>
        <section class="posters">
            <poster v-for="ln in lns" :key="ln.title" :poster="ln"></poster>
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
    name: "disney",
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
            mhus: [
                { 
                    title: "Marvel Heroes Unite, All Ages, Square Key Visual",
                    src: require("@/assets/disney/MHU_1.png"),
                },     
                { 
                    title: "Marvel Heroes Unite, All Ages, Digital Banner",
                    src: require("@/assets/disney/MHU_2.png"),
                },       
                { 
                    title: "Marvel Heroes Unite, Young Adults, Static Banner",
                    src: require("@/assets/disney/MHU_4.png"),
                },                                                                  
            ],

            mbts: [
                { 
                    title: "Landscape Key Visual",
                    src: require("@/assets/disney/MBT_3.svg"),
                },      
                { 
                    title: "Animated Square Key Visual",
                    src: require("@/assets/disney/MBT.gif"),
                },      
                { 
                    title: "Retail Window Display",
                    src: require("@/assets/disney/MBT_R_WD.png"),
                },   
                { 
                    title: "Retail Front of Store",
                    src: require("@/assets/disney/MBT_R_FOS.png"),
                },                   
                { 
                    title: "Retail Store Environment",
                    src: require("@/assets/disney/MBT_R_SE.png"),
                },   
                { 
                    title: "Retail Double End Cap",
                    src: require("@/assets/disney/MBT_R_DEC.png"),
                },   
                { 
                    title: "Carousel Images",
                    src: require("@/assets/disney/MBT_C.svg"),
                },         
                { 
                    title: "Winter Edition",
                    src: require("@/assets/disney/MBT_W.png"),
                },                                                            
            ],

            lns: [
                {
                    title: "Landscape Key Visual",
                    src: require("@/assets/disney/LN_L.png"),  
                },
                {
                    title: "Character Adaptations",
                    src: require("@/assets/disney/LN_2.svg"),  
                },
                {
                    title: "Green Background for Retail Execution",
                    src: require("@/assets/disney/LN_G_2.svg"),  
                }
            ]
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

.specs-row-2 {
    margin-top: 48px;
    display: flex;
    justify-content: start;
    margin-left: 84px;
}

.specs {
    margin-left: 24px;
    margin-right: 24px;
    text-align: start;
}
.specs {
    margin-left: 24px;
    margin-right: 24px;
    text-align: start;
}

.specs-2 {
    margin-left: 24px;
    margin-right: 120px;
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
</style>
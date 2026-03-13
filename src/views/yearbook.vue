<template>
    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <img src="@/assets/yearbook/ybheader.jpg" :class="[mobileView ? 'banner-m' : 'banner']">
        <div class="heading">
            <header :class="[mobileView ? 'header-m' : 'header']">2022 SUTD Yearbook</header>
            <p :class="[mobileView ? 'subheader-posters-m' : 'subheader-posters']">Editorial Design</p>
        </div>
        <div class="row specs-row" v-if="!mobileView">
            <div class="col l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Project Type:</p></li>
                    <li><p class="specs-list">School Organisation</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Strategies:</p></li>
                    <li><p class="specs-list">Editorial Design, Photography, Visual Design</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">Feb 2022 - Sept 2022</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Tools Used:</p></li>
                    <li><p class="specs-list">Adobe Indesign, Lightroom and Photoshop</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Project Type:</text> School Organisation</p>
            <p class="specs-list-m"><text class="specs-title-m">Strategies:</text> Editorial Design, Photography, Visual Design</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> Feb 2022 - Sept 2022</p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Adobe Indesign, Lightroom and Photoshop</p>
        </div>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
            I led the SUTD Yearbook Committee as the Editor-in-chief to photograph, curate and design the 2022 edition of the SUTD Yearbook. We photographed 333 students and compiled a 216 page yearbook narrating the story of the graduating class of 2022. 
        </div>
        <section class="posters">
            <poster v-for="poster in posters" :key="poster.title" :poster="poster"></poster>
        </section>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
            Special shoutout to Jean, Lucas, Filbert, Nicole and Ferry for bringing the yearbook to fruition. If you would like to view the entire yearbook, please drop me an email! </div>
        <div class="see-more-div">
            <text :class="[mobileView ? 'sm-title-m' : 'sm-title']">See More Projects</text> 
            <see-more-categories :pageType="category" />
        </div>
        <contact-me/>
    </div>
</template>

<script>
import Poster from "../components/Poster.vue";
import SeeMoreCategories from "../components/SeeMoreCategories.vue";
import ContactMe from "../components/ContactMe.vue";

export default ({
    name: "yearbook",
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
            category: "yearbook",
            posters: [
                { 
                    title: "Cover Page",
                    src: require("@/assets/yearbook/yb1.jpg")
                },
                { 
                    title: "Prelude",
                    src: require("@/assets/yearbook/yb2.jpg")
                }, 
                { 
                    title: "Yearbook Committee Page",
                    src: require("@/assets/yearbook/yb3.jpg")
                },  
                { 
                    title: "Message from Senior Management",
                    src: require("@/assets/yearbook/yb9.jpg")
                },  
                { 
                    title: "Senior Gallery Cover",
                    src: require("@/assets/yearbook/yb4.jpg")
                },  
                { 
                    title: "Filler Photo",
                    src: require("@/assets/yearbook/yb5.jpg")
                },  
                { 
                    title: "Filler Photo",
                    src: require("@/assets/yearbook/yb6.jpg")
                },  
                { 
                    title: "Filler Photo",
                    src: require("@/assets/yearbook/yb7.jpg")
                },                
                { 
                    title: "Epilogue",
                    src: require("@/assets/yearbook/yb8.jpg")
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
    align-content: center;
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
}

.banner-m {
    margin-top: 24px;
    height: 100px;
}

.introduction {
    font-size: 18px;
    margin-left: 148px;
    margin-right: 148px;
}

a {
    color: #EA4C89;
}

a:hover {
    color: #ED9DC1;
}
</style>
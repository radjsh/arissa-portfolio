<template>
    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <img src="@/assets/worm-squirm/ws-banner-2.jpg" :class="[mobileView ? 'banner-m' : 'banner']">
        <div class="heading">
            <header :class="[mobileView ? 'header-m' : 'header']">Worm Squirm Typeface</header>
            <p :class="[mobileView ? 'subheader-posters-m' : 'subheader-posters']">Personal Project, Typeface Design</p>
        </div>
        <div class="row specs-row" v-if="!mobileView">
            <div class="col l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Project Type:</p></li>
                    <li><p class="specs-list">Personal</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Strategies:</p></li>
                    <li><p class="specs-list">Typeface Design</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">Dec 2025</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Tools Used:</p></li>
                    <li><p class="specs-list">Procreate, Photoshop</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Project Type:</text> Personal</p>
            <p class="specs-list-m"><text class="specs-title-m">Strategies:</text> Typeface Design</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> Dec 2025</p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Procreate, Photoshop</p>
        </div>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
           What started out as doodles for journal stickers in my sketchbook snowballed into exploring how the flexible form of a worm can be twisted & curled into a typeface.
        </div>

        <header :class="[mobileView ? 'header-2-m' : 'header-2']">The Design Process</header>

        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
            My first consideration was to ensure that the thickness of the worm was consistent across the design of the characters and symbols. To do so, I used an outline brush set to a fixed size on procreate. I hand-drew all the characters and avoided any smart snapping or lines that were too straight, to stay true to the organic nature of a worm.
        </div>

        <img src="@/assets/worm-squirm/ws-4.jpg" class="img3"/>

        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
            I then filled in the outline for the glyphs and started marking out the worm's lines. My plan was to have the eyes and lines of the worm in negative space. My considerations for the lines were to (1) use the lines to clearly show any overlapping areas, (2) try and make them as evenly spaced as possible in each worm, and (3) use them as intentionally as possible so that each glyph is still legible, while still being clear that it's a worm. The following glyphs below showcase some of my design considerations. For glyphs A and H, I struggled to find a way to bend the worm without it being too thick compared to the other glyphs, so for only these 2, I added a "chunk" in the middle. 
        </div>

        <div class="digi-ill">
            <div class="sc-row1">
                <img src="@/assets/worm-squirm/ws-2.jpg" class="img1"/>
                <img src="@/assets/worm-squirm/ws-3.jpg" class="img1"/>
                <img src="@/assets/worm-squirm/ws-1.jpg" class="img1"/>
            </div>
        </div>

        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
            Worm Squirm Typeface contains 75 hand-drawn worm characters. They are bubbly and bold, perfect to give strong headers a wiggly personality. If you would like to download the typeface for personal use, feel free to drop me a message! <br>
        </div>

        <img src="@/assets/worm-squirm/WormSquirm-Presentation.jpg" class="img3"/>

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

export default ({
    name: "worm-squirm",
    components: { SeeMoreCategories, ContactMe },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
        window.addEventListener('scroll', this.reveal);
    },

    data () {
        return {
            mobileView: null,
            windowWidth: null,
            category: "wormsquirm",
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

.banner {
    margin-top: 49px;
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
    margin-left: 180px;
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
    margin-left: 180px;
    margin-right: 180px;
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

.link-style {
    text-underline-offset: 2px;
    text-decoration-color: #F7C760;
    text-decoration-thickness: 3px;
}

a {
    color: #7287B2;
}

a:hover {
   color: #B1BCD5; 
}

.digi-ill {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 48px;
}

.sc-row1 {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: center;
}

.img1 {
    width: 25%;
    margin: 1% 1% 1% 1%;
    border-radius: 10px;
}

.img2 {
    width: 37%;
    margin: 1% 1% 1% 1%;
    border-radius: 10px;
}

.img3 {
    width: 80%;
    margin: 1% 1% 1% 1%;
    border-radius: 10px;
    margin-top: 48px;
}
</style>
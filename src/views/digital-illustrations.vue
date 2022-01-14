<template>
    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <img src="@/assets/digital-illustrations/digital-illustrations-banner.svg" :class="[mobileView ? 'banner-m' : 'banner']">
        <div class="heading">
            <header :class="[mobileView ? 'header-m' : 'header']">Digital Illustrations</header>
            <p :class="[mobileView ? 'subheader-posters-m' : 'subheader-posters']">Personal Project, Illustrations</p>
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
                    <li><p class="specs-list">Digital Illustrations</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">June 2020 - Present</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Tools Used:</p></li>
                    <li><p class="specs-list">Procreate</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Project Type:</text> Personal</p>
            <p class="specs-list-m"><text class="specs-title-m">Strategies:</text> Digital Illustrations</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> June 2020 - Present</p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Procreate</p>
        </div>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
            Buying an iPad meant doodling on the go. From quiet hours on the sofa, to long MRT rides home, I grew fond of creating digital illustrations, each with their own unique story. There is really no limit to what I can create -- unless my apple pencil runs out of battery.
        </div>
        <div class="digi-ill">
            <div class="row1">
                <img src="@/assets/digital-illustrations/alice.svg" class="img1"/>
                <img src="@/assets/digital-illustrations/otgw.svg" class="img1"/>
            </div>
            <div class="row1">
                <img src="@/assets/digital-illustrations/adventure-time.svg" class="img1"/>
                <img src="@/assets/digital-illustrations/space-to-grow.svg" class="img1"/>                
            </div>
            <div class="row1">
                <img src="@/assets/digital-illustrations/sutd-hoodie.svg" class="img1"/>
                <img src="@/assets/digital-illustrations/spidey.svg" class="img1"/>                
            </div>
            <div class="row1">
                <img src="@/assets/digital-illustrations/ghost.svg" class="img1"/>
                <img src="@/assets/digital-illustrations/snake.svg" class="img1"/>                
            </div>
            <div class="row1">
                 <img src="@/assets/digital-illustrations/comic.svg" class="img2"/>               
            </div>
            <div class="row1">
                <img src="@/assets/digital-illustrations/tangled.svg" class="img1"/>
                <img src="@/assets/digital-illustrations/body-to-work.svg" class="img1"/>                
            </div>
            <div class="row1">
                <img src="@/assets/digital-illustrations/home.svg" class="img1"/>
                <img src="@/assets/digital-illustrations/float.svg" class="img1"/>                
            </div>
        </div>
        <div class="see-more-div">
            <text :class="[mobileView ? 'sm-title-m' : 'sm-title']">See More Projects</text> 
            <see-more-categories/>
        </div>
        <contact-me/>
    </div>
</template>

<script>
import SeeMoreCategories from "../components/SeeMoreCategories.vue";
import ContactMe from "../components/ContactMe.vue";

export default ({
    name: "digital-illustrations",
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

.digi-ill {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 48px;
}

.row1 {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: center;
}

.img1 {
    width: 40%;
    margin: 1% 1% 1% 1%;
    border-radius: 10px;
}

.img2 {
    width: 82%;
    margin: 1% 1% 1% 1%;
    border-radius: 10px;
}
</style>
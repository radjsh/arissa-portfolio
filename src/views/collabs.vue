<template>
    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <img src="@/assets/collabs/collabs-banner.jpg" :class="[mobileView ? 'banner-m' : 'banner']">
        <div class="heading">
            <header :class="[mobileView ? 'header-m' : 'header']">Rissaartt Collaborations</header>
            <p :class="[mobileView ? 'subheader-posters-m' : 'subheader-posters']">Freelance, Illustration</p>
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
                    <li><p class="specs-list">Illustration, Product Design</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">2023 - Present</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Tools Used:</p></li>
                    <li><p class="specs-list">Procreate, Illustrator, Photoshop</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Project Type:</text> Paid Clients</p>
            <p class="specs-list-m"><text class="specs-title-m">Strategies:</text> Illustration, Product Design</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> 2023 - Present</p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Procreate, Illustrator, Photoshop</p>
        </div>

        <div :class="[mobileView ? 'overview-m reveal' : 'overview add-margin reveal']">
            Beyond Rissaartt's own world, I've partnered with brands and organisations to bring my character-driven charm to their campaigns and communities. From media stickers for CNA to fundraising illustrations at HerpsocSG, these collaborations span different goals (brand awareness, audience engagement, fundraising), but share the same approach of connecting with the brand's audience in a relatable and fun way.
        </div>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">CNA Originals Stickers</header>

        <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
            I was commissioned by the CNA team to create a series of visually compelling stickers that reinforce CNA's brand awareness. Each sticker reflects a CNA Originals programme, capturing its theme and personality. The stickers were distributed to interview guests and the public at engagement events.
        </div>
        <poster key="CNA1" :poster="CNA1"></poster>

        <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
            CNA later approached me again to create a new sticker series as CNA Originals' audience expanded into the Western hemisphere. This time, the designs leaned into Western audiences' love for all things Asia, reflecting the programmes being showcased at their event.
        </div>
        <poster key="CNA2" :poster="CNA2"></poster>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Corporate Sticker Sheets</header>

        <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
            I was commissioned by GROW©, Sephora, and SHINE (from left to right) to design sticker sheets that would help each brand connect with their audience and build brand awareness. SHINE's sheet was created specifically to thank their social workers as part of their anniversary celebration. The sticker sheets were given out as free gifts / gifts with purchase.
        </div> 
        <poster key="sts" :poster="sts"></poster>

        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">Herpetological Society of Singapore (HSS) Stickers</header>

        <div :class="[mobileView ? 'overview-m reveal' : 'overview reveal']">
            I collaborated with the HSS team to design seven stickers featuring frogs native to Singapore, alongside an educational infographic sharing fun facts about each species. I chose a semi-realistic style to stay true to the frogs' natural colours and textures, while still giving each one a touch of personality. The stickers were sold at HSS events to raise funds for the organisation.         </div> 
        <poster key="hs" :poster="hs"></poster>





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
import Poster from "../components/Poster.vue";

export default ({
    name: "collabs",
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
            category: "collabs",
            CNA1: { 
                src: require("@/assets/collabs/CNA1.jpg")
            },  
            CNA2: { 
                src: require("@/assets/collabs/CNA2.jpg")
            },  
            sts: { 
                src: require("@/assets/collabs/sts.png")
            }, 
            hs: { 
                src: require("@/assets/collabs/herpsoc.png")
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
    margin-top: 49px;
    width: 100%;
}

a {
    color: #7287B2;
}

a:hover {
    color: #B1BCD5;
}

.link-style {
    text-underline-offset: 2px;
    text-decoration-color: #F7C760;
    text-decoration-thickness: 3px;
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

.add-margin{
    margin-top:100px;
    margin-bottom:120px;
}
</style>

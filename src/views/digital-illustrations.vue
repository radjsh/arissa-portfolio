<template>
    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <img src="@/assets/digital-illustrations/digital-illustrations-banner.jpg" :class="[mobileView ? 'banner-m' : 'banner']">
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
        <div :class="[mobileView ? 'overview-m' : 'overview']">
            My digital illustrations turn everyday moments and feelings into light and playful stories, usually featuring original characters such as Bonky and Robert the Corporate Frog.
        </div>
        <div class="digi-ill">
            <div class="row1">
                <img src="@/assets/digital-illustrations/r1c1.jpg" class="img1"/>
                <img src="@/assets/digital-illustrations/r1c2.jpg" class="img1"/>
            </div>
            <div class="row1">
                <img src="@/assets/digital-illustrations/r2c1.jpg" class="img1"/>
                <img src="@/assets/digital-illustrations/r2c2.jpg" class="img1"/>                
            </div>
            <div class="row1">
                <img src="@/assets/digital-illustrations/r3c1.jpg" class="img1"/>
                <img src="@/assets/digital-illustrations/r3c2.jpg" class="img1"/>                
            </div>
            <div class="row1">
                <img src="@/assets/digital-illustrations/r4c1.jpg" class="img1"/>
                <img src="@/assets/digital-illustrations/r4c2.jpg" class="img1"/>                
            </div>
            <div class="row1">
                <img src="@/assets/digital-illustrations/r5c1.jpg" class="img1"/>
                <img src="@/assets/digital-illustrations/r5c2.jpg" class="img1"/>                
            </div>
            <div class="row1">
                <img src="@/assets/digital-illustrations/r6c1.jpg" class="img1"/>
                <img src="@/assets/digital-illustrations/r6c2.jpg" class="img1"/>                
            </div>
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
            category: "digital-illustrations",
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
.banner {
    margin-top: 56px;
    width:100%;
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
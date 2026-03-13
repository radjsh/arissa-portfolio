<template>
    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <img src="@/assets/lta/lta-banner.jpg" :class="[mobileView ? 'banner-m' : 'banner']">
        <div class="heading">
            <header :class="[mobileView ? 'header-m' : 'header']">LTA Move Lite Campaign</header>
            <p :class="[mobileView ? 'subheader-posters-m' : 'subheader-posters']">Freelance Illustrator</p>
        </div>
        <div class="row specs-row" v-if="!mobileView">
            <div class="col l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Company:</p></li>
                    <li><p class="specs-list">LTA x BLKJ Havas</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Strategies:</p></li>
                    <li><p class="specs-list">Digital Illustration</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">Sept 2024 - Nov 2024</p></li>
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
            <p class="specs-list-m"><text class="specs-title-m">Company:</text> LTA x BLKJ Havas</p>
            <p class="specs-list-m"><text class="specs-title-m">Strategies:</text> Digital Illustration</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> Sept 2024 - Nov 2024</p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Procreate</p>
        </div>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
            The "Reasons to Move Lite" campaign by Singapore Land Transport Authority (LTA) aimed to brighten up commute spaces and inspire Singaporeans to adopt sustainable and active transportation habits. A series of stories were collected, sharing how locals embraced moving lite in their daily lives. I was commissioned to bring 2 of these stories to life through my illustrations. The artworks were presented in both horizontal and vertical formats for display at train stations across the island.
        </div>

        <header :class="[mobileView ? 'header-2-m' : 'header-2']">Reason #30: Exploring new walking routes with my furkids!</header>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
            For this quote, my main onjective was to capture the excitement and joy of shared exploration. I played with the scale of the animals to create a stronger focus on them, and experimented with different color schemes to set the tone and visual hierarchy. These variations helped me to evaluate which palette best conveyed the cheerful and dynamic mood of the scene. 
        </div>

        <div class="digi-ill">
            <div class="sc-row1">
                <img src="@/assets/lta/q30-1.jpg" class="img1"/>
                <img src="@/assets/lta/q30-2.jpg" class="img1"/>
                <img src="@/assets/lta/q30-3.jpg" class="img1"/>
            </div>
        </div>

        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
            The completed artwork celebrates the joy of exploration and companionship, resonating with the campaign mission of inspiring active and joyful living. The design can be spotted at 12 train stations.
        </div>

        <div class="digi-ill">
            <div class="sc-row1">
                <img src="@/assets/lta/q30-4.jpg" class="img3"/>
            </div>
            <div class="sc-row1">
                <img src="@/assets/lta/q30-5.jpg" class="img2"/>
                <img src="@/assets/lta/q30-6.jpg" class="img2"/>
            </div>
        </div>

        <header :class="[mobileView ? 'header-2-m' : 'header-2']">Reason #31: Feeling like my best self as I get to enjoy nature's beauty.</header>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
            For this quote, my goal was to convey the idea of "best self" by illustrating the main character glowing, reflecting his inner peace and harmony with nature. The character was designed to look serene and fully immersed in the beauty of the natural surroundings. After discussions with the client, we decided to add clones of the main character in the composition to add movement and energy, bringing more life and dynamism to the scene.
        </div>

        <div class="digi-ill">
            <div class="sc-row1">
                <img src="@/assets/lta/q31-1.jpg" class="img1"/>
                <img src="@/assets/lta/q31-2.jpg" class="img1"/>
                <img src="@/assets/lta/q31-3.jpg" class="img1"/>
            </div>
        </div>

        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
            The final artwork radiates positivity and wonder, embodying the joy of being at peace with oneself and the world. The illustration is displayed in 3 train stations, encouraging people to embrace lighter and more meaningful ways of living.
        </div>

        <div class="digi-ill">
            <div class="sc-row1">
                <img src="@/assets/lta/q31-4.jpg" class="img3"/>
            </div>
            <div class="sc-row1">
                <img src="@/assets/lta/q31-5.jpg" class="img2"/>
                <img src="@/assets/lta/q31-6.jpg" class="img2"/>
            </div>
        </div>


        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
            Overall, it was an exciting and fulfilling challenge to bring to life people’s reasons to move lite. Each illustration presented a unique opportunity to explore different themes and emotions, making the project both rewarding and creatively stimulating.
            <br><br>
            A heartfelt thank you to LTA and BLKJ Havas for the opportunity to contribute to this meaningful campaign. And a special thank you to everyone who shared sightings of the illustrations, it was truly encouraging to see them resonating with the public! :)
            <br><br>
            If you are curious to see the artwork in person, I’ve compiled a map with all the locations where the illustrations are displayed. Feel free to explore and spot the visuals on your next commute!
        </div>

        <div class="digi-ill">
            <div class="sc-row1">
                <img src="@/assets/lta/map.jpg" class="img3"/>
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
    name: "lta",
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
            category: "lta",
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

.header-2 {
    margin-left: 180px;
}

.introduction {
    font-size: 18px;
    margin-left: 180px;
    margin-right: 180px;
    line-height: 26px;
}

.specs-row-2 {
    margin-top: 48px;
    display: flex;
    justify-content: start;
    margin-left: 84px;
}

.specs-2 {
    margin-left: 24px;
    margin-right: 120px;
    text-align: start;
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

.img3 {
    width: 80%;
    margin: 1% 1% 1% 1%;
    border-radius: 10px;
}
</style>
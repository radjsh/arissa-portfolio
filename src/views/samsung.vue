<template>
    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <img src="@/assets/samsung-casetify/header.jpg" :class="[mobileView ? 'banner-m' : 'banner']">
        <div class="heading">
            <header :class="[mobileView ? 'header-m' : 'header']">Samsung x Casetify</header>
            <p :class="[mobileView ? 'subheader-posters-m' : 'subheader-posters']">Freelance Illustrator</p>
        </div>
        <div class="row specs-row" v-if="!mobileView">
            <div class="col l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Company:</p></li>
                    <li><p class="specs-list">Samsung x Casetify</p></li>
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
                    <li><p class="specs-list">Dec 2023 - Jan 2024</p></li>
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
            <p class="specs-list-m"><text class="specs-title-m">Company:</text> Samsung x Casetify</p>
            <p class="specs-list-m"><text class="specs-title-m">Strategies:</text> Digital Illustration</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> Dec 2023 - Jan 2024</p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Procreate</p>
        </div>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
            As part of Samsung’s new S24 Galaxy launch, I was one of the 11 local artists invited to be part of the Epic Playground and design casetify phone covers inspired by local Singapore elements. Additionally, the designs were adapted into Galaxy themes and marketing material on the trains. 
            <br>
            <br>
            In crafting this collection, I drew inspiration from life’s subtle yet profound moments, illuminating the simple yet exciting moments of everyday life that are often overlooked. Check out the entire Casetify collection <b><a class="link-style" href="https://cdn.casetify.com/collection/epic-galaxy-singapore-edition?" target="_blank">here</a></b>.
        </div>

        <div class="digi-ill">
            <div class="sc-row1">
                <img src="@/assets/samsung-casetify/c1.png" class="img1"/>
                <img src="@/assets/samsung-casetify/c2.png" class="img1"/>
                <img src="@/assets/samsung-casetify/c3.png" class="img1"/>
            </div>
        </div>

        <div :class="[mobileView ? 'introduction-m' : 'introduction']">
            The highlight of this project was getting to see my design on the train. It was such a blessing to have my own EPIC experience on the commute to work!
        </div>

        <div class="digi-ill">
            <div class="sc-row1">
                <img src="@/assets/samsung-casetify/c4.jpg" class="img2"/>
                <img src="@/assets/samsung-casetify/c5.jpg" class="img2"/>
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
    name: "samsung",
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
            category: "samsung",
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
</style>
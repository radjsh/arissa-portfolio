<template>
    <div v-if="!mobileView" class="cat-select-div reveal">
        <text class="select-text" >select category:</text>
        <div class="cat-select cs-1" @click="csSelected('cs1')" id="cs1">
            <text>corporate work</text>
            <img v-if="cs1Selected" src="@/assets/x.svg" class="x">
            </div>
        <div class="cat-select cs-2" @click="csSelected('cs2')" id="cs2">
            <text>freelance illustrations</text>
            <img v-if="cs2Selected" src="@/assets/x.svg" class="x">
        </div>
        <div class="cat-select cs-3" @click="csSelected('cs3')" id="cs3">
            <text>passion projects</text>
            <img v-if="cs3Selected" src="@/assets/x.svg" class="x">
        </div>
        <div class="cat-select redo" @click="csSelected('redo')" id="redo">
            <img src="@/assets/redo.svg">
        </div>
    </div>
    <section class="category reveal">
        <portfolio-card
        v-for="(category, index) in filteredCategories"
        :key="category.title"
        :category="category"
        :class="{ 'reveal': index >= 0 }"/>
    </section>
    
</template>

<script>
import PortfolioCard from './PortfolioCard.vue';
export default {
    components: { PortfolioCard },
    name: "portfolio-categories",
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
        window.addEventListener('scroll', this.reveal);
      },

    data () {
        return {
            categories: [
                {
                    title: 'CNN Scrollytelling Sites',
                    subheader: 'website design',
                    src: require("@/assets/portfolio-categories/cnn.jpg"),
                    path: 'cnn',
                    cat: 'cw',
                },
                {
                    title: 'The Walt Disney Company, APAC',
                    subheader: 'graphic design & creative marketing',
                    src: require("@/assets/portfolio-categories/disney.jpg"),
                    path: 'disney',
                    cat: 'cw',
                },
                {
                    title: 'LTA Move Lite Campaign',
                    subheader: 'illustration',
                    src: require("@/assets/portfolio-categories/lta.jpg"),
                    path: 'lta',
                    cat: 'fi',
                },
                {
                    title: 'Worm Squirm Typeface',
                    subheader: 'typeface design',
                    src: require("@/assets/portfolio-categories/worm-squirm.jpg"),
                    path: 'wormsquirm',
                    cat: 'pp',
                },
                {
                    title: 'Samsung x Casetify',
                    subheader: 'illustration',
                    src: require("@/assets/portfolio-categories/samsungxcasetify.jpg"),
                    path: 'samsung',
                    cat: 'fi',
                },
                {
                    title: 'Shopee, Singapore',
                    subheader: 'ui/ux design & prototyping',
                    src: require("@/assets/portfolio-categories/shopee.jpg"),
                    path: 'shopee',
                    cat: 'cw',
                },
                {
                    title: 'Hop App, Singapore',
                    subheader: 'ui/ux design & prototyping',
                    src: require("@/assets/portfolio-categories/hop.jpg"),
                    path: 'hop',
                    cat: 'cw',
                },
                {
                    title: '2022 SUTD Yearbook',
                    subheader: 'editorial design',
                    src: require("@/assets/portfolio-categories/yearbook.jpg"),
                    path: 'yearbook',
                    cat: 'pp',
                },
                {
                    title: '30 days of UI challenge',
                    subheader: 'ui/ux design & graphic design',
                    src: require("@/assets/portfolio-categories/30daysofuichallenge.svg"),
                    path: 'ui-challenge',
                    cat: 'pp',
                },
                {
                    title: 'Logos & Icons',
                    subheader: 'graphic design',
                    src: require("@/assets/portfolio-categories/logos.svg"),
                    path: 'logos-and-icons',
                    cat: 'fi',
                },
                {
                    title: 'Telegram Stickers',
                    subheader: 'illustrations, graphic design & animation',
                    src: require("@/assets/portfolio-categories/tele.jpg"),
                    path: 'telegram-stickers',
                    cat: 'pp',
                },
                {
                    title: 'Digital Illustrations',
                    subheader: 'graphic design & digital illustration',
                    src: require("@/assets/portfolio-categories/digital-illustrations.svg"),
                    path: 'digital-illustrations',
                    cat: 'pp',
                },
            ],
            mobileView: null,
            windowWidth: null,
            cs1Selected: false,
            cs2Selected: false,
            cs3Selected: false,
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

        csSelected(cs){
            console.log("CS: " + cs);
            const cs1 = document.getElementById('cs1');
            const cs2 = document.getElementById('cs2');
            const cs3 = document.getElementById('cs3');
            if (cs == "redo"){
                this.cs1Selected = false;
                this.cs2Selected = false;
                this.cs3Selected = false;
                this.catSelect = ['all'];
                cs1.classList.remove('cs-1-selected');
                cs2.classList.remove('cs-2-selected');
                cs3.classList.remove('cs-3-selected');                
            }
            if (cs == "cs1"){
                this.cs1Selected = !this.cs1Selected;
                if (this.cs1Selected == true){
                    cs1.classList.add('cs-1-selected')
                    this.cs2Selected = false;
                    this.cs3Selected = false;
                    cs2.classList.remove('cs-2-selected');
                    cs3.classList.remove('cs-3-selected');
                } else {
                    cs1.classList.remove('cs-1-selected')
                }
            } 
            if (cs == "cs2") {
                this.cs2Selected = !this.cs2Selected;
                if (this.cs2Selected == true){
                    cs2.classList.add('cs-2-selected');
                    this.cs1Selected = false;
                    this.cs3Selected = false;
                    cs1.classList.remove('cs-1-selected');
                    cs3.classList.remove('cs-3-selected');
                } else {
                    cs2.classList.remove('cs-2-selected');
                }
            }
            if (cs == "cs3") {
                this.cs3Selected = !this.cs3Selected;
                if (this.cs3Selected == true){
                    cs3.classList.add('cs-3-selected');
                    this.cs2Selected = false;
                    this.cs1Selected = false;
                    cs2.classList.remove('cs-2-selected');
                    cs1.classList.remove('cs-1-selected');
                } else {
                    cs3.classList.remove('cs-3-selected');
                }
            }
            setTimeout(() => {
                this.reveal();
            }, 100);
        }
    },

    computed : {
        filteredCategories() {
            if (this.cs1Selected){
                return this.categories.filter(category => category.cat === 'cw');
            } 
            if (this.cs2Selected){
                return this.categories.filter(category => category.cat === 'fi');
            }
            if (this.cs3Selected){
                return this.categories.filter(category => category.cat === 'pp');
            }
            else {
                return this.categories;
            }
            
        },
    }
}
</script>

<style scoped>
@font-face {
  font-family: "Josefin Sans";
  src: local("Josefin Sans"),
   url("../fonts/JosefinSans-VariableFont_wght.ttf") format("truetype");
  color: #2F2A1B;
}

.category {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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

.cat-select-div {
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.select-text {
    font-family: "Josefin Sans", sans-serif;
    font-size: 20px;
    font-weight: 600;
}

.cat-select {
    font-family: "Josefin Sans", sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin-left: 48px;
    padding: 10px 20px 10px 20px;
    border: 1.5px solid;
    border-color: #2F2A1B;
    border-radius: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.cs-1:hover {
    cursor: pointer;
    background-color: #CBDAEE;
    transition: all 0.3s ease-in-out;
}

.cs-2:hover {
    cursor: pointer;
    background-color: #FBDA94;
    transition: all 0.3s ease-in-out;
}

.cs-3:hover {
    cursor: pointer;
    background-color: #EBA397;
    transition: all 0.3s ease-in-out;
}

.redo:hover {
    cursor: pointer;
    background-color: #bec6a0;
    transition: all 0.3s ease-in-out;
}

.cs-1-selected {
    background-color: #BECFE6;
    border-color: #9AADC7;
    border: 2px solid;
    transition: all 0.3s ease-in-out;
}

.cs-2-selected {
    background-color: #F7C65F;
    border-color: #EDB642;
    border: 2px solid;
    transition: all 0.3s ease-in-out;
}

.cs-3-selected {
    background-color: #E09386;
    border-color: #B97265;
    border: 2px solid;
    transition: all 0.3s ease-in-out;
}

.x {
    margin-left: 8px;
    width: 20px;
    height: auto;
}
</style>
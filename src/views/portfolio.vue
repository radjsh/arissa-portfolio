<template>
  <div class="lp-card">
    <div class="lp"/>
      <img class="arissa-header" alt="arissa-header" src="@/assets/arissa-header.svg">
      <div :class="[mobileView ? 'lp-sh-m' : 'lp-sh']">
        <text :class="[mobileView ? 'landing-page-mobile-subheader' : 'landing-page-subheader']" >ui/ux design | graphic design | illustrator</text>
      </div>
      <img :class="[mobileView ? 'landing-graphic-m' : 'landing-graphic']" src="@/assets/landing-graphic.svg"/>
  </div>
  <portfolio-categories/>
  <contact-me/>
</template>

<script>
import PortfolioCategories from "../components/PortfolioCategories.vue";
import ContactMe from "../components/ContactMe.vue";

export default {
  created() {
    console.log("Path:" + this.$route.path); 
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
    window.addEventListener('scroll', this.reveal);

  },

  name: 'Portfolio',
  components: {
    PortfolioCategories,
    ContactMe
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
      var reveals = document.querySelectorAll(".reveal")

      for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 200;

          if (elementTop < windowHeight - elementVisible) {
              reveals[i].classList.add("active");
          } else {
              reveals[i].classList.remove("active");
          }               
      }           
    },
  }
}
</script>

<style>
#app {
  text-align: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 120px;
}

.lp {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 120px;
}

.lp-sh {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 120px;
}

.lp-sh-m {
  text-align: center;
  margin-top: 12px;
  margin-bottom: 48px;
}

@font-face {
  font-family: "Futura-Med";
  src: local("Futura-Med"),
   url("../fonts/Futura-medium-bt.ttf") format("truetype");
  color: #2F2A1B;
}

@font-face {
  font-family: "Futura-Book";
  src: local("Futura-Book"),
   url("../fonts/Futura-Book-font.ttf") format("truetype");
  color: #2F2A1B;
}

.arissa-header {
  width: 40%;
  height: auto;
}

.landing-page-subheader{
    font-family: "Futura-Med";
    font-size: 32px;
}

.landing-page-mobile-subheader {
    font-family: "Futura-Med";
    font-size: 16px;
}
.lp-card {
  background-color: white;  
}

.landing-graphic {
  width: 80%;
  height: auto;
}

.landing-graphic-m {
  width: 100%;
  height: auto;
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

</style>


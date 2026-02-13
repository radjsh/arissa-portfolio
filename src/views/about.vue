<template>
    <section :class="[mobileView ? 'about-div-m' : 'about-div']">
        <div :class="[mobileView ? 'img-div-m' : 'img-div']">
            <img class="img" src="@/assets/me.png"/>
        </div>
        <div :class="[mobileView ? 'text-div-m' : 'text-div']">
            <text :class="[mobileView ? 'about-header-m' : 'about-header']">hi there,</text>
            <p :class="[mobileView ? 'body-text-m' : 'body-text']">I&#39;m arissa! I&#39;m a ui/ux and graphic designer based in Singapore, who graduated with a B.Eng (hons) in computer science and a major in ui/ux design.  
                <br>
                <br>I&#39;m currently working at CNN International as a digital designer, and have worked at the Walt Disney Company doing creative marketing.
                <br>
                <br>I love telling stories through visual media and turning my designs and creations to life. I&#39;m also incredibly curious and am always seeking new things to learn and try.
                <br>
                <br>When I&#39;m not designing things, you can find me out on a run or on the football field. I also run an <b><a class="link-style" href="https://rissaartt.shop/" target="_blank">art shop</a></b> where I sell goodies such as socks and claw clips! 
                <br>
                <br>If you&#39;re lucky, you might even catch me coding.
            </p>
        </div>
    </section>
    <contact-me/>
</template>

<script>
import ContactMe from '../components/ContactMe.vue';
export default {
  components: { ContactMe },

  name: 'About',

    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
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
        }
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

.about-div {
    display: flex;
    flex-direction: row;
    flex: 1;
    margin-top: 140px;
    align-items: center;
}

.about-div-m {
    display: flex;
    flex-direction: column;
    margin-top: 100px;    
}

.img-div {
    width: 50%;
    justify-content: center;
}

.img-div-m {
    width: 100%;
    justify-content: center;
}

.img {
    width: 60%;
    justify-content: center;
    border-radius: 2%;
}

.text-div {
    width: 50%;
    text-align: left;
}

.text-div-m {
    margin-top: 24px;
    width: 100%;
    text-align: left;
}

.about-header {
    font-family: "Josefin Sans", sans-serif;
    font-size: 36px;
    padding-left: 40px;
}

.about-header-m {
    font-family: "Futura-Med";
    font-size: 18px;
    padding-left: 24px;
}

.body-text {
    font-family: "Futura-Med";
    font-size: 16px;
    padding-left: 40px;
    padding-right: 200px;
    line-height: 30px;
}

.body-text-m {
    font-family: "Futura-Book";
    font-size: 14px;
    padding-left: 24px;
    padding-right: 24px;
    line-height: 20px;
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
</style>
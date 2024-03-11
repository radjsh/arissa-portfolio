<template>
    <section :class="[mobileView ? 'sb-div-m' : 'sb-div']">
        <div :class="[mobileView ? 'sb-text-div-m' : 'sb-text-div']">
            <text :class="[mobileView ? 'sb-header-m' : 'sb-header']">Sanbox</text>
            <p :class="[mobileView ? 'sb-body-text-m' : 'sb-body-text']">My experiments :D  
            </p>
            <spline :scene=scenes.first />
        </div>
    </section>
</template>

<script>
import Spline from 'vue-spline';
import SCENE from '../scenes/scene1.json'
export default {
  name: 'Sandbox',
  components: Spline,

    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },

    data () {
        return {
            mobileView: null,
            windowWidth: null,
            scenes: {
                first: SCENE
            }
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
    },
    
}

</script>

<style scoped>
.sb-div {
    display: flex;
    flex-direction: row;
    flex: 1;
    margin-top: 140px;
    align-items: center;
    justify-content: center;
}

.sb-div-m {
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

.sb-text-div {
    width: 80%;
    text-align: center;
}

.sb-text-div-m {
    margin-top: 24px;
    width: 100%;
    text-align: left;
}

.sb-header {
    font-family: "Josefin Sans", sans-serif;
    font-size: 36px;
    padding-left: 40px;
}

.sb-header-m {
    font-family: "Futura-Med";
    font-size: 24px;
    padding-left: 24px;
}

.sb-body-text {
    font-family: "Futura-Med";
    font-size: 16px;
    padding-left: 0px;
    padding-right: 0px;
    line-height: 30px;
}

.sb-body-text-m {
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
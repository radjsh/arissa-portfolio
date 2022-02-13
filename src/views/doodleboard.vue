<template>
    <div class='bb-div'>
        <text class="bb-header">Doodle Board</text>
        <p class="subheader">Design is more fun when done with others, add a drawing to the doodle board! This feature is still a work in progress, but feel free to try out the controls :')</p>
    </div>
    <bulletin-board v-if="!mobileView"/>
    <img src="@/assets/wip.svg" v-if="mobileView"/>
</template>

<script>
import BulletinBoard from '../components/BulletinBoard.vue';
export default {
  components: { BulletinBoard },
  created() {
    console.log("Path:" + this.$route.path); 
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  name: 'Doodleboard',

  data () {
    return {
      mobileView: null
    }
  },

  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      this.canvasWidth = this.windowWidth * 0.6;
      this.canvasHeight = this.canvasWidth * 0.8;
      if (this.windowWidth <= 1024){
        this.mobileView= true;
        return;
      }
      console.log("CANVAS WIDTH: " + this.canvasWidth);
      console.log("CANVAS HEIGHT: " + this.canvasHeight);
      this.mobileView = false;
    }
  }
}
</script>

<style>
  .bb-header{
     font-family: "Josefin Sans", sans-serif;
     font-size: 32px;
  }

  .subheader {
    font-family: "Futura-Book";
    size: 14px;
    margin: 24px;
  }

  .bb-div {
    margin-top: 140px;
    margin-bottom: 48px;
  }
</style>
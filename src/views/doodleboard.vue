<template>
    <div class='bb-div'>
        <text class="bb-header">Doodle Board</text>
        <p class="subheader" v-if="!mobileView">Design is more fun when done with others, add a drawing to the doodle board!</p>
        <p class="subheader" v-else>This feature is still a work in progress for tablets and mobile :') check back soon!</p>
    </div>
    <bulletin-board v-if="!mobileView"/>
    <img class="wip" src="@/assets/wip.svg" v-if="mobileView"/>
    <div :class="[mobileView? 'gallery-m' : 'gallery']">
        <gallery-canvas v-for="canvas in canvases" :key="canvas.id" :canvas="canvas"/>
    </div>
    <contact-me/>
</template>

<script>
import BulletinBoard from '../components/BulletinBoard.vue';
import GalleryCanvas from '../components/GalleryCanvas.vue';
import ContactMe from "../components/ContactMe.vue";

export default {
  components: { BulletinBoard, GalleryCanvas, ContactMe },
  created() {
    console.log("Path:" + this.$route.path); 
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  name: 'Doodleboard',

  data () {
    return {
      mobileView: null,
      canvases: [
        {
          id: "01",
          src: require("@/assets/canvas-placeholder.svg")
        },
        {
          id: "02",
          src: require("@/assets/canvas-placeholder.svg")
        },
        {
          id: "03",
          src: require("@/assets/canvas-placeholder.svg")
        },
        {
          id: "04",
          src: require("@/assets/canvas-placeholder.svg")
        },
        {
          id: "05",
          src: require("@/assets/canvas-placeholder.svg")
        },
      ]
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

  .wip {
    margin-left: 12px;
    margin-right: 12px;
  }

  .gallery {
    display: flex;
    flex: 1 1 40%;
    overflow: auto;
    white-space: nowrap;
    margin-left: 48px;
    margin-top: 64px;
    margin-bottom: 64px;
  }

  .gallery-m {
    display: flex;
    flex: 1 1 40%;
    overflow: auto;
    white-space: nowrap;
    margin-left: 12px;
    margin-top: 24px;
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
</style>
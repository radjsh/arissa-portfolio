<template>
    <div class='bb-div'>
        <text class="bb-header">Doodle Board</text>
        <p class="subheader" v-if="!mobileView">Design is more fun when done with others, add a drawing to the doodle board!</p>
        <p class="subheader" v-else>This feature is still a work in progress for tablets and mobile :') check back soon!</p>
    </div>
    <bulletin-board v-if="!mobileView"/>
    <img class="wip" src="@/assets/wip.svg" v-if="mobileView"/>
    <div :class="[mobileView? 'gallery-m' : 'gallery']">
        <canvas :class="[mobileView ? 'image-m' : 'image']" src="@/assets/canvas-placeholder.svg" id="canvas01"/>
        <canvas :class="[mobileView ? 'image-m' : 'image']" src="@/assets/canvas-placeholder.svg" id="canvas02"/>
        <canvas :class="[mobileView ? 'image-m' : 'image']" src="@/assets/canvas-placeholder.svg" id="canvas03"/>
        <canvas :class="[mobileView ? 'image-m' : 'image']" src="@/assets/canvas-placeholder.svg" id="canvas04"/>
        <canvas :class="[mobileView ? 'image-m' : 'image']" src="@/assets/canvas-placeholder.svg" id="canvas05"/>
    </div>
    <contact-me/>
</template>

<script>
import BulletinBoard from '../components/BulletinBoard.vue';
import ContactMe from "../components/ContactMe.vue";
import { db } from "../firebase.js";
// import { collection, getDocs } from "firebase/firestore"; 
// import projectFirestore from "@/services/firebase.js";

export default {
  components: { BulletinBoard, ContactMe },
  created() {
    console.log("Path:" + this.$route.path); 
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
    this.retrieveCanvases();
  },

  name: 'Doodleboard',

  data () {
    return {
      mobileView: null,
      elementCount: 1,
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
    },

    async retrieveCanvases() {
      try {
        const image = db.collection('canvases').orderBy('date', 'desc').limit(5);
    
        image.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {this.convertURLToImageData(doc.data().image);
            // console.log(`${doc.id} => ${doc.data().image}`);
            // this.convertURLtoImage(doc.data().image)
          })
        })
        this.elementCount = 1;
        return image;
      }
      catch (e) {
        console.error(e);
      }
    },

    convertURLToImageData(URL) {
      var name = "canvas0" + this.elementCount
      console.log("NAME: " + name)
      this.elementCount += 1
      if (this.elementCount == 6){
        this.elementCount = 1
      }
      return new Promise(function(resolve, reject) {
        if (URL == null) return reject();
        var canvas = document.getElementById(name)
        var context = canvas.getContext('2d')
        var image = new Image();
        image.addEventListener('load', function() {
          canvas.width = image.width;
          canvas.height = image.height;
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
          resolve(context.getImageData(0, 0, canvas.width, canvas.height));
        }, false);
        image.src = URL;
      })
    },
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

  .image {
    width: 420px;
    height: 280px;
    border-radius: 10px;
    margin-right: 24px;
    background-color: #F1E8E6;
}

  .image-m {
      width: 200px;
      height: 133px;
      border-radius: 10px;
      margin-right: 12px;
      background-color: #F1E8E6;
  }
</style>
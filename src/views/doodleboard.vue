<template>
    <div class='bb-div'>
        <text class="bb-header">Doodle Board</text>
        <p class="subheader" v-if="!mobileView">Design is more fun when done with others, add a drawing to the doodle board!</p>
        <p class="subheader" v-else>Design is more fun when done with others, add a drawing to the doodle board!</p>
    </div>
    <bulletin-board v-if="!mobileView"/>
    <bulletin-board-mobile v-else/>

    <!-- Latest 5 drawings: horizontal scroll gallery -->
    <div :class="[mobileView? 'gallery-m' : 'gallery']">
        <canvas :class="[mobileView ? 'image-m' : 'image']" src="@/assets/canvas-placeholder.svg" id="canvas01"/>
        <canvas :class="[mobileView ? 'image-m' : 'image']" src="@/assets/canvas-placeholder.svg" id="canvas02"/>
        <canvas :class="[mobileView ? 'image-m' : 'image']" src="@/assets/canvas-placeholder.svg" id="canvas03"/>
        <canvas :class="[mobileView ? 'image-m' : 'image']" src="@/assets/canvas-placeholder.svg" id="canvas04"/>
        <canvas :class="[mobileView ? 'image-m' : 'image']" src="@/assets/canvas-placeholder.svg" id="canvas05"/>
    </div>

    <!-- Show All button — only visible with secret query param, hidden once expanded -->
    <div class="show-all-div" v-if="isSecret && !showAllGallery">
        <button class="show-all-btn" @click="showAll">Show all</button>
    </div>

    <!-- Expanded grid (24 images per page, 8 columns × 3 rows) -->
    <div v-if="showAllGallery" class="expanded-gallery">
        <div v-if="gridLoading" class="grid-loading">Loading...</div>

        <div v-else-if="galleryImages.length > 0" :class="[mobileView ? 'image-grid-m' : 'image-grid']">
            <img
                v-for="(url, index) in galleryImages"
                :key="index"
                :src="url"
                class="grid-img"
                loading="lazy"
                alt="Doodle board drawing"
            />
        </div>

        <p v-else class="grid-empty">No more drawings to show.</p>

        <!-- Pagination arrows -->
        <div class="pagination" v-if="galleryImages.length > 0 || currentPage > 1">
            <button
                class="page-arrow"
                :class="{ disabled: currentPage === 1 }"
                :disabled="currentPage === 1"
                @click="prevPage"
            >&#8592;</button>
            <span class="page-num">{{ currentPage }}</span>
            <button
                class="page-arrow"
                :class="{ disabled: !hasNextPage }"
                :disabled="!hasNextPage"
                @click="nextPage"
            >&#8594;</button>
        </div>
    </div>

    <contact-me/>
</template>

<script>
import BulletinBoard from '../components/BulletinBoard.vue';
import ContactMe from "../components/ContactMe.vue";
import { db } from "../firebase.js";
import BulletinBoardMobile from '../components/BulletinBoardMobile.vue';

const PAGE_SIZE = 24;

export default {
  components: { BulletinBoard, ContactMe, BulletinBoardMobile},
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
    this.retrieveCanvases();
  },

  name: 'Doodleboard',

  data () {
    return {
      mobileView: null,
      elementCount: 1,

      // Expanded gallery state
      showAllGallery: false,
      galleryImages: [],       // URLs for the current grid page
      gridLoading: false,
      currentPage: 1,          // 1-indexed page number shown to the user
      hasNextPage: false,

      // pageCursors[i] = the Firestore doc snapshot used as startAfter to fetch page (i+1)
      // pageCursors[0] is set to the last doc of the initial 5-item query
      pageCursors: [],
    }
  },

  computed: {
    isSecret() {
      return this.$route.query.s === 'doodle';
    },
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
      // Unchanged from original — only fetches and draws the top 5
      try {
        const image = db.collection('canvases').orderBy('date', 'desc').limit(5);
        image.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {this.convertURLToImageData(doc.data().image);})
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

    // Called when "Show all" is clicked
    async showAll() {
      this.showAllGallery = true;
      this.gridLoading = true;

      try {
        // Fetch the cursor fresh here so we never depend on retrieveCanvases timing
        const initial = await db.collection('canvases').orderBy('date', 'desc').limit(5).get();
        if (!initial.empty) {
          this.pageCursors[0] = initial.docs[initial.docs.length - 1];
        }
      } catch (e) {
        console.error(e);
        this.gridLoading = false;
        return;
      }

      await this.loadGalleryPage(1);
    },

    // Fetch a specific page (1-indexed) using the stored cursor for that page
    async loadGalleryPage(pageNum) {
      this.gridLoading = true;
      try {
        const cursor = this.pageCursors[pageNum - 1];
        if (!cursor) return;

        // Fetch one extra to detect whether a next page exists
        const snapshot = await db.collection('canvases')
          .orderBy('date', 'desc')
          .startAfter(cursor)
          .limit(PAGE_SIZE + 1)
          .get();

        const docs = snapshot.docs;
        this.hasNextPage = docs.length === PAGE_SIZE + 1;

        // Only display PAGE_SIZE images
        this.galleryImages = docs.slice(0, PAGE_SIZE).map(doc => doc.data().image);

        // Store the cursor for the next page if we haven't already
        if (this.hasNextPage && !this.pageCursors[pageNum]) {
          this.pageCursors[pageNum] = docs[PAGE_SIZE - 1];
        }

        this.currentPage = pageNum;
      } catch (e) {
        console.error(e);
      } finally {
        this.gridLoading = false;
      }
    },

    async nextPage() {
      if (this.hasNextPage) {
        await this.loadGalleryPage(this.currentPage + 1);
      }
    },

    async prevPage() {
      if (this.currentPage > 1) {
        await this.loadGalleryPage(this.currentPage - 1);
      }
    },
  }
}
</script>

<style>
@font-face {
  font-family: "Josefin Sans";
  src: local("Josefin Sans"),
   url("../fonts/JosefinSans-VariableFont_wght.ttf") format("truetype");
  color: #2F2A1B;
}

  .bb-header{
     font-family: "Josefin Sans", sans-serif;
     font-size: 32px;
     font-weight: 600;
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

  /* Show All button */
  .show-all-div {
    display: flex;
    justify-content: center;
    margin: 0 0 64px;
  }

  .show-all-btn {
    font-family: "Futura-Med", sans-serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.08em;
    background: transparent;
    border: 1.5px solid #2F2A1B;
    border-radius: 9999px;
    padding: 10px 28px;
    cursor: pointer;
    color: #2F2A1B;
    transition: background 0.2s, color 0.2s;
  }

  .show-all-btn:hover {
    background: #F7C65F;
    color: #2F2A1B;
  }

  /* Expanded image grid */
  .expanded-gallery {
    margin: 0 48px 64px;
  }

  .image-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 12px;
  }

  /* 4 columns on mobile */
  .image-grid-m {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }

  .grid-img {
    width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    border-radius: 6px;
    background-color: #F1E8E6;
    display: block;
  }

  .grid-loading,
  .grid-empty {
    font-family: "Futura-Book", sans-serif;
    font-size: 14px;
    color: #888;
    text-align: center;
    padding: 48px 0;
  }

  /* Pagination */
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 32px;
  }

  .page-arrow {
    font-size: 20px;
    background: transparent;
    border: 1.5px solid #2F2A1B;
    border-radius: 4px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: #2F2A1B;
    line-height: 1;
    transition: background 0.2s, color 0.2s;
  }

  .page-arrow:hover:not(.disabled) {
    background: #2F2A1B;
    color: #fff;
  }

  .page-arrow.disabled {
    border-color: #ccc;
    color: #ccc;
    cursor: default;
  }

  .page-num {
    font-family: "Futura-Med", sans-serif;
    font-size: 18px;
    min-width: 24px;
    text-align: center;
    color: #2F2A1B;
  }
</style>

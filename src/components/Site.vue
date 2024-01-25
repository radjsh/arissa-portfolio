<template>
    <div class="reveal-site" @mouseover="showImage(site, $event)" @mousemove="updateImagePosition(site, $event)" @mouseleave="hideImage(site)">
    <a :href="site.link" class="site-link" target="_blank">
        <div class="site">
            <span class="site-title">{{site.title}}</span>
            <span class="site-sub">{{site.sub}}</span>
        </div>
        <div class="image-container" id="image">
            <img v-show="site.showingImage" :src="site.src" :style="imageStyle(site)" class="site-image" />
        </div>
    </a>
    <hr>
    </div> 
</template>

<script>
export default ({
    name: 'site',
    props: ['site'],

    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
        window.addEventListener('mousemove', this.handleGlobalMouseMove);
        // window.addEventListener('scroll', this.handleScroll);
    },

    data () {
        return {
            mobileView: false,
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

        imageStyle(site) {
            return {
                width: `450px`,
                position: 'fixed',
                top: `${site.mouseY}px`,
                left: `${site.mouseX}px`,
                transform: 'translate(-50%, -50%)',
                zIndex: 4,
            }
        },

        showImage(site, event){
            site.showingImage = true;
            this.updateImagePosition(site, event);
        },

        updateImagePosition(site, event){
            site.mouseX = event.clientX;
            site.mouseY = event.clientY;
            //this.imageStyle(site);
        },

        hideImage(site) {
            site.showingImage = false;
        },

        handleGlobalMouseMove(event) {
        // Check if the mouse is outside the element's boundaries
        const rect = this.$el.getBoundingClientRect();
        if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
        ) {
            // Mouse is outside the element, so hide the image
            this.hideImage(this.site);
        }
        },
        
    },
})
</script>

<style scoped>

.site-title {
    font-family: "Futura-Med";
    font-size: 56px;
    text-align: start;
}

.site-title-m {
    font-family: "Futura-Med";
    font-size: 36px;
}
.site-sub {
    font-family: "Futura-Book";
    font-size: 20px;
    margin-top: 12px;
}

.site-sub-m {
    font-family: "Futura-Med";
    font-size: 14px;
}

.reveal-site {
    position: relative;
}

.site {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 148px;
    margin-right: 148px;
    padding-top: 48px;
    padding-bottom: 36px;
}

hr {
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.20) ;
    margin-left: 148px;
    margin-right: 148px;
}

.site-link {
    text-decoration: none;
    color: black;
}

.site-link:active, .site-link:hover {
    color: #D7031A;
}

.site-image {
  border-radius: 10px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
  opacity: 0; /* Initially hidden */
  transform: scale(1.2);
  transition: opacity 0.5s ease-in-out, transform 0.4s ease-in-out;
  transform-origin: center;
}


.image-container:hover .site-image:hover {
  opacity: 1; /* Fade in on hover */
  transform: scale(1); /* Zoom in on hover */
}
</style>
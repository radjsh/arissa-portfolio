<template>
    <div class="poster reveal">
        <img :src="poster.src" :class="[mobileView ? 'post-m' : 'post']">
        <p :class="[mobileView ? 'caption-m' : 'caption']">{{ poster.title }}</p>
        <p :class="[mobileView ? 'desc-m' : 'desc']" v-if="poster.desc != undefined">{{ poster.desc }}</p>
    </div>
</template>

<script>
export default ({
    name: 'poster',
    props: ['poster'],

    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
        window.addEventListener('scroll', this.reveal);

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
            //console.log("Scrolling")
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
})
</script>

<style scoped>
.post {
    margin-top: 64px;
    width: 60%;
    border-radius: 20px;
}

.post-m {
    margin-top: 36px;
    width: 80%;
    border-radius: 10px;
}

.caption {
    font-family: "Futura-Med";
    font-size: 18px;
}

.caption-m {
    font-family: "Futura-Med";
    font-size: 14px;
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

.desc {
    font-family: "Futura-Book";
    margin: 8px 280px 0px 280px;
    line-height: 24px;
}

.desc-m {
    font-family: "Futura-Book";
    margin: 24px 24px 0px 24px;
    text-align: start;
    font-size: 14px;
}
</style>
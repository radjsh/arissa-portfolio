<template>
  <div :class="[mobileView ? 'contact-me-m' : 'contact-me']">
    <text :class="[mobileView ? 'cm-text-m' : 'cm-text']"> Oh you're still here? </text>
    <text :class="[mobileView ? 'cm-text-m' : 'cm-text']"> Let's connect!</text>
    <div :class="[mobileView ? 'button-li-m' : 'button-li']">
        <a href="mailto:arissa140100@yahoo.com.sg">
            <img :class="[mobileView ? 'btn-m' : 'btn-1']" src="@/assets/email-btn.svg"/>
        </a>
        <a href="https://www.linkedin.com/in/arissarashid/" target="_blank">
            <img :class="[mobileView ? 'btn-m' : 'btn']" src="@/assets/linkedin-btn.svg"/>
        </a>
        <a href="https://www.instagram.com/rissaartt/" target="_blank">
            <img :class="[mobileView ? 'btn-m' : 'btn']" src="@/assets/ig-btn.svg"/>
        </a>
        <a href="https://www.dribbble.com/arissa/" target="_blank">
            <img :class="[mobileView ? 'btn-m' : 'btn']" src="@/assets/dribbble-btn.svg"/>
        </a>
    </div>
    <img :class="[mobileView ? 'footer-m' : 'footer']" src="@/assets/footer.svg" @click="backToTop" v-if="!mobileView"/>
    <img :class="[mobileView ? 'footer-m' : 'footer']" src="@/assets/footer-m.svg" @click="backToTop" v-else/>
  </div>
</template>

<script>
export default {
    name: "contact-me",
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
        },
        
        backToTop () {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }
}
</script>

<style scoped>
.contact-me {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    justify-content: center;
}

.contact-me-m {
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    justify-content: center;
}

.footer {
    position: absolue;
    width: 100%;
    height: auto;
    margin-top: 0px;
    bottom: 0;
    cursor: pointer;
}

.footer-m {
    width: 100%;
    height: auto;
    margin-top: 48px;
    }

.cm-text {
    font-family: "Futura-Med";
    font-size: 24px;
    margin-top: 12px;
}

.cm-text-m {
    font-family: "Futura-Med";
    font-size: 18px;
    margin-top: 12px;
}

.button-li {
    margin-top: 64px;
}

.button-li-m {
    justify-content: center;
    align-items: center;
    margin-top: 48px;
}

.btn-1 {
    width: 80px;
    cursor: pointer;
}

.btn-1:hover {
    position: relative;
    top: -4px;
    transition: 1s ease all ;
}

.btn {
    width: 80px;
    margin-left: 60px;
    cursor: pointer;
}

.btn:hover {
    position: relative;
    top: -4px;
    transition: 1s ease all ;
}

.btn-m {
    width: 64px;
    margin-left: 12px;
    margin-right: 12px;
    cursor: pointer;
}

html {
    scroll-behavior: smooth;
}
</style>
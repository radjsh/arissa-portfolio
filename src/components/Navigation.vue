<template>
    <header :class="{ 'scrolled-nav' : scrollPosition }">
        <nav style="background-color:white">
            <div class="branding">
                <router-link :class="[portfolio ? 'link' : 'nolink']" :to="{name: 'portfolio'}" @click="onClickPortfolio">
                    <img src="@/assets/logo-small.svg">
                </router-link>
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link :class="[portfolio ? 'link' : 'nolink']" :to="{name: 'portfolio'}" @click="onClickPortfolio">portfolio</router-link></li>
                <li><router-link :class="[about ? 'link' : 'nolink']" :to="{name: 'about'}" @click="onClickAbout">about</router-link></li>
                <li><router-link :class="[contact ? 'link' : 'nolink']" :to="{name: 'doodleboard'}" @click="onClickContact">doodle board</router-link></li>
                <li><a class="nolink" @click="onClickShop" href="https://rissaartt.shop/" target="_blank">shop</a></li>
                <li><a class="nolink" @click="onClickResume" href="https://drive.google.com/file/d/1sv-jbcxx37LJVLJT3MB9G3DKqRM1CHuE/view?usp=sharing" target="_blank">resume</a></li>
            </ul>
            <div class="icon">
                <img @click="toggleMobileNav" v-show="mobile" class="bar" :class="{'bar-active' : mobileNav}" src="@/assets/bar.svg"/>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><router-link :class="[portfolio ? 'link' : 'nolink']" :to="{name: 'portfolio'}" @click="onClickPortfolio">portfolio</router-link></li>
                    <li><router-link :class="[about ? 'link' : 'nolink']" :to="{name: 'about'}" @click="onClickAbout">about</router-link></li>
                    <li><router-link :class="[contact ? 'link' : 'nolink']" :to="{name: 'doodleboard'}" @click="onClickContact">doodle board</router-link></li>
                    <li><a class="nolink" @click="onClickShop" href="https://rissaartt.shop/" target="_blank">shop</a></li>
                    <li><a class="nolink" @click="onClickResume" href="https://drive.google.com/file/d/1sv-jbcxx37LJVLJT3MB9G3DKqRM1CHuE/view?usp=sharing" target="_blank">resume</a></li>
                </ul>                
            </transition>
        </nav>
    </header>
</template>

<script>
export default {
    name: "navigation",
    data() {
        return {
            scrollPosition: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,
            portfolio: true,
            contact: null,
            about: null,
            resume: null,
            shop: null,
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    methods : {

        toggleMobileNav () {
            this.mobileNav = !this.mobileNav;
        },

        checkScreen () {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750){
                this.mobile = true;
                return;
            }

            this.mobile = false;
            this.mobileNav = false;
        },

        onClickPortfolio () {
            console.log(this.portfolio);
            this.portfolio = true;
            this.about = false;
            this.contact = false;
            this.resume = false;
            this.shop = false;
            this.mobileNav = !this.mobileNav;
            window.scrollTo(0, 0);
        },

        onClickAbout () {
            this.portfolio = false;
            this.about = true;
            this.contact = false;
            this.resume = false;
            this.shop = false;
            this.mobileNav = !this.mobileNav
            window.scrollTo(0, 0);
        },
        
        onClickContact () {
            this.portfolio = false;
            this.about = false;
            this.contact = true;
            this.resume = false;
            this.shop = false;
            this.mobileNav = !this.mobileNav
            window.scrollTo(0, 0);
        },

        onClickResume () {
            this.portfolio = false;
            this.about = false;
            this.contact = false;
            this.resume = false;
            this.shop = false;
            this.mobileNav = !this.mobileNav
            window.scrollTo(0, 0);
        },

        onClickShop () {
            this.portfolio = false;
            this.about = false;
            this.contact = false;
            this.resume = false;
            this.shop = true;
            this.mobileNav = !this.mobileNav
            window.scrollTo(0, 0);
        },
    },
}
</script>

<style scoped>
@font-face {
  font-family: "Futura-Med";
  src: local("Futura-Med"),
   url("../fonts/Futura-medium-bt.ttf") format("truetype");
  color: #2F2A1B;
}

header {
    background-color: white;
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
    top: 0;
}

nav {
    display: flex;
    flex-direction: row;
    padding: 0;
    transition: .5s ease all;
    width: 90%;
    height: 49px;
    margin: 0 auto;
    @media(min-width: 1140px) {
        max-width: 1140px;
    }
}

ul {
    list-style-type: none;
}

li {
    padding: 12px;
    margin-left: 12px;
}

.link {
    font-family: "Futura-Med";
     font-size: 18px;
     color: #2F2A1B;
     text-underline-offset: 2px;
     text-decoration-color: #F7C760;
     text-decoration-thickness: 3px;
     transition: .25s ease all;
     border-bottom: 1px solid transparent;

}

.nolink {
    font-family: "Futura-Med";
     font-size: 18px;
     color: #2F2A1B;
     text-decoration: none;
    background: linear-gradient(#F7C760, #F7C760);
    background-size: 0 3px;
    background-repeat: no-repeat;
    background-position: left bottom -3px;
	transition: .5s background-size ease-in-out;
     border-bottom: 3px solid transparent;    
}

.nolink:hover {
    background-position-y: bottom -4px;
    background-size: 100% 3px;
}


.branding {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6px;
}

img {
    width: 64px;
    height: auto;
    transition: .5s ease all;
}

.navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
}

.icon {
    display: flex;
    position: absolute;
    align-items: center;
    color: #2F2A1B;
    margin-top: 6px;
    right: 24px;
    width: 24px;
    height: 100%;

}

.bar {
    cursor: pointer;
    transition: .8s ease all;
}

.bar-active {
    transform: rotate(180deg);
}

.dropdown-nav {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: auto;
    padding: 0;
    margin-top: 48px;
    background-color: white;
    top: 0;
    left: 0;
    z-index: -1;
}

.dd-li {
    margin-left: 0;
    margin-top: 12px;
}

.mobile-nav-enter-active {
    transition: .8s ease-out all;
}

.mobile-nav-leave-active {
    transition: .8s ease-in all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateY(-500px);
}

.mobile-nav-enter-to {
    transform: translateY(0);
}

</style>
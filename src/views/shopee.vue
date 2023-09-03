<template>
    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <img src="@/assets/shopee/shopee-banner.jpg" :class="[mobileView ? 'banner-m' : 'banner']">
        <div class="heading">
            <header :class="[mobileView ? 'header-m' : 'header']">Shopee</header>
            <p :class="[mobileView ? 'subheader-posters-m' : 'subheader-posters']">UI/UX Design Intern, Digital Payments Team</p>
        </div>
        <div class="row specs-row" v-if="!mobileView">
            <div class="col l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Company</p></li>
                    <li><p class="specs-list">Shopee</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Strategies:</p></li>
                    <li><p class="specs-list">Research, Prototyping, UI/UX Design, and Animation</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">April 2021 - Sept 2021</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Tools Used:</p></li>
                    <li><p class="specs-list">Figma, Adobe Illustrator and After Effects</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Company:</text> Shopee</p>
            <p class="specs-list-m"><text class="specs-title-m">Strategies:</text> Research, Prototyping, UI/UX Design, and Animation</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> April 2021 - Sept 2021</p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Figma, Adobe Illustrator and After Effects</p>
        </div>
        <header :class="[mobileView ? 'header-2-m' : 'header-2']">AirPay Thailand and Vietnam</header>
        <div :class="[mobileView ? 'introduction-m' : 'introduction']">During my time at Shopee, I got to work on designing new ui/ux features for AirPay, Thailand and Vietnam. AirPay is a mobile wallet that allows users to easily access digital payment service for their daily transactions. In the digital payments team, we focused on designing payment features such as virtual wish cards, digital services categories, easy bill enhancement and contactless NFC payments. I was involved in the research, problem definition, ui/ux design and pre-launch ui review stages.
        </div>
        <section class="posters">
            <header :class="[mobileView ? 'header-3-m reveal' : 'header-3 reveal']">Virtual Wish Cards</header>
            <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">In order to personalise the user to user transaction experience, we decided to include virtual wish cards in the “transfer” page, for users to attach to their payments. These wish cards included fun and cheerful messages for the different occasions. We had to consider how users on both ends would view the wish cards under the different scenarios. </div>
            <poster :key="vwc.title" :poster="vwc"></poster>
            <header :class="[mobileView ? 'header-3-m reveal' : 'header-3 reveal']">Digital Payments Categories</header>
            <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">This feature focuses on categorising AirPay’s digital payment (DP) services on a new page, while allowing users to customise their favourite DPs in the homepage. For this feature, I created many different design iterations, with reference to competitor apps such as AliPay and JD Finance, while staying true to AirPay’s style. </div>
            <poster :key="dpc.title" :poster="dpc"></poster>
            <header :class="[mobileView ? 'header-3-m reveal' : 'header-3 reveal']">Easy Bill Enhancement</header>
            <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">This feature allows users to pay their bills to third party merchants through an automatic rotation agreement. This means that if one payment method fails, the application would automatically try to process the payment with the next payment method. I led the ui design of this feature, creating all the necessary screens and flows. </div>
            <poster :key="easybills.title" :poster="easybills"></poster>
            <header :class="[mobileView ? 'header-3-m reveal' : 'header-3 reveal']">Homepage, Scan and Pay redesign</header>
            <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">From our customer feedback and competitor analysis, we found that most customers are unaware of the difference between “scan” and “pay”, commonly mistaking one for the other. To minimise this mistake, we decided to merge the features into one page. For this feature, I redesigned the homepage, including the home icons, as well as the scan and pay page. </div>
            <poster :key="saps.title" :poster="saps"></poster>
            <header :class="[mobileView ? 'header-3-m reveal' : 'header-3 reveal']">Contactless NFC Payment</header>
            <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">AirPay card is a virtual card which allows users to make NFC payments by tapping their phones on POS machines. As it is a new concept, I was tasked to create the onboarding graphics and feedback animation for this feature. I also worked on the user flow and interface design. </div>
            <poster :key="nfc.title" :poster="nfc"></poster>
        </section>
        <header :class="[mobileView ? 'header-2-m reveal' : 'header-2 reveal']">ShopeePay Singapore</header>
        <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">ShopeePay is a digital wallet service by Shopee that users can use for make online and offline retail and interpersonal transactions. Users’ ShopeePay wallet can store money that is topped up from third party bank accounts.
        </div>
        <section class="posters">
            <header :class="[mobileView ? 'header-3-m reveal' : 'header-3 reveal']">Checkout Instant Top Up</header>
            <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">Initially, users had to be redirected to the wallet top up page if they did not have enough money in their ShopeePay wallet. To make the top up experience more seamless, a pop up would appear if users do not have enough money, instead of redirecting them to a new page. If users have not activated their ‘Auto Top Up’, they would be prompted at the end of their transaction.</div>
            <poster :key="itu1.title" :poster="itu1"></poster>
            <poster :key="itu2.title" :poster="itu2"></poster>
            <header :class="[mobileView ? 'header-3-m reveal' : 'header-3 reveal']">Shipping 3PLs Masking</header>
            <div :class="[mobileView ? 'introduction-m reveal' : 'introduction reveal']">This feature allows users to add collection points among the different third party logisitc companies, for their deliveries.</div>
            <poster :key="tpl.title" :poster="tpl"></poster>
        </section>
        <div class="see-more-div">
            <text :class="[mobileView ? 'sm-title-m' : 'sm-title']">See More Projects</text> 
            <see-more-categories :pageType="category"/>
        </div>
        <contact-me/>
    </div>
</template>

<script>
import Poster from "../components/Poster.vue";
import SeeMoreCategories from "../components/SeeMoreCategories.vue";
import ContactMe from "../components/ContactMe.vue";

export default ({
    name: "shopee",
    components: { Poster, SeeMoreCategories, ContactMe },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
        window.addEventListener('scroll', this.reveal);
    },

    data () {
        return {
            mobileView: null,
            windowWidth: null,
            category: "shopee",
            vwc:
                { 
                    title: "AirPay Virtual Wish Cards",
                    src: require("@/assets/shopee/VWC.svg")
                },                                                                      
            dpc: 
                { 
                    title: "AirPay Digital Payment Categories design options",
                    src: require("@/assets/shopee/dp-category.svg")
                },                                                                                
            easybills: 
                { 
                    title: "AirPay Easy Bills Enhancement",
                    src: require("@/assets/shopee/easybill.svg")
                },                                                                      
            saps:
                { 
                    title: "AirPay Homepage, Scan and Pay Redesign",
                    src: require("@/assets/shopee/scan-and-pay.svg")
                },                                                                      
            nfc:
                { 
                    title: "AirPay Contactless NFC Payment",
                    src: require("@/assets/shopee/nfc.svg")
                },  
            itu1:                  
                { 
                    title: "Shopee Pay Instant Top Up, Auto Top Up not activated",
                    src: require("@/assets/shopee/shopee-ITU-2.png"),
                },   
            itu2:                  
                { 
                    title: "Shopee Pay Instant Top Up, Auto Top Up activated",
                    src: require("@/assets/shopee/shopee-ITU-1.png"),
                },       
            tpl:                  
                { 
                    title: "Shipping 3PLs Masking",
                    src: require("@/assets/shopee/shopee-3PL.png"),
                },                                                              

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
            var reveals = document.querySelectorAll(".reveal")

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

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
@font-face {
  font-family: "Futura-Med";
  src: local("Futura-Med"),
   url("../fonts/Futura-medium-bt.ttf") format("truetype");
  color: #2F2A1B;
}

.banner {
    margin-top: 49px;
    width: 100%;
}

.banner-m {
    margin-top: 56px;
    height: auto;
    width: 100%;
    overflow: 0;
}

.header {
    font-family: "Josefin Sans", sans-serif;
    font-size: 36px;
    margin-top: 64px;
}

.header-m {
    font-family: "Futura-Med";
    font-size: 24px;
    margin-top: 36px;   
}

.header-2 {
    font-family: "Josefin Sans", sans-serif;
    font-size: 36px;
    margin-top: 64px;
    text-align: left;
    margin-left: 148px;
}

.header-2-m {
    font-family: "Futura-Med";
    font-size: 24px;
    margin-top: 36px;   
    text-align: left;
    margin-left: 24px;
}

.header-3 {
    font-family: "Josefin Sans", sans-serif;
    font-size: 28px;
    margin-top: 64px;
    text-align: left;
    margin-left: 148px;
}

.header-3-m {
    font-family: "Futura-Med";
    font-size: 20px;
    margin-top: 36px;   
    text-align: left;
    margin-left: 24px;
}

.subheader-posters {
    font-family: "Futura-Book";
    margin-top: 12px;
}

.subheader-posters-m {
    font-family: "Futura-Book";
    font-size: 14px;
    margin-top: 12px;
}

ul {
    display: block;
    list-style-type: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}

.specs-row {
    margin-top: 48px;
    display: flex;
    justify-content: center;
}

.specs {
    margin-left: 24px;
    margin-right: 24px;
    text-align: start;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
}

col {
    text-align: left;
}

.col-list {
    margin-top: 24px;
    text-align: start;
    margin-left: 24px;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.specs-title, .specs-list {
    margin: 12px 0;
}

.specs-title {
    font-family: "Josefin Sans", sans-serif;
    font-size: 18px;
}

.specs-title-m {
    font-family: "Futura-Med";
    font-size: 14px;
}

.specs-list {
    font-family: "Futura-Book";
    font-size: 18px;
}

.specs-list-m {
    font-family: "Futura-Book";
    font-size: 14px;
}

.introduction {
    font-family: "Futura-Book";
    font-size: 18px;
    margin-top: 48px;
    text-align: start;
    margin-left: 148px;
    margin-right: 148px;
    line-height: 26px;
}

.introduction-m {
    font-family: "Futura-Book";
    margin: 24px 24px 0px 24px;
    text-align: start;
    font-size: 14px;
}

.see-more-div{
    text-align: start;
    margin-top: 100px;
}

.sm-title {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 24px;
    margin-left: 48px;
}

.sm-title-m {
    font-family: 'Futura-Med';
    font-size: 16px;
    margin-left: 24px;
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
</style>
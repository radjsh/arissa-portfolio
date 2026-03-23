<template>
    <div class="siwr">
        <div class="corkboard-wrapper" :style="{ width: mobileView ? '90%' : '75%' }">
            <img v-if="!mobileView" src="@/assets/corkboard.svg" class="corkboard" alt="corkboard" />
            <img v-else src="@/assets/corkboard-m.svg" class="corkboard" alt="corkboard" />
            <!-- scroll hint: uncomment when case study is ready
            <div class="scroll-hint">
                <span class="scroll-text">scroll to read case study</span>
                <div class="scroll-line"></div>
            </div>
            -->
            <div :class="[mobileView ? 'main-header-m' : 'main-header']">
                <header>stick it with robert</header>
                <div :class="[mobileView ? 'introduction-m' : 'introduction']">
                    a simple way to focus on what matters with a tiny desk companion
                </div>
                <button @click="openWidget" class="open-button">open your desk</button>
            </div>
        </div>


    </div>

    <!-- poster-div: uncomment when case study is ready
    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <div class="row specs-row" v-if="!mobileView">
            <div class="col l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Project Type:</p></li>
                    <li><p class="specs-list">Personal</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Strategies:</p></li>
                    <li><p class="specs-list">UI/UX Design, Motion Design</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">18 - 20 March 2026</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Tools Used:</p></li>
                    <li><p class="specs-list">Figma, After Effects, Claude</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Project Type:</text> Personal</p>
            <p class="specs-list-m"><text class="specs-title-m">Strategies:</text> UI/UX Design, Motion Design</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> 18 - 20 March 2026</p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Figma, After Effects, Claude</p>
        </div>
    </div>
    -->

    <div class="see-more-div">
        <text :class="[mobileView ? 'sm-title-m' : 'sm-title']">See More Projects</text>
        <see-more-categories :pageType="category"/>
    </div>
    <contact-me/>
</template>

<script>
import SeeMoreCategories from "../components/SeeMoreCategories.vue";
import ContactMe from "../components/ContactMe.vue";

export default ({
    name: "stick-it-robert",
    components: { SeeMoreCategories, ContactMe },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
        window.addEventListener('scroll', this.reveal);
    },

    data () {
        return {
            mobileView: null,
            windowWidth: null,
            category: "wormsquirm",
        }
    },

    methods : {
        checkScreen () {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 795){
                this.mobileView= true;
                return;
            }
            this.mobileView = false;
        },

        openWidget() {
            window.open(
            'https://stick-it-with-robert.vercel.app',
            'roberts-desk',
            'width=360,height=480,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,status=no'
            )
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
.siwr {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #FEECBF;
    height: 100%;
}
.main-header {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 64px;
    font-family: 'Lexend';
    font-weight: 600;
    color: #2F2A1B;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-header-m {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 36px;
    font-family: 'Lexend';
    font-weight: 600;
    color: #2F2A1B;
    text-align: center;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* 50% of the corkboard width */
.main-header header{
    width: 50%;
}
.open-button {
    cursor: pointer;
    background: #F2E8E4;
    border: 6px solid #B86F3C;
    border-radius: 100px;
    color: #2D2926;
    font-family: 'Lexend';
    font-weight: 500;
    font-size: 24px;
    width: 30%; /* 30% of corkboard width */
    padding: 18px 0;
    margin-top: 24px;
    transition: background 0.3s ease, transform 0.3s ease;
}

.open-button:hover {
    background: #E7CBC0;
    transform: translateY(-2px);
}

@media (max-width: 1595px) {
    .main-header {
        font-size: 52px;
    }
    .open-button {
        font-size: 18px;
    }
}

.main-header-m .open-button {
    font-size: 18px;
    padding: 12px 0;
    border-width: 4px;
    width: 60%;
}

.corkboard-wrapper {
    position: relative;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
}

.corkboard {
    width: 100%;
    display: block;
}

.scroll-hint {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.scroll-text {
    font-family: 'Lexend';
    font-weight: 500;
    font-size: 18px;
    color: #2D2926;
}

.scroll-line {
    width: 6px;
    height: 56px;
    background: #B86F3C;
    border-radius: 3px 3px 0 0;
}


.introduction {
    margin-top: 12px;
    font-size: 20px;
    line-height: 26px;
    font-family: 'Lexend';
    font-weight: 400;
    text-align: center;
    width: 50%; /* 50% of corkboard width */
}

.introduction-m {
    font-family: 'Lexend';
    font-weight: 400;    
    width: 80%;
    margin-top: 12px;
    text-align: center;
    font-size: 18px;
}


</style>
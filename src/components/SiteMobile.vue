<template>
    <div class="con-site-m reveal">
    <a :href="site.link" class="site-link-m" target="_blank">
        <div class="site-m">
            <span class="site-title-m">{{site.title}}</span>
            <span class="site-sub-m">{{site.sub}}</span>
        </div>
    </a>
    <hr>
    </div> 
</template>

<script>
export default ({
    name: 'siteMobile',
    props: ['site'],

    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
        window.addEventListener('scroll', this.reveal);
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
        
    },
})
</script>

<style scoped>
.site-title-m {
    font-family: "Futura-Med";
    font-size: 32px;
}

.site-sub-m {
    font-family: "Futura-Book";
    font-size: 14px;
    margin-top: 8px;
}

.con-site-m {
    position: relative;
}

.site-m {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 24px;
    margin-bottom: 24px;
    text-align: start;
}

hr {
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.09) ;
    margin-left: 24px;
    margin-right: 24px;
}

.site-link-m {
    text-decoration: none;
    color: black;
}

.site-link-m:active {
    color: #D7031A;
}

</style>
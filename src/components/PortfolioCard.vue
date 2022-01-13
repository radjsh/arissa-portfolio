<template>
    <div :class="[mobileView ? 'card-m' : 'card']">
        <router-link :to="{name: category.path}" class="img" @click="onClickCategory(category.path)">
            <img :class="[mobileView ? 'image-m' : 'image']" :src="category.src ">
        </router-link>
        <div class="text">
            <div :class="[mobileView ? 'title-m' : 'title']">{{ category.title }}</div>
            <div :class="[mobileView ? 'description-m' : 'description']">{{ category.subheader }}</div>

        </div>
    </div>

</template>

<script>
export default {
    name: 'portfolio-card',
    props: ['category'],

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

        onClickCategory(path) {
            console.log("Clicked" + path);
            window.scrollTo(0, 0);
        }

    }
}
</script>

<style scoped>

@font-face {
  font-family: "Futura-Book";
  src: local("Futura-Book"),
   url("../fonts/Futura-Book-font.ttf") format("truetype");
  color: #2F2A1B;
}

@font-face {
  font-family: "Futura-Med";
  src: local("Futura-Med"),
   url("../fonts/Futura-medium-bt.ttf") format("truetype");
  color: #2F2A1B;
}

.title {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    margin-top: 12px;
    text-align: left;
}


.title-m {
    font-family: "Futura-Med";
    font-size: 18px;
    width: 90%;
    margin-top: 12px;
    text-align: left;
}

.description {
    font-family:"Futura-Book";
    font-size: 16px;
    margin-top: 4px;
    text-align: left;
}


.description-m {
    font-family:"Futura-Book";
    font-size: 16px;
    width: 90%;
    margin-top: 4px;
    text-align: left;
}

.image {
    width: 550px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0px 4px 14px rgb(47, 42, 27, 0.08);
    cursor: pointer;
}

.image:hover {
    border-width: 20px solid;
    border-color: #F7C760;
    cursor: pointer;
}

.image-m {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 4px 14px rgb(47, 42, 27, 0.08);
}

.card {
    margin-top: 100px;
    width: 550px;
    height: auto;
    padding-left: 48px;
    padding-right: 48px;
    z-index:2;
    cursor: pointer;
}

.card:hover {
    position: relative;
    top: -10px;
    transition: 1s ease all ;
    z-index:2;
    cursor: pointer;
}

.card-m{
    margin-top: 48px;
    width: 90%;
    height: auto;
    padding-left: 24px;
    padding-right: 24px;
    cursor: pointer;
}
</style>

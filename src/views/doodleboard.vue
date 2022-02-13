<template>
    <div class='bb-div'>
        <text class="bb-header">Doodle Board</text>
        <p class="subheader">Design is more fun when done with others, add a drawing to the doodle board! This feature is still a work in progress, but feel free to try out the controls :')</p>
    </div>
    <bulletin-board/>
</template>

<script>
import BulletinBoard from '../components/BulletinBoard.vue';
export default {
  components: { BulletinBoard },
  created() {
    console.log("Path:" + this.$route.path); 
  },
  name: 'Doodleboard',
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
  }

  .bb-div {
    margin-top: 140px;
    margin-bottom: 100px;
  }
</style>
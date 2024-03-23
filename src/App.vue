<script> 
import Kamera from './components/Kamera.vue'
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    Kamera,
    HelloWorld
  },
  data(){
    return{
      imageData: null
    }
  },
  methods:{
    handleImageTaken(data){
      this.imageData = data;
    }
  }
  
}
</script>

<template>
  <div class="all">
    <div class="container">
        <Kamera @photoTaken="handleImageTaken"></Kamera>
    </div>
    <HelloWorld :imageData="imageData"></HelloWorld>
  </div>
</template>

<style>
.container{
  width: 40%;
  height: 40%;
  position: relative;
  left: 30%;
  border: 5px solid black;
}
</style>

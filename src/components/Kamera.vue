<script>
import { WebCamUI } from 'vue-camera-lib'

     export default{
      components:{
        WebCamUI,
      },
      methods:{
        photoTaken(data){
          this.$emit("ImageTaken", data);
        }
      }
     }
</script>

<template>
  <div class="containter">
    <WebCamUI :fullscreenState="false" @photoTaken="photoTaken" />
  </div>
</template>

<style>
  .container{
    justify-content: right;
  }
</style>
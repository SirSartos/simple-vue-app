<script>
import VueCameraLib from 'vue-camera-lib'

     export default{
      components:{
        WebCamUI,
      },
      methods:{
        photoTaken(data){
          console.log('image')
        }
      }
     }
</script>

<template>
  <WebCamUI :fullscreenState="false" @photoTaken="photoTaken" />
 
</template>

<style scoped>

</style>
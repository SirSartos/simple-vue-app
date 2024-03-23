<script>
import { WebCamUI } from 'vue-camera-lib';
import axios from 'axios';

     export default{
      emits: ['photoTaken'],
      components:{
        WebCamUI,
      },
      methods:{
        async photoTaken(data){
          this.$emit('photoTaken', data);

            try {
              const response = await axios.post('https://nodeservercamera.azurewebsites.net/saveImage', data);
              console.log(response.data);
            } catch (error) {
               console.error('Fehler beim Senden der Daten:', error);
             }
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
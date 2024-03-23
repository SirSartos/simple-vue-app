<script>
import { WebCamUI } from 'vue-camera-lib';
import axios from 'axios';

     export default{
      components:{
        WebCamUI,
      },
      methods:{
        async photoTaken(data){
            try {
              const data = { data };
              const response = await axios.post('http://nodeservercamera.azurewebsites.net/saveImage', data);
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
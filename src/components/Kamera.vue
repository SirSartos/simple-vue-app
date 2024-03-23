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
          this.$emit('photoTaken', data.image_data_url);

            try {
              const response = await axios.post('http://nodeservercamera.azurewebsites.net/saveImage', {image: data.image_data_url});
              console.log(response.data + " " + data.image_data_url);
            } catch (error) {
               console.error('Fehler beim Senden der Daten:', error);
             }
        } 
      }
     }
</script>

<template>
    <WebCamUI :fullscreenState="false" @photoTaken="photoTaken" />
</template>

<style>
</style>
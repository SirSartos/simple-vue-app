<script>
import axios from 'axios';

export default {
  data(){
    return{
      imageList: [],
    };
  },
  props: {
    imageData: {
      type: String, 
      default: null
    }
  },
  watch: {
    imageData(newImage){
       if(newImage){
          this.imageList.push(newImage);
         }
    }
      
  },
  methods:{
    delet(index){
      this.imageList.splice(index, 1);
    },
    async getImage(){
      try{
        const response = await axios.get('http://nodeservercamera.azurewebsites.net/getImage');
        this.imageList = response.data;
        console.log("getImage" + response.data)
      }
      catch(error){
        console.error('Fehler beim Hohlen der Daten:', error);
      }
    }
  },
  mounted() {
    this.getImage();
  }
  
};
</script>

<template>
  <div class="grid">
    <div v-for="(image, index) in imageList" :key="index" class="grid-item">
          <img :src="image" alt="Captured Image" class="Image">
          <button @click="delet(index)" class="del">X</button>
    </div>
  </div>
</template>

<style>
.Image{
  width: 100%;
  height: auto;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20% ,1fr));
  grid-gap: 1%;
  position: relative;
}
.grid-item {
  position: relative;
}
.del{
  background-color: red;
  position: absolute;
  top: 94.5%; 
  left: 98%; 
  transform: translate(-50%, -50%);
}

</style>


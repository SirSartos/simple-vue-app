<script>
export default {
  data(){
    return{
      imageList: [],
      count: 5
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
        this.count++;
      }
    }
  },
  methods:{
    delet(index){
      this.imageList.splice(index, 1);
    }
  }
  
}
</script>

<template>
  <div class="grid">
    <div v-for="(image, index) in imageList" :key="index" class="grid-item">
          <img :src="image.image_data_url" alt="Captured Image" class="Image">
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
  grid-gap: 5px;
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


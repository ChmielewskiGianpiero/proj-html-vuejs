<script>

export default  {
   props: {
     item: {
         type: Object,
         required: true
     }
 },
  data (){
      return {
        
    }
  },
  methods:{

  },
  created (){
      
  }
}
</script>

<template>
    
    <div class="section-gallery">
        <ul class="gallery row">
            <li v-for="(img,i) in item" :key="i"> 
                <img :src="img.src" alt="">
            </li>
        </ul>
        <div class="bg-secondary-color">
            <div class="container-md">
                <div class="row">
                    <img src="/public/mt-2236-home-icon5.png" alt="">
                    <div>
                        <h2 class="title-section">PLAY & LEARN</h2>
                        <p>Take a look into our day to day life here at Chess School</p>
                    </div>
                    <a href="#" class="btn">Learn More</a>   
                </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.gallery{
    height: 260px;
}

.title-section{
    margin-bottom: 20px;
    font-size: 35px;
}

.bg-secondary-color {
    background-color: $secondary_color;
    padding: 40px 0px;

    .row{
        gap: 65px;
    }
}

.btn{
    color: $dark;
    background-color: $secondary_color ;
    display: inline-block;
    border: 2px solid $dark;
}

.row {
    justify-content: center;
    align-items: center;
}
</style>
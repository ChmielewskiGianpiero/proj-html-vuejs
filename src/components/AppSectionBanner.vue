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
  <div class="banner">
    <div class="container-md">
      <div class="row">
        <div class="banner-text">
          <h1 class="title">
            TAKE THE <span>FIRST STEP</span>
          </h1>
          <p class="text">The fascinating world of chess has its doors open for anyone</p>
        </div>
        <div class="btn-section">
          <a class="btn" href="#">View More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.banner{
  background-image: url('/public/mt-2236-home-bg2.jpg');
}

.row {
  justify-content: space-between;
  padding: 100px 0px;
  align-items: center;
}

.banner-text {
  color: $primary_color;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.title {
  font-size: 50px;

  span {
    color: $secondary_color;
  }
}

.text {
  font-size: 17px;
}

.btn-section{
    display: flex;
    justify-content: center;

   .btn {
        background-color: $secondary_color ;
        color: $dark;
        font-weight: bold;
        margin-right: 90px;
        font-size: 20px;
    }
}
</style>
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
    <div class="container-md">
        <div class="title-cards">
            <h3>Courses</h3>
            <p>To keep up with the constantly rising standards of play</p>
        </div>
        <div class="row">
            <div class="col" v-for="(card,i) in item" :key="i">
                <div class="card">
                    <div class="card-header">
                        <img class="card-img" :src="card.srcPath" alt="">
                    </div>
                    <div class="card-body">
                        <h4 class="card-title"> {{ card.title }} </h4>
                        <p class="card-text"> {{ card.text }} </p>
                        <div class="price"> {{ card.price }} </div>
                        <div class="btn-card">
                            <a class="btn" href="#">View More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn-section"> 
            <a  href="#">View Other Courses</a>
        </div>
       
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


.btn-section{
    color: $dark;
    display: flex;
    justify-content: center;
    padding: 50px 35px 65px 0px;

    a {
        padding: 10px 40px;
        border-radius: 5px;
        font-weight: bold;
        border: 2px solid $dark;
    }
}

.card-title, .price{
    font-size: 22px;
    font-weight: bold;
}

.card-text {
    font-size: 15px;
    margin-bottom: 10px;
    color: $light_grey;
}

.title-cards{
    text-align: center;
    padding-top: 100px;

    h3{
        font-size: 40px;
        margin-bottom: 20px;
    }

    p {
        color: $light_grey;
        padding-bottom: 45px;
    }
}

.card{
    text-align: center;
    box-shadow: -3px 8px 15px -5px #888888;
    max-width: 80%;
    height: 100%;
}

.card-body{
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.card-img{
    width: 100%;
}

.btn-card{
    display: flex;
    justify-content: center;

   .btn {
        background-color: $secondary_color ;
        color: $dark;
        font-weight: 100;
    }
}

</style>
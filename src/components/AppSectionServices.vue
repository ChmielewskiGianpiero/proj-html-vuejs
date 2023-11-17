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
    <div class="section-services">
       <div class="container-md">
            <div class="section-title">
                <h2>OUR SERVICES</h2>
                <p>We make your child happy day after day </p>
            </div>
            <div class="cards">
                    <div class="col-12">
                        <h3 class="card-title">Chess Education</h3>
                        <p class="card-text">Popular education for your child and you</p>
                        <p class="card-text">Teachers and parents around the world know that chess is not a simple game, it is a great learning tool that will help build your child's executive function skills.</p>
                        <ul class="card-list">
                            <li v-for="(info, i) in item" :key="i">
                                <font-awesome-icon icon="chess-pawn" class="icon-color"/>
                                <span> {{ info .text }}</span>
                            </li>
                        </ul>
                        <a href="#" class="btn">Learn More</a>
                    </div>
                <div class="row">
                    <div class="col-6">
                        <img class="card-figure" src="/public/mt-2236-home-icon1.png" alt="">
                        <h4 class="card-title">Various Age Groups</h4>
                        <p>We provide chess classes to both children from 5 years old and adults.</p>
                    </div>
                    <div class="col-6">
                        <img class="card-figure" src="/public/mt-2236-home-icon2.png" alt="">
                        <h4 class="card-title">Top Chess Variants</h4>
                        <p>We don't only teach classical chess but also other top variants of this game.</p>
                    </div>
                    <div class="col-6">
                        <img class="card-figure" src="/public/mt-2236-home-icon3.png" alt="">
                        <h4 class="card-title">Best Chess Players</h4>
                        <p>Our alumni have won many prestigious chess tournaments in the country.</p>
                    </div>
                    <div class="col-6">
                        <img class="card-figure" src="/public/mt-2236-home-icon4.png" alt="">
                        <h4 class="card-title">Best Chess Openings</h4>
                        <p>Our students know all the best chess openings and how to use them.</p>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

p,li {
    color: $light_grey;

}

.card-list{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.row{
    gap: 60px;
    flex-wrap: wrap;
}

.col-6{
    flex-basis: calc((100% / 12 ) * 6 - 60px);
}

.card-title,
.card-text{
    padding-bottom: 20px;
}

.card-figure{
    padding-bottom: 15px;
}

.section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-top: 70px;

    h2{
        font-size: 30px;
    }

    p {
        padding-bottom: 55px;
    }
}

.cards{
    display: flex;
    flex-wrap: nowrap;
    gap: 75px;
    padding-bottom: 100px;
}
.icon-color{
    color: $secondary_color;
    margin: 0 15px;
}

.btn{
    color: $dark;
    background-color: $secondary_color ;
    position: absolute;
    margin-top: 35px;
}
</style>
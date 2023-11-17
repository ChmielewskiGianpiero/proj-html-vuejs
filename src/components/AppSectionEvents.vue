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
    <div class="section-events">
        <div class="container-md">
            <div class="title-section">
                <h1>Our Events</h1>
                <p>Chess is fun and we are happy to prove it at our events!</p>
            </div>
            <div class="row" v-for="(event,i) in item" :key="i">
                <img :src="event.srcPath" alt="">
                <div class="text-row">
                    <h2> {{ event.title }} </h2>
                    <p> {{ event.text }} </p>
                </div>
                <div class="btn-section">
                <a class="btn" href="#">Register</a>
                </div>
            </div>
         </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.section-events {
    padding-bottom: 70px;
}

.title-section{
    text-align: center;
    padding: 100px 0px 40px 0px;

    h1 {
        margin-bottom: 10px;
    }
}

p {
    color: $light_grey;
}


.btn {
    background-color: $secondary_color ;
    color: $dark;
    font-weight: bold;
    margin-right: 90px;
    font-size: 20px;
}

.row {
    align-items: center;
    margin-bottom: 60px;

    img {
        width: 30%;
    }
}

.text-row{
    padding: 0px 65px 0px 35px;

    h2 {
        margin-bottom: 10px;
    }
}
</style>
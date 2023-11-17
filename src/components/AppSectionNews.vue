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
    <div class="bg-section">
        <div class="container-md">
            <div class="row">
                <div class="col-3">
                    <div class="title-section">
                       <h1>Latest News</h1> 
                    </div>
                    <a class="btn" href="#">View Other Posts</a>
                </div>
                <div class="col-4 news" v-for="(article,i) in item" :key="i">
                    <img :src="article.srcPath" alt="">
                    <p> {{ article.text }} </p>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


.bg-section {
    background-color: $bg_grey ;
}

.btn {
    border: 2px solid $dark;
}

.news{
    img{
        margin-bottom: 10px;
    }
}
.row {
    padding: 60px 0px;
    gap: 30px;
}

.title-section{
    margin-bottom: 50px;
       
    &:after{
        content: "";
        width: 70px;
        border: 2px solid #ffcd18;
        display: block;
        margin-top: 30px;
    }
}
</style>
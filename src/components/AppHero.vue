<script>
import { store } from '../store'


export default  {
  props : {

  },
  data (){
      return {
        store: store
    }
  }
}
</script>

<template>
    <div class="app-hero">
      <div class="container-md">
        <div class="row">
          <div class="badge">welcome</div>
          <h1>ACADEMIC CHESS FOR <em>EVERYONE</em></h1>
          <p>we are dedicated to broadening and developing chess as art, recreation, and as a significant element of culture in Northern California.</p>
          <div class="hero-btn">
            <button class="btn">Enroll Now</button>
            <button class="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.app-hero{
  color: $primary_color;
  padding: 120px 0px 250px;

    h1{
      font-size: 50px;
      max-width: 45%;

        em{
          color: $secondary_color ;
        }
    }
}

.row{
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

p {
  max-width: 45%;
  margin-bottom: 35px;
}

.badge{
  background-color: $secondary_color;
  display: inline-block;
  color: $dark;
  padding: 3px 10px;
  border-radius: 20px;
}

button{
  color: $primary_color;
}

.hero-btn{
  display: flex;
  gap: 25px;
    .btn:first-child{
    background-color: $secondary_color ;
    color: $dark;
    }

    .btn:last-child{
    border: 1px solid $primary_color;
    }
}

.btn{
  padding: 10px 40px;
  border-radius: 5px;
  font-weight: bold;

}



</style>
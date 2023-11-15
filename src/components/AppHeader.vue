<script>
import AppNav from './AppNav.vue';
import AppHero from './AppHero.vue';



export default  {
    components: {
    AppNav, AppHero
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
    <div class="app-header-bg">
        <AppNav />
        <AppHero/>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.app-header-bg{
    background-image: url('/public/mt-2236-home-bg1.jpg');
}

</style>
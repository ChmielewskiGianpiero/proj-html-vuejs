<script>
import AppNav from './appnav.vue';
import AppHero from './apphero.vue';
import { store } from '../store';




export default  {
    components: {
    AppNav, AppHero
},
    data (){
      return {
        store: store
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
        <AppNav
        :contactsProps="store.contacts"
        :menu="store.navMenu"/>
        <AppHero/>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.app-header-bg{
    background-image: url('/public/mt-2236-home-bg1.jpg');
}

</style>
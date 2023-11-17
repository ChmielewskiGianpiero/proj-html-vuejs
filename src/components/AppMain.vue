<script>
import AppSectionServices from './AppSectionServices.vue';
import AppSectionPhoto from './AppSectionPhoto.vue';
import AppSectionCards from './AppSectionCards.vue';
import { store } from '../store';

export default  {
  components:{
    AppSectionServices,AppSectionPhoto,AppSectionCards
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
    <AppSectionServices :item="store.educationCard"/>
    <AppSectionPhoto :item="store.gallery"/>
    <AppSectionCards :item="store.cards"/>


</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container{
    max-width: 1920px;
    margin: 0 auto;
}
</style>
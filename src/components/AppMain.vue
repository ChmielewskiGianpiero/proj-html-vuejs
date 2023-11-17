<script>
import AppSectionServices from './AppSectionServices.vue';
import AppSectionPhoto from './AppSectionPhoto.vue';
import AppSectionCards from './AppSectionCards.vue';
import AppSectionBanner from './AppSectionBanner.vue';
import AppSectionEvents from './AppSectionEvents.vue';
import AppSectionNews from './AppSectionNews.vue';
import { store } from '../store';

export default  {
  components:{
    AppSectionServices,
    AppSectionPhoto,
    AppSectionCards,
    AppSectionBanner,
    AppSectionEvents,
    AppSectionNews
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
    <AppSectionBanner/>
    <AppSectionEvents :item="store.events"/>
    <AppSectionNews :item="store.news"/>


</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container{
    max-width: 1920px;
    margin: 0 auto;
}
</style>
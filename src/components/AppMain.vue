<script>
import AppSectionServices from './AppSectionServices.vue';
import { store } from '../store';

export default  {
  components:{
    AppSectionServices
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
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container{
    max-width: 1920px;
    margin: 0 auto;

}
</style>
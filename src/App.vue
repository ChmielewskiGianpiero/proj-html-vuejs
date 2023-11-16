<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './store';



export default  {
  components: {
    AppHeader, AppMain, AppFooter
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
    <AppHeader/>
    <AppMain/>
    <AppFooter/>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>

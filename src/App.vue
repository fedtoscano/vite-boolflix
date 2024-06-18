<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
components:{
  AppHeader,
  AppMain
},
data() {
return {  
}
}}
</script>

<template>
  <div class="container">
    <AppHeader/>
    <AppMain/>
  </div>
</template>

<style lang="scss">
@use "./style/general.scss";
.container{
    background-color: rgb(92, 83, 83);
}
</style>
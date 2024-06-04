<template>
  
  <nav>
    <img :src="logo" alt="Site Logo" class="logo">
    <Navbar /> 
  </nav>
  
  <router-view/>

  
</template>

<script>
import Navbar from './components/Header/Navbar.vue'


export default {
  data() {
    return {
      logo: require('./assets/images/Logo.png')
    }
  },
  components: {
    Navbar,
  }
}
</script>

<style>
.logo {
  width: 250px;
}
</style>

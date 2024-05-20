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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;

}

.logo {
  width: 250px;
}
</style>

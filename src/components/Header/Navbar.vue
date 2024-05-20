<template>

      <div class="nav-container">
          <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
          <router-link :to="{name: 'explore'}" class="nav-link">Explore</router-link>
          <router-link :to="{name: 'contact'}" class="nav-link">Contact</router-link>
      </div>
    
</template>

<script>
export default {
name: 'Navbar'
}
</script>

<style>

.nav-container {
    display: flex;
    gap: 46px;
}
.nav-link {
    text-decoration: none;
    font-size: 22px;
    font-weight: 800;
    color: #000;
}

</style>
<template>
  <div class="backdropImage">
      <img :src="backdropImage">
      <div class="overlay"></div>
      <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    data() {
        return {
          backdropImage: require('@/assets/images/Hero-image.png'),
          title: 'Get inspired, cook with passion and enjoy unforgettable moments at the table.'
        }
    }
}
</script>

<style>

</style>
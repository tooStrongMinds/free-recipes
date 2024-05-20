<template>
    <div class="recipe-detail">
      <h1>{{ recipe.title }}</h1>
      <img :src="recipe.image" :alt="recipe.title">
      <p>{{ recipe.instructions }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'RecipeDetail',
    data() {
      return {
        recipe: {}
      };
    },
    methods: {
      async fetchRecipe() {
        try {
          const response = await axios.get(`https://api.spoonacular.com/recipes/${this.$route.params.id}/information`, {
            params: {
              apiKey: 'ee9caa0fe2b24584853e18bcf5795756'
            }
          });
          this.recipe = response.data;
        } catch (error) {
          console.error('Error fetching recipe details:', error.message);
        }
      },
      getRecipeImageUrl(img) {
        return `https://img.spoonacular.com/recipes/${img}`;
      }
    },
    mounted() {
      this.fetchRecipe();
    }
  };
  </script>
  
  <style>
  .recipe-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  .recipe-detail img {
    width: 100%;
    border-radius: 20px;
  }
  </style>
  

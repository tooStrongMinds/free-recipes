<template>
    <div class="recipe-detail">
      <div class="backdropImage">
        <img :src="recipe.image" :alt="recipe.title">
        <div class="overlay"></div>
        <h1>{{ recipe.title }}</h1>
      </div>
      
      <div class="recipe-desc">
        <div class="min">
          <p><i class="fa-solid fa-bowl-food"></i> {{ recipe.servings }}</p>
          <p><i class="fa-regular fa-clock"></i>{{ recipe.readyInMinutes }}</p>
        </div>

        <ul class="instructions">
          <li v-for="(instruction, index) in instructionList" :key="index">{{ instruction }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'RecipeDetail',
    data() {
      return {
        recipe: {
          instructions: ''
        },
        instructionList: []
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
          this.instructionList = this.recipe.instructions.split('.')
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
  
  <style scoped>
  .backdropImage {
    position: relative;
    width: 100%;
    height: 40vh; /* Adjust height as needed */
    overflow: hidden;
}
.backdropImage img {
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
 
    
}
.overlay {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.min {
  display: flex;
  background: #d5d5d5;
  width: fit-content;
  padding: 15px;
  margin: 20px;
  border-radius: 10px;
  gap: 10px;
  align-items: center;
}
.min p {
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
}
ul {
  text-align: left;
}

  </style>
  

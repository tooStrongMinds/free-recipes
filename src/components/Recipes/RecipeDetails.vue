<template>
  <div class="recipe-detail">
    <div class="backdropImage">
      <img :src="recipe.strMealThumb" :alt="recipe.strMeal">
      <div class="overlay"></div>
      <h1>{{ recipe.strMeal }}</h1>
    </div>
    <div class="recipe-desc">
      <!-- <p>{{ recipe.strIngredient1 }}</p>
      <p>{{ recipe.strIngredient2 }}</p>
      <p>{{ recipe.strIngredient3 }}</p>
      <p>{{ recipe.strIngredient4 }}</p> -->
      <div class="ingredients">
        <h2>Ingredients</h2>
        <ul>
          <li v-for="(ingredient, index) in ingredientsList" :key="index" class="list">
          <p>{{ ingredient.ingredient }}</p>
          <p> {{ ingredient.measure }}</p>
          </li>
        </ul>
      </div>
      <div class="instructions">
        <h2>Instructions</h2>
        <ol>
          <li v-for="(instruction, id) in instructionList" :key="id">{{ instruction }}.</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router';

export default {
  name: 'RecipeDetail',
  data() {
    return {
      recipe: {},
      ingredientsList: [],
      instructionList: []
    };
  },
  methods: {
    async fetchRecipe() {
      const route = useRoute();
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`);
        this.recipe = response.data.meals[0];

        // Ingredients and Measures
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = this.recipe[`strIngredient${i}`];
          const measure = this.recipe[`strMeasure${i}`];
          if (ingredient) {
            ingredients.push({
              ingredient,
              measure: measure || ''
            });
          }
        }
        this.ingredientsList = ingredients;
        this.instructionList = this.recipe.strInstructions.split('. ')
        .filter(instruction => instruction.trim() !== '')
      } catch (error) {
        console.error('Error fetching recipe details:', error.message);
      }
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
.recipe-desc {
  display: flex;
  gap: 100px;
}
.instructions, .ingredients {
  text-align: left;
  list-style-type: decimal;
  margin-top: 30px;
  padding: 30px;
}
h2 {
  padding-bottom: 20px;
  text-transform: uppercase;
  font-family: 'Poetsen One';
}
 .ingredients {
  width: 30%;
 }
 .instructions {
  width: 90%;
  margin: auto;
 }
li {
  font-family: 'Poetsen One';
  font-size: 18px;
  padding-left: 10px;

  line-height: 1.5;
}
.list {
  display: flex;
  justify-content: space-between;
}

p {
  font-family: 'Poetsen One';
  line-height: 1.5;
}
@media screen and (max-width: 760px) {
  .recipe-desc {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .ingredients, .instructions {
    width: 100%;
  }
  h2 {
    text-align: center;
  }
}

  </style>
  

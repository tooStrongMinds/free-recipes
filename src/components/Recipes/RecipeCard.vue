<template>
  <div class="recipes">
    <div class="recipeCard" v-for="recipe in recipes" :key="recipe.idMeal">
      <img :src="recipe.strMealThumb" :alt="recipe.strMeal">
      <div class="desc">
        <div class="desc-title">
          <h3>{{ recipe.strMeal }}</h3>
        </div>
        <router-link :to="{ name: 'RecipeDetails', params: { id: recipe.idMeal } }">
          <button>View Recipe</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: {
    recipes: {
      type: Array,
      required: true
    }
  }
};
</script>


<style>
.recipes {
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;

  margin-block: 58px;
}
.recipeCard {
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* width: 280px;   */
  
  border-radius: 20px;

  background: #eeeeee;
}
h3 {
  align-content: center;
}
.recipeCard img {
  /* width: 50%; */
  aspect-ratio: 16 / 9;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  object-fit: cover;
}
.desc-title {
  margin-inline: 20px;
  height: 50px;
}
button {
  background: #99BABD;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 6px 30px;
  width: fit-content;
  cursor: pointer;
  margin: 0 auto;

}
.desc {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
}
</style>
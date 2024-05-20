<template>
  <div class="recipes">
      <div class="recipeCard" v-for="recipe in recipes" :key="recipe.id">
      <img :src="recipe.image" :alt="recipe.title">
      <div class="desc">
        <div class="desc-title">
          <h3>{{recipe.title}}</h3>
        </div>
        <router-link :to="{name: 'RecipeDetails', params: {id: recipe.id}}"><button>View Recipe</button></router-link>
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
  },
  methods: {
    getRecipeImageUrl(img) {
      return `https://img.spoonacular.com/recipes/${img}`;
    }
  }
};
</script>

<style>
.recipes {
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 38px;

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
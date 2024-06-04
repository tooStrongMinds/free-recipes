<template>
  <div class="header">
    <Banner />
    <SearchBar @search="performSearch"/>
  </div>
  <div class="home head">
    <div v-if="!isSearch">
      <h1>Most Searched Recipes</h1>
      <RecipeCard :recipes="limitedRecipes"/>
    </div>
    <div v-if="isSearch">
      <h1>Search Results</h1>
      <RecipeCard :recipes="filteredRecipes"/>
    </div>
  </div>
</template>

<script>
import RecipeCard from '@/components/Recipes/RecipeCard.vue';
import Banner from '@/components/Banner.vue';
import SearchBar from '@/components/Header/Searchbar';
import axios from 'axios';

export default {
  name: 'HomeView', 
  components: { RecipeCard, Banner, SearchBar },
  data() {
    return {
      isSearch: false,
      recipes: [],
      filteredRecipes: [],
      limit: 8
    };
  },
  computed: {
    limitedRecipes() {
      return this.recipes.slice(0, this.limit)
    }
  },
  methods: {
    async fetchRecipes() {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=f');
        this.recipes = response.data.meals;
      } catch (error) {
        console.error('Error fetching recipes:', error.message);
      }
    },
    async performSearch(query) {
      if (query) {
        try {
          const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
          this.filteredRecipes = response.data.meals;
          this.isSearch = true;
        } catch (error) {
          console.error('Error searching recipes:', error.message);
        }
      } else {
        this.isSearch = false;
      }
    }
  },
  mounted() {
    this.fetchRecipes();
  }
};
</script>


<style scoped>

</style>
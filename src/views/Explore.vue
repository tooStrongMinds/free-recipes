<template>
  <div class="header">
    <Banner />
    <SearchBar @search="performSearch"/>
  </div>
  <div class="head">
    <Filter />
    <div class="explore" v-if="isSearch">
      <h1>Results</h1>
      <RecipeCard :recipes="filteredRecipes"/>
    </div>
  </div>
</template>

<script>
import RecipeCard from '@/components/Recipes/RecipeCard.vue';
import Banner from '@/components/Banner.vue';
import SearchBar from '@/components/Header/Searchbar';
import Filter from '@/components/Filter.vue'
import axios from 'axios';

export default {
  name: 'Explore',
  components: { Banner, SearchBar, RecipeCard, Filter },
  data() {
    return {
      isSearch: false,
      filteredRecipes: []
    };
  },
  methods: {
    async fetchRecipes() {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php');
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
.head {
  display: flex;
}
</style>
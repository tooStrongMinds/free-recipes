<template>
  <div class="header">
    <Banner />
    <SearchBar @search="performSearch"/>
  </div>
  <div class="home head">
    <div v-if="!isSearch">
      <h1>Most Searched Recipes</h1>
      <RecipeCard :recipes="recipes"/>
    </div>
    <div v-if="isSearch" @search="handleSearch">
      <h1>Search Results</h1>
      <RecipeCard :recipes="filteredRecipes"/>
    </div>
    </div>
</template>

<script>

import RecipeCard from '@/components/Recipes/RecipeCard.vue'
import Banner from '@/components/Banner.vue'
import SearchBar from '@/components/Header/Searchbar.vue'
import axios from 'axios'

export default {
  name: 'HomeView', 
  components: {RecipeCard, Banner, SearchBar},
  data() {
    return {
      isSearch: false,
      recipes: [],
      filteredRecipes: []
    }
  },
  methods: {
    async fetchRecipes() {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`, {
          params: {
            // apiKey: 'ee9caa0fe2b24584853e18bcf5795756',
            number: 10
          }
        });
        this.recipes = response.data.meals;
      } catch (error) {
        console.error('Error fetching recipes:', error.message);
      }
    },
    async performSearch(query) {
      if (query) {
        try {
          const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`, {
            params: {
              // apiKey: 'ee9caa0fe2b24584853e18bcf5795756',
              query,
              number: 10
            }
          });
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
    this.fetchRecipes()
  }
}
</script>

<style scoped>

</style>
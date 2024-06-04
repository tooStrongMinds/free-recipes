<template>
  <div class="header">
    <Banner />
    <SearchBar @search="performSearch"/>
  </div>
  <div class="explore head" v-if="isSearch">
    <h1>Results</h1>
    <RecipeCard :recipes="filteredRecipes"/>
    </div>
</template>

<script>
import RecipeCard from '@/components/Recipes/RecipeCard.vue'
import Banner from '@/components/Banner.vue'
import SearchBar from '@/components/Header/Searchbar.vue'
import axios from 'axios'


export default {
name: 'Explore',
components: {Banner, SearchBar, RecipeCard},
data() {
    return {
      isSearch: false,
      filteredRecipes: []
    };
  },
  methods: {
    async fetchRecipes() {
      try {
        const response = await axios.get('www.themealdb.com/api/json/v1/1/search.php', {
          params: {
            // apiKey: 'ee9caa0fe2b24584853e18bcf5795756',
            number: 50  // Fetch more recipes for the Explore page
          }
        });
        this.recipes = response.data.results;
      } catch (error) {
        console.error('Error fetching recipes:', error.message);
      }
    },
    async performSearch(query) {
      if (query) {
        try {
          const response = await axios.get('www.themealdb.com/api/json/v1/1/search.php', {
            params: {
              // apiKey: 'ee9caa0fe2b24584853e18bcf5795756',
              query,
              number: 50  // Fetch more recipes for search results on the Explore page
            }
          });
          this.filteredRecipes = response.data.results;
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
}
</script>

<style>

</style>
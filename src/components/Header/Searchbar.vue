<template>
  <span class="container">
    <img :src="icon">
    <input type="search" placeholder="Search Recipes" id="searchInput" v-model="searchQuery" @input="onInput" >

    <!-- Filter Dropdown -->
    <select v-model="selectedFilter" id="filter" @change="onFilterChange">
        <option disabled value="">Sort by</option>
    <option v-for="(category, index) in categories" :key="index" :value="category.strCategory" id="category">
    {{ category.strCategory }}
    </option>
    </select>
    </span>
</template>

<script>
import axios from 'axios'
import { useRoute } from 'vue-router';

export default {
name: 'SearchBar',
data() {
    return {
        icon: require('@/assets/images/Icon.svg'),
        searchQuery: '',
        selectedFilter: '',
        categories: []
    }
},
methods: {
    onInput() {
        this.$emit('search', this.searchQuery)
    },
    onFilterChange() {
        this.$emit('filter', this.selectedFilter)
    },
    async fetchCategory() {
      const route = useRoute();
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        this.categories = response.data.categories;
      } catch (error) {
        console.error('Error fetching recipe details:', error.message);
      }
    }
  },
  mounted() {
    this.fetchCategory();
  }
}
</script>

<style>
span {
    
    background: #F5F2F2;
    border-radius: 20px;
    padding: 0 20px;
    padding-right: 40px;

    display: flex;
    align-items: center;
    gap: 10px;

    width: 60%;
    margin: 20px auto;
}
input {
    background: transparent;
    border: none;
    outline: none;
    padding: 11px;
    font-size: 16px;
    color: #545454;
    width: 100%;
}
input::placeholder {
    font-family: 'Inter', sans-serif;
    color: #858585;
    font-size: 16px;
    font-weight: 300;
}
.container {
    border: 1px solid #545454;
}
.fa-magnifying-glass {
    color: #858585;
    font-size: 18px;
}
#filter {
    border: none;
    background: transparent;
    outline: none;
}
#category {
    font-family: 'Inter';
}

@media screen and (max-width: 760px) {
    span {
        width: 90%;
    }
}


</style>
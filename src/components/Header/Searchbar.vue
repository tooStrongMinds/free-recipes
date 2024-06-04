<template>
  <span class="container">
    <img :src="icon">
    <input type="search" placeholder="Search Recipes" id="searchInput" v-model="searchQuery" @input="onInput" >

    <!-- Filter Dropdown -->
    <!-- <label for="filter"><i class="fa-solid fa-angle-down"></i></label> -->
    <select v-model="selectedFilter" id="filter">
    <option v-for="(category, index) in categories" :key="index">
    {{ category }}
    </option>
    </select>
    </span>
</template>

<script>

export default {
name: 'SearchBar',
data() {
    return {
        icon: require('@/assets/images/Icon.svg'),
        searchQuery: '',
        selectedFilter: 'sort by'
    }
},
methods: {
    onInput() {
        this.$emit('search', this.searchQuery)
    }
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


</style>
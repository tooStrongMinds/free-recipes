<template>
    <div class="menu">
        <div class="icon">
            <i class="fas fa-bars"
            @click="showMenu()" v-if="!showMobileMenu">
            </i>
        </div>
        <div class="menuContent" :class="this.showMobileMenu ? 'open-menu' : 'close-menu'">
            <i class="fa-solid fa-xmark" @click="closeMenu()" v-if="showMobileMenu"></i>
            <div class="nav-container" :class="!showMobileMenu ? 'none' : 'show'" @click="closeMenu">
                <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
                <router-link :to="{name: 'explore'}" class="nav-link">Explore</router-link>
                <router-link :to="{name: 'contact'}" class="nav-link">Contact</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'Navbar',
data() {
    return {
        showMobileMenu: false
    }
},
methods: {
    showMenu() {
      this.showMobileMenu = true
    },
    closeMenu() {
      this.showMobileMenu = false
    }
}
}
</script>

<style scoped>

.nav-container {
    display: flex;
    gap: 46px;
}
.nav-link {
    text-decoration: none;
    font-size: 22px;
    font-weight: 800;
    color: #000;
}
.icon {
    display: none;
    font-size: 25px;
}
@media screen and (max-width: 760px) {
    .icon {
        display: unset;
    }
    .menuContent {
       display: flex;
       flex-direction: column;
       gap: 20px;
    }
    .fa-xmark {
        font-size: 25px;
        text-align: right;
        padding-right: 20px;
    }
    .nav-container {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding-right: 20px;
        text-align: right;
    }
    .none {
        display: none;
    }
    .show {
        display: flex;
        gap: 30px;
    }
    .open-menu {
        background: #F5E7DD;
        padding-top: 30px;

        position: absolute;
        top: 0;
        right: 0;
        padding-left: 100vw;

        transform: translateX(0%);
        transition: all 0.5s ease-in-out;
        height: 100vh;

        z-index: 100;
        
    }
    .close-menu {
        height: 0;
        padding: 0;
        transform: translateX(0%);
        /* transition: all 0.5s ease-in-out; */
    
    }
}

</style>
<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute();


const showNav = () => {
  
  const excludedRoutes = ['/', '/Login']; 
  return !excludedRoutes.includes(route.path);
}
</script>

<template>

  <header v-if="showNav()">
    
    <img src="../src/images/Ticket/Icon.png"/>
    <nav >
      <RouterLink to="/">บัตร</RouterLink>
      <RouterLink to="/Event">กิจกรรม</RouterLink>
      <RouterLink to="/BuyPromotion">โปรโมชั่น</RouterLink>
      <RouterLink to="/BuyPackage">แพ็คเกจ</RouterLink>
      <RouterLink to="/CheckRequire">CheckRequire</RouterLink>
      <RouterLink to="/Receipt">Receipt</RouterLink>
      <RouterLink to="/review">review</RouterLink>
      
    </nav>
  </header>
  <RouterView></RouterView>
</template>

<style scoped>
header {
  position: fixed;
  background-color: rgb(31, 121, 143);
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 25px 0 black;
  z-index: 2;
  font-family: 'Kanit', 'sans-serif';
}

header img {
  width: 80px;
  height: 80px;
  margin-left: 40px;
}

header * {
  display: inline;
}

nav {
  width: 100%;
  font-size: 24px;
  text-align: left;
  margin-top: 2rem;
  margin: 20px;

}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: white; 
  text-decoration: none;
  margin-left: 40px;
  font-size: 25px;
  font-weight: bold;
}

nav a:first-of-type {
  border: 0;
}

</style>

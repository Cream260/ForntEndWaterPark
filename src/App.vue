<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img src="../src/images/Ticket/Icon.png"/>
    <nav>
      <RouterLink to="/">บัตร</RouterLink>
      <RouterLink to="/BuyEvent">กิจกรรม</RouterLink>
      <RouterLink to="/BuyPromotion">โปรโมชั่น</RouterLink>
      <RouterLink to="/BuyPackage">แพ็คเกจ</RouterLink>
    </nav>
  </header>
  <RouterView></RouterView>
</template>

<style scoped>
header {
  background-color: rgb(31, 121, 143);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 25px 0 black;
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
}

nav a:first-of-type {
  border: 0;
}

.activeTabs {
  position: sticky;
  top: 5rem;
  z-index: 2;
}
</style>

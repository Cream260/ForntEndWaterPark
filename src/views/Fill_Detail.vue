<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { mdiPlusBox, mdiMinusBox } from "@mdi/js";
</script>

<template>
  <body>
    <v-container>
      <v-card class="activeTabs">
        <v-card
          title="รายละเอียดของคุณ"
        ></v-card>
      </v-card>
    </v-container>
  </body>
</template>

<style scoped>
body {
  position: sticky;
  background-image: url("../images/Event/WallPaper.jpg");
  background-size: cover;
  font-family: sans-serif;
  margin-top: 80px;
  padding: 60px;
}
.activeTabs {
  border-radius: 20px;
  position: sticky;
  top: 3rem;
  z-index: 2;
}
</style>

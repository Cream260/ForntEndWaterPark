<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <body>
    <v-card class="full-card">
      
    </v-card>
  </body>
</template>

<style scoped>
body {
  background-image: url("../images/Event/WallPaper.jpg");
  background-size: cover;
  font-family: sans-serif;
  width: 100vw;
  height: 91.3vh;
  width: 100vw;
  height: 91.2vh;
  margin-top: 80px;
  padding: 15px;

}

.borderradius {
  border-radius: 20px;
  margin: 0px 0px 0px 0px;

}

.borderradius2 {
  border-radius: 20px;
  margin: 0px 0px 0px 40px;

}

.borderradius3 {
  border-radius: 20px;
  margin: 0px 40px 0px 0px;

}

.large-button {
  width: 222px;
  height: 77px;
  border-radius: 60px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #FAEF9B;
  color: #0B2C44;

}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  margin: 3%;
}

.full-card {
  width: 70%;
  height: 80vh;
  align-items: center;
  border-radius: 20px;
  margin-left: 15%;
  margin-top: 2%;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}


.smallfont {
  font-size: 30px;
  font-weight: normal;
  color: #0b2c44;
}

.smallBoldfont {
  font-size: 25px;
  font-weight: bold;
  color: #0b2c44;
  margin: 10px 10px 10px 10px;
}

.smallBoldfont2 {
  font-size: 16px;
  font-weight: bold;
  color: #0b2c44;
  margin: 10px 10px 10px 10px;
}

.extraBoldfont {
  font-size: 35px;
  font-weight: bolder;
  color: #0b2c44;
  margin-top: 3%;
}

.extraBoldfont2 {
  font-size: 35px;
  font-weight: bolder;
  color: #024864;
}

input[type="text"] {
  background-color: #8eadcdeb;
  border-radius: 20px;
  width: 504px;
  height: 77px;
  padding: 12px 20px;
  margin: 28px;
  box-sizing: border-box;
  outline: none;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}</style>

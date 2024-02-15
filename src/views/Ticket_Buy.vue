<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
// import { mdiPlusBox, mdiMinusBox } from '@mdi/js';

const tab = ref(1)
</script>

<template>
  <body>
    <v-card class="activeTabs">
      <v-tabs v-model="tab" color="deep-purple-accent-4" grow>
        <v-tab :value="1">ชาวไทย</v-tab>
        <v-tab :value="2">ชาวต่างชาติ</v-tab>
      </v-tabs>
      <v-divider></v-divider>
      <v-window v-model="tab">
        <v-window-item v-for="n in 2" :key="n" :value="n">
          <v-container fluid>
            <v-row>
              <v-col v-for="i in 6" :key="i" cols="12" md="6">

                <v-card color="#F5F1DC" theme="dark">
                  <v-layout>
                    <v-avatar class="ma-3" size="125" rounded="0">
                      <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                    </v-avatar>
                    <v-card-title class="text-h8">
                      <div>
                        <div class="headline">บัตรเด็ก</div>
                        <div class="font">
                          บัตรเด็กนี้จะสามารถใช้เข้าสวนน้ำสำหรับเด็กหนึ่งคนซึ่งสามารถเล่นเครื่องเล่นได้ทุกชนิด </div>
                        <div class="font">โดยจะมีเครื่องเล่นเฉพาะเด็ก และเล่นได้แบบเต็มวัน</div>
                        <div class="font">ส่วนสูง ≥ 106 เซนติเมตร ราคาหน้าเคาน์เตอร์ 799 ราคา 699 บาท</div>
                      </div>
                    </v-card-title>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-card-actions>
                    <!-- <v-btn :icon="mdiPlusBox"></v-btn> -->
                    <!-- <v-btn :icon="mdiMinusBox"></v-btn> -->
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12" sm="6" class="text-right">
          <v-text-field v-model="Code" :counter="4" label="โปรโมโค้ด" required hide-details
            variant="solo-filled"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" class="text-left">
          <v-btn color="#87B859">ยืนยัน</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </body>
</template>

<style scoped>
body {
  height: 125vh;
  background-image: url('../images/Event/WallPaper.jpg');
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
.font {
  font-size: small;
}
</style>

<script lang="ts">
export default {
  data: () => ({
    valid: false,
    Code: '',
  }),
}
</script>
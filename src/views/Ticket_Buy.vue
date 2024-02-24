<script setup lang="ts">

import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref } from "vue";
import { usePlusMinusStore } from "../stores/counter";
import { useTicketStore } from "../stores/ticket.store";

import { mdiPlus, mdiMinus } from "@mdi/js";
const calStore = usePlusMinusStore();
const tab = ref(1);
const ticketStore = useTicketStore();
onMounted(async () => {
  await ticketStore.getTicket();
})
</script>

<template>
  <body>
    <v-card class="activeTabs">
      <v-tabs v-model="tab" color="deep-purple-accent-4" grow>
        <v-tab :value="1" class="fontlarge">ชาวไทย</v-tab>
        <v-tab :value="2" class="fontlarge">ชาวต่างชาติ</v-tab>
      </v-tabs>
      <v-divider></v-divider>
      <v-window v-model="tab">
        <v-window-item v-for="n in 2" :key="n" :value="n">
          <v-container fluid class="scroll-container">
            <v-row>
              <v-col>
                <div v-for="item of ticketStore.tickets" :key="item.id" class="mb-6">
                  <v-card color="#F5F1DC" theme="dark" class="borderradius">
                    <v-layout>
                      <v-img src="../src/images/Ticket/ChildTicket.png" width="40%" class="ma-2"></v-img>
                      <v-card-title class="ma-11">
                        <h2 class="extraBoldfont mb-6">{{ item.name }}</h2>
                        <div v-for="(item, index) in detail" :key="index" >
                          <h2 class="smallBoldfont">{{ item }}</h2>
                        </div>
                        <div class="mb-6"></div>
                        <div v-for="(item, index) in subdetail" :key="index">
                          <h2 class="smallfont">{{ item }}</h2>
                        </div>
                        <v-card-actions class="no-padding">
                          <div>
                            <p3 class="smallfont">ราคา {{ item.price }} บาท</p3>
                          </div>
                          <v-spacer></v-spacer>
                          <v-flex>
                            <v-btn :icon="mdiPlus" @click="calStore.Childincrement"></v-btn></v-flex>
                          <div class="smallfont">{{ calStore.Childcount }}</div>
                          <v-flex class="text-xs-right">
                            <v-btn :icon="mdiMinus" @click="calStore.Childdecrement"></v-btn></v-flex>
                        </v-card-actions>
                      </v-card-title>
                    </v-layout>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
      <v-divider></v-divider>

      <v-row>
        <v-col cols="12" sm="7" class="text-right">
          <v-flex>
            <input type="text" id="fname" name="fname" placeholder="โปรโมโค้ด" class="placeholder-color" />
          </v-flex>
        </v-col>
        <v-col cols="12" sm="5" class="text-left">
          <v-flex>
            <RouterLink to="/filldetail">
              <v-btn color="#87B859" class="large-button">ยืนยัน</v-btn>
            </RouterLink>
          </v-flex>
        </v-col>
      </v-row>
    </v-card>
  </body>
</template>

<style scoped>
body {
  background-image: url('../images/Event/WallPaper.jpg');
  background-size: cover;
  width: 100vw;
  height: 91.2vh;
  margin-top: 80px;
  padding: 25px;
  font-family: 'Kanit', 'sans-serif';
}

.borderradius {
  border-radius: 20px;
}

.activeTabs {
  border-radius: 20px;
  position: sticky;
  top: 2rem;
}

.no-padding {
  padding: 0;
}

.fontlarge {
  font-size: 45px;
  font-weight: normal;
}

.large-button {
  width: 222px;
  height: 77px;
  border-radius: 20px;
  margin: 28px;
  font-size: 30px;
  font-weight: bold;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.smallfont {
  font-size: 40px;
  font-weight: normal;
  color: #0b2c44;
}

.smallBoldfont {
  font-size: 40px;
  font-weight: bold;
  color: #0b2c44;
}

.extraBoldfont {
  font-size: 50px;
  font-weight: bolder;
  color: #0b2c44;
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
}

input[type="text"]:focus {
  background-color: lightblue;
}

.placeholder-color::placeholder {
  color: white;
}

.scroll-container {
  height: 430px;
  overflow-y: scroll;
}

.scroll-container::-webkit-scrollbar {
  width: 12px;
}

.scroll-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.scroll-container::-webkit-scrollbar-thumb {
  background: #888;
}

.scroll-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.scroll-container::-webkit-scrollbar-button {
  display: none;
}

.v-tabs--density-default {
  --v-tabs-height: 80px;
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      detail: [
        'บัตรเด็กนี้จะสามารถใช้เข้าสวนน้ำสำหรับเด็กหนึ่งคนซึ่ง',
        'สามารถเล่นเครื่องเล่นได้ทุกชนิด โดยจะมีเครื่องเล่น',
        'เฉพาะเด็กและเล่นได้แบบเต็มวัน'
      ],
      subdetail: [
        'ส่วนสูง ≥ 106 เซนติเมตร',
        'ราคาหน้าเคาน์เตอร์ 799'
      ],
    };
  }
};
</script>
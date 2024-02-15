<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import { usePlusMinusStore } from "../stores/counter";
import { mdiPlusBox, mdiMinusBox } from "@mdi/js";
const calStore = usePlusMinusStore();
const tab = ref(1);
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
          <v-container fluid>
            <v-row>
              <v-col>
                <v-card color="#F5F1DC" theme="dark" >
                  <v-layout>
                    <v-img
                      src="../src/images/Ticket/ChildTicket.png"
                      width="40%"
                      class="ma-2"
                    ></v-img>
                    <v-card-title class="ma-11">
                      <div>
                        <h2 class="extraBoldfont">บัตรเด็ก</h2>
                        <br>
                        <div>
                          <p3 class="smallBoldfont">
                            บัตรเด็กนี้จะสามารถใช้เข้าสวนน้ำสำหรับเด็กหนึ่งคนซึ่ง
                          </p3>
                        </div>
                        <div>
                          <p3 class="smallBoldfont">
                            สามารถเล่นเครื่องเล่นได้ทุกชนิด โดยจะมีเครื่องเล่น
                          </p3>
                        </div>
                        <div>
                          <p3 class="smallBoldfont">
                            เฉพาะเด็กและเล่นได้แบบเต็มวัน
                          </p3>
                        </div>
                        <p3 class="smallfont">
                          ส่วนสูง ≥ 106 เซนติเมตร
                        </p3>
                        <div>
                          <p3 class="smallfont"
                            >ราคาหน้าเคาน์เตอร์ 799</p3
                          >
                        </div>
                        <v-card-actions class="no-padding"
                          ><div>
                            <p3 class="smallfont">ราคา 699 บาท</p3>
                          </div>
                          <v-spacer></v-spacer>
                          <v-flex>
                            <v-btn 
                              :icon="mdiPlusBox"
                              @click="calStore.Childincrement"
                            ></v-btn
                          ></v-flex>
                          <div class="smallfont">{{ calStore.Childcount }}</div>
                          <v-flex class="text-xs-right"
                            ><v-btn
                              :icon="mdiMinusBox"
                              @click="calStore.Childdecrement"
                            ></v-btn
                          ></v-flex>
                        </v-card-actions>
                      </div>
                    </v-card-title>
                  </v-layout>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-card color="#F5F1DC" theme="dark" >
                  <v-layout>
                    <v-img
                      src="../src/images/Ticket/ChildTicket.png"
                      width="40%"
                      class="ma-2"
                    ></v-img>
                    <v-card-title class="ma-11">
                      <div>
                        <h2 class="extraBoldfont">บัตรผู้ใหญ่</h2>
                        <br>
                        <div>
                          <p3 class="smallBoldfont">
                            บัตรเด็กนี้จะสามารถใช้เข้าสวนน้ำสำหรับเด็กหนึ่งคนซึ่ง
                          </p3>
                        </div>
                        <div>
                          <p3 class="smallBoldfont">
                            สามารถเล่นเครื่องเล่นได้ทุกชนิด โดยจะมีเครื่องเล่น
                          </p3>
                        </div>
                        <div>
                          <p3 class="smallBoldfont">
                            เฉพาะเด็กและเล่นได้แบบเต็มวัน
                          </p3>
                        </div>
                        <p3 class="smallfont">
                          ส่วนสูง ≥ 106 เซนติเมตร
                        </p3>
                        <div>
                          <p3 class="smallfont"
                            >ราคาหน้าเคาน์เตอร์ 799</p3
                          >
                        </div>
                        <v-card-actions class="no-padding"
                          ><div>
                            <p3 class="smallfont">ราคา 699 บาท</p3>
                          </div>
                          <v-spacer></v-spacer>
                          <v-flex>
                            <v-btn 
                              :icon="mdiPlusBox"
                              @click="calStore.Adultincrement"
                            ></v-btn
                          ></v-flex>
                          <div class="smallfont">{{ calStore.Adultcount }}</div>
                          <v-flex class="text-xs-right"
                            ><v-btn
                              :icon="mdiMinusBox"
                              @click="calStore.Adultdecrement"
                            ></v-btn
                          ></v-flex>
                        </v-card-actions>
                      </div>
                    </v-card-title>
                  </v-layout>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12" sm="6" class="text-right">
          <!-- <v-text-field
            v-model="Code"
            :counter="4"
            required
            hide-details
            variant="solo-filled"
            class="custom-text-field"
          ><label color="#666">โปรโมโค้ด</label></v-text-field> -->
        </v-col>
        <v-col cols="12" sm="6" class="text-left" >
          <v-btn color="#87B859" class="large-button">ยืนยัน</v-btn>
        </v-col>
      </v-row>
    </v-card>
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
.no-padding {
  padding: 0;
}
.fontlarge {
  font-size: xx-large;
}
.custom-text-field {
  border-radius: 24px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 10px 16px;
  height: 48px;
}
.large-button {
  width: 222px;
  height: 77px;
  border-radius: 20px;
  margin: 28px;
  font-size: 30px;
  font-weight: bold;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.smallfont {
  font-size: 30px;
  font-weight: normal;
  color: #0B2C44;
}
.smallBoldfont {
  font-size: 30px;
  font-weight: bold;
  color: #0B2C44;
}
.extraBoldfont {
  font-size: 40px;
  font-weight: bolder;
  color: #0B2C44;
}
</style>

<script lang="ts">
export default {
  data: () => ({
    valid: false,
    Code: "",
  }),
};
</script>
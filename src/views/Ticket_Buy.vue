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
                <v-card color="#F5F1DC" theme="dark">
                  <v-layout>
                    <v-img
                      src="../src/images/Ticket/ChildTicket.png"
                      width="33%"
                      class="ma-11"
                    ></v-img>
                    <v-card-title class="ma-11">
                      <div>
                        <h2>บัตรเด็ก</h2>
                        <div>
                          <p3 class="font-weight-bold">
                            บัตรเด็กนี้จะสามารถใช้เข้าสวนน้ำสำหรับเด็กหนึ่งคนซึ่งสามารถเล่นเครื่องเล่น
                          </p3>
                        </div>
                        <div>
                          <p3 class="font-weight-bold">
                            ได้ทุกชนิด โดยจะมีเครื่องเล่นเฉพาะเด็ก
                            และเล่นได้แบบเต็มวัน
                          </p3>
                        </div>
                        <p3 class="font-weight-thin">
                          ส่วนสูง ≥ 106 เซนติเมตร
                        </p3>
                        <div>
                          <p3 class="font-weight-thin"
                            >ราคาหน้าเคาน์เตอร์ 799</p3
                          >
                        </div>
                        <v-card-actions class="no-padding"
                          ><div>
                            <p3 class="font-weight-light">ราคา 699 บาท</p3>
                          </div>
                          <v-spacer></v-spacer>
                          <v-flex>
                            <v-btn 
                              :icon="mdiPlusBox"
                              @click="calStore.Childincrement"
                            ></v-btn
                          ></v-flex>
                          <div>{{ calStore.Childcount }}</div>
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
                <v-card color="#F5F1DC" theme="dark">
                  <v-layout>
                    <v-img
                      src="../src/images/Ticket/ChildTicket.png"
                      width="33%"
                      class="ma-11"
                    ></v-img>
                    <v-card-title class="ma-11">
                      <div>
                        <h2>บัตรผู้ใหญ่</h2>
                        <div>
                          <p3 class="font-weight-bold">
                            บัตรเด็กนี้จะสามารถใช้เข้าสวนน้ำสำหรับเด็กหนึ่งคนซึ่งสามารถเล่นเครื่องเล่น
                          </p3>
                        </div>
                        <div>
                          <p3 class="font-weight-bold">
                            ได้ทุกชนิด โดยจะมีเครื่องเล่นเฉพาะเด็ก
                            และเล่นได้แบบเต็มวัน
                          </p3>
                        </div>
                        <p3 class="font-weight-thin">
                          ส่วนสูง ≥ 106 เซนติเมตร
                        </p3>
                        <div>
                          <p3 class="font-weight-thin"
                            >ราคาหน้าเคาน์เตอร์ 799</p3
                          >
                        </div>
                        <v-card-actions class="no-padding"
                          ><div>
                            <p3 class="font-weight-light">ราคา 699 บาท</p3>
                          </div>
                          <v-spacer></v-spacer>
                          <v-flex>
                            <v-btn
                              :icon="mdiPlusBox"
                              @click="calStore.Adultincrement"
                            ></v-btn
                          ></v-flex>
                          <div>{{ calStore.Adultcount }}</div>
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
          <v-text-field
            v-model="Code"
            :counter="4"
            label="โปรโมโค้ด"
            required
            hide-details
            variant="solo-filled"
          ></v-text-field>
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
</style>

<script lang="ts">
export default {
  data: () => ({
    valid: false,
    Code: "",
  }),
};
</script>

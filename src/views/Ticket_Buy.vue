<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useOrderStore } from "../stores/order.store";
import { useTicketStore } from "../stores/ticket.store";
import { mdiPlus, mdiMinus, mdiClose } from "@mdi/js";
import PromotionBuy from "@/views/Dialogs/PromotionTicket.vue"
const orderStore = useOrderStore();
const ticketStore = useTicketStore();
const tab = ref(1);
onMounted(async () => {
  await ticketStore.getTicket();
})

</script>
<template>
  <body style="margin-top: 80px; width: 100vw; height: 88.9vh; ">
    <v-card class="activeTabs">
      <v-tabs v-model="tab" color="deep-purple-accent-4" grow>
        <v-tab :value="1" class="fontlarge">ชาวไทย</v-tab>
        <v-tab :value="2" class="fontlarge">ชาวต่างชาติ</v-tab>
      </v-tabs>
      <v-divider></v-divider>
      <v-window v-model="tab">
        <v-window-item :value="1">
          <v-container fluid class="scroll-container">
            <v-row>
              <v-col>
                <div v-for="(item, index) of ticketStore.tickets" :key="index">
                  <div v-if="item.type === 'คนไทย' && item.name === 'บัตรเด็ก'">
                    <v-card color="#F5F1DC" theme="dark" class="borderradius" style="height: 34vh;">
                      <v-layout>
                        <v-img src="../src/images/Ticket/ChildTicket.png" style=" width: 25vw; height: 26vh; margin-right: 20%;" class="ma-2 mt-7"></v-img>
                        <v-card-title style="margin-right: 20%;">
                          <h2 class="extraBoldfont">{{ item.name }}</h2>
                          <div v-for="(item, index) in detail" :key="index">
                            <h2 class="smallBoldfont">{{ item }}</h2>

                          </div>
                          <!-- <div></div> -->
                          <div v-for="(item, index) in subdetail" :key="index">
                            <h2 class="smallfont">{{ item }}</h2>
                          </div>
                          <v-card-actions class="no-padding">
                            <!-- <div> -->
                              <p3 class="smallfont">ราคา {{ item.price }} บาท</p3>
                            <!-- </div> -->
                            <v-spacer></v-spacer>
                            <v-btn :icon="mdiPlus" @click="orderStore.ThChildincrement(item)"></v-btn>
                            <div class="smallfont">{{ orderStore.ThChildqty }}</div>
                            <v-btn class="text-xs-right" :icon="mdiMinus" @click="orderStore.ThChilddecrement(index)"></v-btn>
                          </v-card-actions>
                        </v-card-title>
                      </v-layout>
                    </v-card>
                  </div>
                </div>
              </v-col>
              <v-col>
                <div v-for="(item, index) of ticketStore.tickets" :key="index">
                  <div v-if="item.type === 'คนไทย' && item.name === 'บัตรผู้ใหญ่'">
                    <v-card color="#F5F1DC" theme="dark" class="borderradius" style="height: 34vh;">
                      <v-layout>
                        <v-img src="../src/images/Ticket/ChildTicket.png" width="30%" class="ma-2 mt-7" style=" width: 25vw; height: 26vh; margin-right: 20%;"></v-img>
                        <v-card-title style="margin-right: 20%;">
                          <h2 class="extraBoldfont ">{{ item.name }}</h2>
                          <div v-for="(item, index) in detail" :key="index">
                            <h2 class="smallBoldfont">{{ item }}</h2>
                          </div>
                          <div ></div>
                          <div v-for="(item, index) in subdetail" :key="index">
                            <h2 class="smallfont">{{ item }}</h2>
                          </div>
                          <v-card-actions class="no-padding">
                            <div>
                              <p3 class="smallfont">ราคา {{ item.price }} บาท</p3>
                            </div>
                            <v-spacer></v-spacer>
                            <v-btn :icon="mdiPlus" @click="orderStore.ThAdultincrement(item)"></v-btn>
                            <div class="smallfont">{{ orderStore.ThAdultqty }}</div>
                            <v-btn class="text-xs-right" :icon="mdiMinus" @click="orderStore.ThAdultdecrement(index)"></v-btn>
                          </v-card-actions>
                        </v-card-title>
                      </v-layout>
                    </v-card>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
        <v-window-item :value="2">
          <v-container fluid class="scroll-container">
            <v-row>
              <v-col>
                <div v-for="(item, index) of ticketStore.tickets" :key="index">
                  <div v-if="item.type === 'คนต่างชาติ' && item.name === 'บัตรเด็ก'">
                    <v-card color="#F5F1DC" theme="dark" class="borderradius " style="height: 34vh;" >
                      <v-layout>
                        <v-img src="../src/images/Ticket/ChildTicket.png" width="35%" class="ma-2 mt-7" style=" width: 25vw; height: 26vh; margin-right: 20%;"></v-img>
                        <v-card-title style="margin-right: 20%;">
                          <h2 class="extraBoldfont">{{ item.name }}</h2>
                          <div v-for="(item, index) in detail" :key="index">
                            <h2 class="smallBoldfont">{{ item }}</h2>
                          </div>
                          <div ></div>
                          <div v-for="(item, index) in subdetail" :key="index">
                            <h2 class="smallfont">{{ item }}</h2>
                          </div>
                          <v-card-actions class="no-padding">
                            <div>
                              <p3 class="smallfont">ราคา {{ item.price }} บาท</p3>
                            </div>
                            <v-spacer></v-spacer>
                            <v-btn :icon="mdiPlus" @click="orderStore.EnChildincrement(item)"></v-btn>
                            <div class="smallfont">{{ orderStore.EnChildqty }}</div>
                            <v-btn class="text-xs-right" :icon="mdiMinus" @click="orderStore.EnChilddecrement(index)"></v-btn>
                          </v-card-actions>
                        </v-card-title>
                      </v-layout>
                    </v-card>
                  </div>
                </div>
              </v-col>
              <v-col>
                <div v-for="(item, index) of ticketStore.tickets" :key="index">
                  <div v-if="item.type === 'คนต่างชาติ' && item.name === 'บัตรผู้ใหญ่'">
                    <v-card color="#F5F1DC" theme="dark" class="borderradius mt-7" style=" width: 25vw; height: 26vh; margin-right: 20%;">
                      <v-layout>
                        <v-img src="../src/images/Ticket/ChildTicket.png" width="40%" class="ma-2"></v-img>
                        <v-card-title style="margin-right: 20%;">
                          <h2 class="extraBoldfont">{{ item.name }}</h2>
                          <div v-for="(item, index) in detail" :key="index">
                            <h2 class="smallBoldfont">{{ item }}</h2>
                          </div>
                          <div></div>
                          <div v-for="(item, index) in subdetail" :key="index">
                            <h2 class="smallfont">{{ item }}</h2>
                          </div>
                          <v-card-actions class="no-padding">
                            <div>
                              <p3 class="smallfont">ราคา {{ item.price }} บาท</p3>
                            </div>
                            <v-spacer></v-spacer>
                            <v-btn :icon="mdiPlus" @click="orderStore.EnAdultincrement(item)"></v-btn>
                            <div class="smallfont">{{ orderStore.EnAdultqty }}</div>
                            <v-btn class="text-xs-right" :icon="mdiMinus" @click="orderStore.EnAdultdecrement(index)"></v-btn>
                          </v-card-actions>
                        </v-card-title>
                      </v-layout>
                    </v-card>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12" sm="7" class="text-right">
          <!-- <v-flex>
            <input type="text" id="fname" name="fname" placeholder="โปรโมโค้ด" class="placeholder-color" />
          </v-flex> -->
          <v-dialog transition="dialog-bottom-transition" width="auto">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn color="#8eadcdeb" class="promo-button whitefont" v-bind="activatorProps"  text="โปรโมโค้ด"></v-btn>
              
            </template>

            <template v-slot:default="{ isActive }">
              <v-card>
                <v-toolbar title="Promotion"><v-btn :icon="mdiClose" variant="text" @click="isActive.value = false"></v-btn></v-toolbar>           
                <PromotionBuy></PromotionBuy>
              </v-card>
            </template>        
          </v-dialog>
        </v-col>
        <v-col cols="12" sm="5" class="text-left">
          <v-flex>
            <RouterLink to="/filldetail">
              <v-btn color="#87B859" class="large-button" @click="orderStore.openOrder()">ยืนยัน</v-btn>
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
  padding: 25px;
  font-family: 'Kanit', 'sans-serif';
}

.borderradius {
  border-radius: 20px;
}

.activeTabs {
  border-radius: 20px;
  position: sticky;  
  width: 75%; 
  height: 80vh;
  margin-left: 13%;
  margin-top: 0.7%
}

.no-padding {
  padding: 0;
}

.fontlarge {
  font-size: 35px;
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

.promo-button {
  width: 504px;
  height: 77px;
  border-radius: 20px;
  margin: 28px;
  font-size: 30px;
  font-weight: bold;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.smallfont {
  font-size: 15px;
  font-weight: normal;
  color: #0b2c44;
}

.whitefont {
  color: white;
}

.smallBoldfont {
  font-size: 15px;
  font-weight: bold;
  color: #0b2c44;
}

.extraBoldfont {
  font-size: 30px;
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
  font-size: 15px;
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
      dialog: false,
    };
  }
};
</script>
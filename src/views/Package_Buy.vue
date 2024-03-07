<script setup lang="ts">

import { onMounted, ref } from "vue";
import { useOrderStore } from "../stores/order.store";

import { usePackageStore } from "@/stores/package.store";

const orderStore = useOrderStore();
const packageStore = usePackageStore();
const tab = ref(1);
onMounted(async () => {
  await packageStore.getPackage();
})
</script>
<template>
  <body>
    <v-card class="full-card">
      <div style="margin: 0px 0px 0px 40px;">
        <h2 style="font-size: 35px; margin-top: 1%; margin-bottom: 1%;">แพ็คเกจ</h2>
      </div>
      <v-card color="#F5F1DC" theme="dark" class="borderradius2 text-center ma-2 ml-8" style="max-width: 64vw; height: 33vh; display: flex; flex-direction: column; justify-content: space-between;">
        <v-row class="borderradius">
            <v-layout>
                <v-row cols="12">
                    <v-col cols="4" style="max-height: 30vh;">
                        <v-img src="../src/images/package/family.png" height="200px" class="mt-8 background-size: cover;"></v-img>
                    </v-col>
                    <v-col cols="7" class="mt-10">
                        <h2 class="extraBoldfont d-flex justify-start" style="text-align: left;">แพ็คเกจครอบครัว</h2>
                        <p3 class="smallBoldfont d-flex justify-start line-clamp" style="text-align: left;">แพ็คเกจพิเศษสำหรับครอบครัวซึ่งในเเพ็คเกจนี้จะประกอบไปด้วย ตั๋วเข้าสวนน้ำสำหรับผู้ใหญ่สองคนและเด็กสองคน พร้อมที่จอดรถฟรีและส่วนลดสำหรับอาหารภายในสวนน้ำ</p3>
                        <p3 class="smallBoldfont d-flex justify-start" style="text-align: left;">ราคา 1999 บาท</p3>
                    </v-col>
                </v-row>
            </v-layout>
        </v-row>
        <RouterLink to="/filldetail" style="margin-left: 80%;">
          <v-btn class="large-button" style="align-self: flex-end; margin-bottom: 15px;" >
            ซื้อเลยตอนนี้
          </v-btn>
        </RouterLink>
        
    </v-card>

      <v-card color="#F5F1DC" theme="dark"  class="borderradius2 text-center ma-2 ml-8" style=" width: 64vw; height: 33vh; display: flex; flex-direction: column; justify-content: space-between;">
        <v-row cols="12">
          <v-col cols="4" style="max-height: 30vh;">
            <v-img src="../src/images/package/birthday2.png" height="200px" class="mt-6 background-size: cover;"></v-img>
          </v-col>
            
          <v-col cols="7" class="mt-10">
            <!-- <v-card-title > -->
              <!-- <div style="margin: 0px 0px 0px 40px;"> -->
                <h2 class="extraBoldfont d-flex justify-start" style="text-align: left;">แพ็คเกจวันเกิด</h2>
                <p3 class="smallBoldfont d-flex justify-start line-clamp" style="text-align: left;">แพ็คเกจวันเกิดที่รวมตั๋วเข้าสวนน้ำ พื้นที่จัดปาร์ตี้ และอาหารสำหรับกลุ่มของเด็กๆพร้อมของขวัญเล็กๆน้อยๆสำหรับผู้ฉลอง</p3>
                <p3 class="smallBoldfont d-flex justify-start" style="text-align: left;">ราคา 1999 บาท</p3>
                <RouterLink to="/filldetail" style="margin-left: 84%;">
                  <v-btn class="large-button" style="align-self: flex-end; margin-bottom: 15px;" >
                    ซื้อเลยตอนนี้
                  </v-btn>
                </RouterLink>
                <!-- </v-card-actions> -->
              <!-- </div> -->
            <!-- </v-card-title> -->
          </v-col>
        </v-row>
      </v-card>


    </v-card>
  </body>
</template>

<style scoped>
body {
  background-image: url("../images/Event/WallPaper.jpg");
  background-size: cover;
  font-family: sans-serif;
  width: 100vw;
  height: 89vh;
  margin-top: 80px;
  padding: 15px;

}

.full-card {
  width: 70%;
  height: 80vh;
  align-items: center;
  border-radius: 20px;
  margin-left: 15%;
  margin-top: 2%;
}

.borderradius {
  border-radius: 20px;

}

.borderradius2 {
  border-radius: 20px;
  margin: 0px 0px 0px 40px;

}

.activeTabs {
  border-radius: 20px;
  position: sticky;
  top: 2rem;
  width: 90vw;
  height: 90vh;

}

.no-padding {
  padding: 0;
}

.fontlarge {
  font-size: 45px;
  font-weight: normal;
}

.large-button {
  width: 152px;
  height: 45px;
  border-radius: 20px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #87B859;
}


.smallBoldfont {
  font-size: 18px;
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
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>

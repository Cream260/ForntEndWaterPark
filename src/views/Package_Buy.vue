<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from 'vue';
import { usePackageStore } from "@/stores/package.store";
import type Package from "@/type/package";
import { useOrderStore } from "@/stores/order.store";
import router from "@/router";
const packageStore = usePackageStore();
const orderStore = useOrderStore();
const addPackage =  (packageItem: Package) => {
  packageStore.currentPackage = packageItem;
  router.push('/fillpackage');
}
onMounted(async () => {
  await packageStore.getPackage();
  await orderStore.getOrder();
})
</script>

<template>

  <body>
    <v-card class="full-card">
      <div style="margin: 0px 0px 0px 40px;">
        <h2 style="font-size: 35px; margin-top: 1%; margin-bottom: 1%;">แพ็คเกจ</h2>
      </div>


      <div v-for="(item, index) of packageStore.packages" :key="index">
        <div v-if="item.name === 'แพ็คเกจวันเกิด'">
          <v-card color="#F5F1DC" theme="dark" class="borderradius" style="height: 34vh;">
            <v-layout>
              <v-img src="../src/images/package/birthday2.png" style=" width: 25vw; height: 26vh; margin-right: 20%;"
                class="ma-2 mt-7"></v-img>
              <v-card-title style="margin-right: 20%;">
                <h2 class="extraBoldfont mb-1 mt-3">{{ item.name }}</h2>
                <div v-for="(item, index) in detail2" :key="index" style="">
                  <h2 class="smallBoldfont">{{ item }}</h2>

                </div>
                <!-- <div></div> -->

                <v-card-actions class="no-padding">
                  <!-- <div> -->
                  <h2 class="smallfont">ราคา {{ item.price }} บาท</h2>
                  <!-- </div> -->
                  <v-spacer></v-spacer>

                  <RouterLink to="/fillpackage">
                    <v-btn class="large-button" color="#00000" @click="addPackage(item)">ซื้อเลยตอนนี้</v-btn>
                  </RouterLink>
                </v-card-actions>
              </v-card-title>
            </v-layout>
          </v-card>
        </div>
      </div>

      <div v-for="(item, index) of packageStore.packages" :key="index">
        <div v-if="item.name === 'แพ็คเกจครอบครัว'">
          <v-card color="#F5F1DC" theme="dark" class="borderradius" style="height: 34vh;">
            <v-layout>
              <v-img src="../src/images/package/family.png" style=" width: 25vw; height: 26vh; margin-right: 20%;"
                class="ma-2 mt-7"></v-img>
              <v-card-title style="margin-right: 20%;">
                <h2 class="extraBoldfont mb-1 mt-3">{{ item.name }}</h2>
                <div v-for="(item, index) in detail" :key="index" style="">
                  <h2 class="smallBoldfont">{{ item }}</h2>

                </div>
                <!-- <div></div> -->

                <v-card-actions class="no-padding">
                  <!-- <div> -->
                  <h2 class="smallfont">ราคา {{ item.price }} บาท</h2>
                  <!-- </div> -->
                  <v-spacer></v-spacer>
                  <RouterLink to="/fillpackage">
                    <v-btn class="large-button" color="#00000" @click="addPackage(item)">ซื้อเลยตอนนี้</v-btn>
                  </RouterLink>
                </v-card-actions>
              </v-card-title>
            </v-layout>
          </v-card>
        </div>
      </div>




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
  background-color: hsla(0, 0%, 100%, 0.922);
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

<script lang="ts">
export default {
  data() {
    return {
      detail: [
        'แพ็คเกจพิเศษสำหรับครอบครัวซึ่งในเเพ็คเกจนี้จะประกอบไปด้วย ตั๋วเข้าสวนน้ำสำหรับ',
        'ผู้ใหญ่สองคนและเด็กสองคน พร้อมที่จอดรถฟรีและส่วนลดสำหรับอาหารภายในสวนน้ำ',

      ],
      detail2: [
        'แพ็คเกจวันเกิดที่รวมตั๋วเข้าสวนน้ำ พื้นที่จัดปาร์ตี้ และอาหารสำหรับกลุ่มของเด็กๆพร้อม',
        'ของขวัญเล็กๆน้อยๆสำหรับผู้ฉลอง'
      ],
    };
  }
};

</script>
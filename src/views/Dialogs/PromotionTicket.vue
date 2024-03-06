<script setup lang="ts">
import order from "@/components/services/order";
import { useOrderStore } from "@/stores/order.store";
import { usePromotionStore } from "@/stores/promotion";
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
const promotionStore = usePromotionStore();
const orderStore = useOrderStore();
onMounted(async () => {
  await promotionStore.getPromotion();
})

function updatePromotion(id: number,discount: number) {
  orderStore.updatePromotion(id,discount);

  
}


</script>
<template>
  <body>
    <v-row>
      <v-col cols="12" sm="4" v-for="(item, index) of promotionStore.promotions" :key="index"> 
        <v-card color="#F5F1DC" theme="dark" class="borderradius2 text-center">
          <div>
            <h2 class="extraBoldfont2">{{ item.name }}</h2>
          </div>
          <div class="img-container">
            <v-img src="../src/images/promo/sum.png" class="img1"></v-img>
          </div>
          <div>
            <p3 class="smallBoldfont">{{ item.detail }}</p3>
          </div>
          <v-flex>
            <RouterLink to="/filldetail"><v-btn class="large-button" @click="updatePromotion(item.id!,item.discount)">{{ item.code }}</v-btn></RouterLink>
          </v-flex>
          <div>
            <p10 class="smallBoldfont2">เริ่มตั้งแต่วันที่ {{ item.startDate }} ถึงวันที่ {{ item.endDate }}</p10>
          </div>
        </v-card>
      </v-col>

      <!-- <v-col cols="12" sm="4" v-for="(item, index) of promotionStore.promotions" :key="index">
        <v-card color="#F5F1DC" theme="dark" class="borderradius text-center"  v-if="index===1">
          <div>
            <h2 class="extraBoldfont2">{{ item.name }}</h2>
          </div>
          <div class="img-container">
            <v-img src="../src/images/promo/free.png" class="img1"></v-img>
          </div>
          <div>
            <p3 class="smallBoldfont">ลูกค้าที่ซื้อบัตรเข้าสวนน้ำ 2 ใบ</p3>
          </div>
          <div>
            <p3 class="smallBoldfont">จะจ่ายเพียงราคาของบัตรเข้า</p3>
          </div>
          <div>
            <p3 class="smallBoldfont">สวนน้ำ 1 ใบเท่านั้น</p3>
          </div>
          <div>
            <p3 class="smallBoldfont">เพียงแค่กรอกโค้ด</p3>
          </div>
          <v-flex>
            <RouterLink to="/filldetail"><v-btn class="large-button">{{item.code}}</v-btn></RouterLink>
          </v-flex>
          <div>
            <p10 class="smallBoldfont2">เริ่มตั้งแต่วันที่{{ item.startDate}} ถึงวันที่ {{ item.endDate }}</p10>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4" v-for="(item, index) of promotionStore.promotions" :key="index">
        <v-card color="#F5F1DC" theme="dark" class="borderradius3 text-center" v-if="index===2">
          <div>
            <h2 class="extraBoldfont2">{{ item.name }}</h2>
          </div>
          <div class="img-container">
            <v-img src="../src/images/promo/fun.png" class="img1"></v-img>
          </div>
          <div>
            <p3 class="smallBoldfont">ลูกค้าที่ซื้อบัตรเข้าสวนน้ำ 5 ใบ</p3>
          </div>
          <div>
            <p3 class="smallBoldfont">จะจ่ายเพียงราคาของบัตรเข้า</p3>
          </div>
          <div>
            <p3 class="smallBoldfont">สวนน้ำ 4 ใบเท่านั้น</p3>
          </div>
          <div>
            <p3 class="smallBoldfont">เพียงแค่กรอกโค้ด</p3>
          </div>
          <v-flex>
            <RouterLink to="/filldetail"><v-btn class="large-button">{{item.code}}</v-btn></RouterLink>
          </v-flex>
          <div>
            <p10 class="smallBoldfont2">เริ่มตั้งแต่วันที่ {{ item.startDate}} ถึงวันที่{{ item.endDate }}</p10>
          </div>
        </v-card> 
      </v-col> -->
    </v-row>
  </body>
</template>

<style scoped>
body {
  font-family: "Kanit", sans-serif;

}
.borderradius {
  border-radius: 20px;
}

.borderradius2 {
  border-radius: 20px;
}

.borderradius3 {
  border-radius: 20px;
}

.large-button {
  width: 222px;
  height: 77px;
  border-radius: 60px;
  margin: 28px;
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
}

.smallfont {
  font-size: 30px;
  font-weight: normal;
  color: #0b2c44;
}

.smallBoldfont {
  font-size: 30px;
  font-weight: bold;
  color: #0b2c44;
  margin: 10px 10px 10px 10px;
}

.smallBoldfont2 {
  font-size: 20px;
  font-weight: bold;
  color: #0b2c44;
  margin: 10px 10px 10px 10px;
}

.extraBoldfont {
  font-size: 40px;
  font-weight: bolder;
  color: #0b2c44;
}

.extraBoldfont2 {
  font-size: 40px;
  font-weight: bolder;
  color: #024864;
}</style>

<script setup lang="ts">
import { usePromotionStore } from "@/stores/promotion";
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
const promotionStore = usePromotionStore();
onMounted(async () => {
  await promotionStore.getPromotion();
})

</script>
<template>
  <body>
    <v-card class="full-card">
      <v-row>
        <div style="margin: 20px 0px 0px 40px;">
          <h2 class="extraBoldfont">โปรโมชั่น</h2>
        </div>
      </v-row>
      <v-col>
        <v-row>
          <v-col cols="12" sm="4" v-for="(item, index) of promotionStore.promotions" :key="index" > 
            <v-card color="#F5F1DC" theme="dark" class="borderradius2 text-center" style=" width: 17vw;">
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
                <RouterLink to="/filldetail"><v-btn class="large-button">{{ item.code }}</v-btn></RouterLink>
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
      </v-col>
      
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
  width: 200px;
  height: 57px;
  border-radius: 60px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 23px;
  font-weight: bold;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #FAEF9B;
  color: #0B2C44;

}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
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
  font-size: 18px;
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
  font-size: 28px;
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

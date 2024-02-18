<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <body>
  <v-card class="full-card ">
    <v-row><div  style="margin: 20px 0px 0px 40px;">
                    <h2 class="extraBoldfont">โปรโมชั่น</h2>
                   </div></v-row>
    <v-row>
      
      <v-col>
        
        <v-card color="#F5F1DC" theme="dark" class="borderradius2 text-center">
    <div>
        <h2 class="extraBoldfont2">หรรษาคลายร้อน</h2>
    </div>
    <div class="img-container">
        <v-img src="../src/images/promo/sum.png" class="img1"></v-img>
    </div>
    <div><p3 class="smallBoldfont">ลดราคาบัตรเข้าสวนน้ำ 20%</p3></div>
    <div><p3 class="smallBoldfont">สำหรับเด็กและผู้ใหญ่</p3></div>
    <div><p3 class="smallBoldfont">เมื่อซื้อบัตรออนไลน์ล่วงหน้า</p3></div>
    <div><p3 class="smallBoldfont">หน้าเพียงแค่กรอกโค้ด</p3></div>
    <v-flex><RouterLink to="/filldetail"><v-btn class="large-button">Happy2024</v-btn></RouterLink></v-flex>
    <div><p10 class="smallBoldfont2">เริ่มตั้งแต่วันที่ 1 มีนาคม ถึงวันที่ 30 เมษายน 2567</p10></div>
</v-card>


      </v-col>
      <v-col>
        <v-card color="#F5F1DC" theme="dark" class="borderradius text-center">
    <div>
        <h2 class="extraBoldfont2">มา 2 จ่าย 1</h2>
    </div>
    <div class="img-container">
        <v-img src="../src/images/promo/free.png" class="img1"></v-img>
    </div>
    <div><p3 class="smallBoldfont">ลูกค้าที่ซื้อบัตรเข้าสวนน้ำ 2 ใบ</p3></div>
    <div><p3 class="smallBoldfont">จะจ่ายเพียงราคาของบัตรเข้า</p3></div>
    <div><p3 class="smallBoldfont">สวนน้ำ 1 ใบเท่านั้น</p3></div>
    <div><p3 class="smallBoldfont">เพียงแค่กรอกโค้ด</p3></div>
    <v-flex><RouterLink to="/filldetail"><v-btn  class="large-button">Promo123</v-btn></RouterLink></v-flex>
    <div><p10 class="smallBoldfont2">เริ่มตั้งแต่วันที่ 1 มีนาคม ถึงวันที่ 30 เมษายน 2567</p10></div>
</v-card>


      </v-col>
      <v-col>
        <v-card color="#F5F1DC" theme="dark" class="borderradius3 text-center">
    <div>
        <h2 class="extraBoldfont2">มันส์ยกแก๊งค์</h2>
    </div>
    <div class="img-container">
        <v-img src="../src/images/promo/fun.png" class="img1"></v-img>
    </div>
    <div><p3 class="smallBoldfont">ลูกค้าที่ซื้อบัตรเข้าสวนน้ำ 5 ใบ</p3></div>
    <div><p3 class="smallBoldfont">จะจ่ายเพียงราคาของบัตรเข้า</p3></div>
    <div><p3 class="smallBoldfont">สวนน้ำ 4 ใบเท่านั้น</p3></div>
    <div><p3 class="smallBoldfont">เพียงแค่กรอกโค้ด</p3></div>
    <v-flex><RouterLink to="/filldetail"><v-btn class="large-button">Friend06</v-btn></RouterLink></v-flex>
    <div><p10 class="smallBoldfont2">เริ่มตั้งแต่วันที่ 1 มีนาคม ถึงวันที่ 30 เมษายน 2567</p10></div>
</v-card>
      </v-col>
    </v-row>
  </v-card> 
  </body>
</template>

<style scoped>
body {
  background-image: url("../images/Event/WallPaper.jpg");
  background-size: cover;
  font-family: sans-serif;
  margin-top: 40px;
  padding: 50px;
  
}
.borderradius {
  border-radius: 20px;
  margin: 0px 0px 0px 0px;
  
}
.borderradius2 {
  border-radius: 20px;
  margin: 0px 0px 0px 40px;
  
}.borderradius3 {
  border-radius: 20px;
  margin: 0px 40px 0px 0px;
  
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
  color:#0B2C44;
  
}
.img-container {
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 250px; 
}

.full-card {
  width: 93vw; /* กว้างเต็มหน้าจอ */
  height: 85vh; /* สูงเต็มหน้าจอ */
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



</style>

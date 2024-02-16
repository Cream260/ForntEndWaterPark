<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <body>
    <container class="fluid">
      <v-card class="activeTabs lgallfont">
        รายละเอียดของคุณ
        <v-card class="pa-4 ma-6 detailCard">
          <v-row>
            <v-col cols="12" lg="6" class="text-left smallnormalFont"><h5>ชื่อ Paowaric Vachiranantakul</h5></v-col>
            <v-col cols="12" lg="6" class="text-left smallnormalFont"><h5>ชื่อบัตร บัตรเด็ก</h5></v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6" class="text-left smallnormalFont"><h5>อีเมลล์ gxz321@hotmail.com</h5></v-col>
            <v-col cols="12" lg="6" class="text-left smallnormalFont"><h5>โปรโมชั่น หรรษาคลายร้อน</h5></v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6" class="text-left smallnormalFont"><h5>เบอร์โทรศัพท์ 0869703269</h5></v-col>
            <v-col cols="12" lg="6" class="text-left smallnormalFont"><h5>699 THB x 1</h5></v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6" class="text-left smallnormalFont"><h5>วันที่มาใช้บริการ 28 Jan, 2024</h5></v-col>
            <v-col cols="12" lg="6" class="text-left smallnormalFont"><h5>ส่วนลด 100 THB</h5></v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6" class="text-left smallnormalFont"><h5>บัตรหมดอายุ 29 Jan, 2024</h5></v-col>
            <v-col cols="12" lg="6" class="text-left smallnormalFont"><h5>ราคาสุทธิ 599 THB</h5></v-col>
          </v-row>
        </v-card>
        <v-row>
            <v-col>
                <h1>ช่องทางการจ่ายเงิน</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" lg="6" class="text-left"
            ><RouterLink to="/sumdetail">
              <v-btn color="#87B859" class="large-button"
                >ซื้อเลยตอนนี้</v-btn
              ></RouterLink
            >
          </v-col>
          <v-col cols="12" lg="6" class="text-left"
            ><RouterLink to="/">
              <v-btn color="#FF835A" class="large-button"
                >ยกเลิกการซื้อ</v-btn
              ></RouterLink
            >
          </v-col>
        </v-row>
      </v-card>
    </container>
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
.detailCard {
  border-radius: 20px;
  position: sticky;
  top: 3rem;
  z-index: 2;
  background-color: #f5f1dc34;
}
.lgallfont {
  font-size: 48px;
  font-weight: normal;
  color: #00000056;
  text-align: center;
}
.smallnormalFont {
    font-size: 36px;
    font-weight: normal;
}
.large-button {
  width: 599px;
  height: 77px;
  border-radius: 20px;
  margin-left: 40px;
  font-size: 48px;
  font-weight: bold;
  color: #ffffff;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>

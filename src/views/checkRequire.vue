<script setup lang="ts"></script>

<template>
  <body>
    <container class="fluid">
      <v-card class="lgallfont borderradius" style="width: 75%; height: 80vh;align-items: center;border-radius: 20px; background-color: #FFFBF5; margin-top: 0.5%; margin-left: 13%;" 
              elevation="5">
        <div class="headFont" style="margin-left: 5%; margin-top: 4%;">
          รายละเอียดบัตร
        </div>
        <v-row>
          <v-col cols="12" lg="4" class="lgallfont"
            ><v-img src="../src/images/Ticket/QrCode.png" width="80%" style="margin-left: 15%; margin-top: 5%;"></v-img
          ></v-col>
          <v-col >
            <div style="margin-top: 1%;">
              <v-row class="pt-6">
                <v-col cols="12" lg="3" class="lgallfont"
                  ><h5 class="ml-4">ชื่อบัตร</h5></v-col
                >
                <v-col cols="12" lg="3" class="lgallfont" style="margin-left: 13%;"><h5>-</h5></v-col>
                
              </v-row>
              <v-row class="pt-6">
                <v-col cols="12" lg="3" class="lgallfont"
                  ><h5 class="ml-4">ชื่อโปรโมชั่น</h5></v-col
                >
                <v-col cols="12" lg="3" class="lgallfont" style="margin-left: 13%;"><h5>-</h5></v-col>
              </v-row>
              <v-row class="pt-6">
                <v-col cols="12" lg="4" class="lgallfont"
                  ><h5 class="ml-4">วันที่เข้าสวนน้ำ</h5></v-col
                >
                <v-col cols="12" lg="4" class="lgallfont"><h5 class="ml-8" style="margin-left: 13%;">-</h5></v-col>
              </v-row>
              <v-row class="pt-6 mt-6">
                <v-col cols="12" lg="6" class="lgallfont"
                  ><h5 class="ml-4">ระยะเวลาที่เหลือของตั๋ว</h5></v-col
                >
                <v-col cols="12" lg="4" class="lgallfont"><h5 class="ml-8" style="margin-left: 13%;">-</h5></v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </container>
  </body>
</template>

<style scoped>
body {
  background-image: url("../images/Event/WallPaper.jpg");
  background-size: cover;
  width: 100vw;
  height: 89vh;
  margin-top: 80px;
  padding: 25px;
  font-family: 'Kanit', 'sans-serif';
}
.borderradius {
  border-radius: 20px;
  z-index: 0;
}
.no-padding {
  padding: 0;
}
.smallnormalFont {
  font-size: 36px;
  font-weight: normal;
  color: #ffffff;
}
.btn-right {
  justify-content: flex-end;
  display: flex;
}
.headFont {
  font-size: 60px;
  font-weight: normal;
  color: #000000;
}
.lgallfont {
  font-size: 35px;
  font-weight: normal;
  color: #000000;
}
.activeTabs {
  border-radius: 20px;
  position: sticky;
  top: 3rem;
  z-index: 2;
}
.large-button1 {
  width: 201px;
  height: 77px;
  border-radius: 20px;
  margin: 20px;
  font-size: 36px;
  font-weight: normal;
  background-color: #2b6f78;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.large-button2 {
  width: 201px;
  height: 77px;
  border-radius: 20px;
  margin: 20px;
  font-size: 36px;
  font-weight: normal;
  background-color: #3fa956;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.detailCard {
  background-color: #F8F8F8;
  z-index: 1;
}
</style>

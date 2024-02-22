<script setup lang="ts"></script>

<template>
  <body>
    <container class="fluid">
      <v-card class="lgallfont borderradius">
        <div style="margin: 0px 0px 0px 40px" class="headFont">
          รายละเอียดบัตร
        </div>
        <v-row>
          <v-col cols="12" lg="3" class="lgallfont"
            ><v-img src="../src/images/Ticket/QrCode.png" width="100%"></v-img
          ></v-col>
          <v-col class="mt-6 pt-6">
            <v-card class="detailCard">
              <v-row class="pt-6">
                <v-col cols="12" lg="2" class="lgallfont"
                  ><h5 class="ml-8">ชื่อบัตร</h5></v-col
                >
                <v-col cols="12" lg="2" class="lgallfont"><h5>-</h5></v-col>
                <v-col cols="12" lg="2" class="lgallfont"
                  ><h5 class="ml-8">ชื่อโปรโมชั่น</h5></v-col
                >
                <v-col cols="12" lg="2" class="lgallfont"><h5>-</h5></v-col>
              </v-row>
              <v-row class="pt-6 mt-6">
                <v-col cols="12" lg="4" class="lgallfont"
                  ><h5 class="ml-8">วันที่เข้าสวนน้ำ</h5></v-col
                >
                <v-col cols="12" lg="4" class="lgallfont"><h5 class="ml-8">-</h5></v-col>
              </v-row>
              <v-row class="pt-6 mt-6">
                <v-col cols="12" lg="4" class="lgallfont"
                  ><h5 class="ml-8">ระยะเวลาที่เหลือของตั๋ว</h5></v-col
                >
                <v-col cols="12" lg="4" class="lgallfont"><h5 class="ml-8">-</h5></v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-divider class="border-opacity-100"></v-divider>
        <v-row>
          <v-col cols="12" lg="5"
            ><RouterLink to="/CheckRequire2">
              <v-btn class="large-button1"
                ><div class="smallnormalFont">Scan</div></v-btn
              ></RouterLink>
          </v-col>
          <v-col cols="12" lg="7" class="btn-right"
            >
              <v-btn class="large-button2"
                ><div class="smallnormalFont">อนุญาต</div></v-btn
              >
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
  height: 91.2vh;
  margin-top: 80px;
  padding: 25px;
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
  font-size: 64px;
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
  border-radius: 35px;
  margin: 20px;
  font-size: 36px;
  font-weight: normal;
  background-color: #2b6f78;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.large-button2 {
  width: 201px;
  height: 77px;
  border-radius: 35px;
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

<script setup lang="ts">
</script>

<template>
  <div class="d-flex align-center flex-column" style="font-family: 'Kanit', 'sans-serif';">
    <v-card class="borderradius" width="620" height="750">
      <h1 class="text-center bignormalFont">ชำระเสร็จสิ้น</h1>
      <div class="d-flex align-center flex-column">
        <v-card class="mt-3 invcard" width="500" height="550">
          <div class="d-flex align-center justify-space-around">
            <v-avatar color="grey" size="70" rounded="10" class="mt-3">
              <v-img cover src="../src/images/Ticket/Icon.png"></v-img>
            </v-avatar>
          </div>
          <v-divider :thickness="3" class="border-opacity-50 mt-2"></v-divider>
          <div class="pt-2">
            <v-row class="pl-2">
              <v-col cols="12" sm="2">
                <h5 class="normalFont">Date : </h5>
              </v-col>
              <v-col cols="12" sm="4">
                <h5 class="normalFont">-</h5>
              </v-col>
              <v-col cols="12" sm="3">
                <h5 class="normalFont">Time : </h5>
              </v-col>
              <v-col cols="12" sm="3">
                <h5 class="normalFont">-</h5>
              </v-col>
            </v-row>
            <v-row class="pl-2">
              <v-col cols="12" sm="2">
                <h5 class="normalFont">Name : </h5>
              </v-col>
              <v-col cols="12" sm="4">
                <h5 class="normalFont">-</h5>
              </v-col>
              <v-col cols="12" sm="3">
                <h5 class="normalFont">รูปแบบการจ่าย :</h5>
              </v-col>
              <v-col cols="12" sm="3">
                <h5 class="normalFont">-</h5>
              </v-col>
              <v-col>
                <h5 class="text-center headnormalFont">Queue #15</h5>
              </v-col>
              <v-divider :thickness="3" class="border-opacity-50 mt-2"></v-divider>
            </v-row>
          </div>
          <div class="pt-2">
            <v-row class="pl-2">
              <v-col cols="12" sm="12" class="pt-6">
                <h5 class="normalFont">โปรหรรษาคลายร้อน</h5>
              </v-col>
              <v-col cols="12" sm="5" class="pl-9">
                <h5 class="normalFont">บัตรเข้าสวนน้ำแบบเต็มวัน</h5>
              </v-col>
              <v-col cols="12" sm="2" class="pl-6">
                <h5 class="normalFont">1</h5>
              </v-col>
              <v-col cols="12" sm="3" class="pl-12">
                <h5 class="normalFont">699.00</h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">THB</h5>
              </v-col>
              <v-divider :thickness="3" class="border-opacity-50 mt-9"></v-divider>
            </v-row>
          </div>
          <div class="pt-2">
            <v-row class="pl-2 mt-2">
              <v-col cols="12" sm="2">
                <h5 class="normalFont">รวม : </h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">699.00</h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">THB</h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">ได้รับ : </h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">599.00</h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">THB</h5>
              </v-col>
            </v-row>
            <v-row class="pl-2 mt-2">
              <v-col cols="12" sm="2">
                <h5 class="normalFont">ส่วนลด : </h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">100.00</h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">THB</h5>
              </v-col>
            </v-row>
            <v-row class="pl-2 mt-2">
              <v-col cols="12" sm="2">
                <h5 class="normalFont">รวมสุทธิ : </h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">599.00</h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">THB</h5>
              </v-col>
              <v-divider :thickness="3" class="border-opacity-50 mt-2"></v-divider>
            </v-row>
          </div>
          <div class="pt-5">
            <v-row>
              <v-col>
                <h5 class="text-center btmnormalFont ">Thank you, Please come again.</h5>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </div>
      <v-row class="pt-7">
        <v-col cols="12" sm="7">
        </v-col>
        <v-col cols="12" sm="5">
          <div class="btn-right">
            <RouterLink to="/BuyTicket">
              <v-btn class="large-button1 btnnormalFont mb-6 pb-6">ตกลง</v-btn>
            </RouterLink>
          </div>
        </v-col>
      </v-row>

    </v-card>
  </div>

</template>

<style scoped>
.invcard {
  background-color: #D9D9D9;
}

.borderradius {
  border-radius: 20px;
}

body {
  background-image: url('../images/Event/WallPaper.jpg');
  background-size: cover;
  width: 100vw;
  height: 91.2vh;
  margin-top: 80px;
  padding: 25px;

}

.large-button1 {
  width: 187px;
  height: 56px;
  border-radius: 20px;
  background-color: #A3D0A2;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.btnnormalFont {
  font-size: 38px;
  font-weight: bold;
  color: #000000;
}

.bignormalFont {
  font-size: 60px;
  font-weight: normal;
  color: #000000;
}

.bignormalFont {
  font-size: 60px;
  font-weight: normal;
  color: #000000;
}

.normalFont {
  font-size: 13px;
  font-weight: normal;
  color: #000000;
}

.headnormalFont {
  font-size: 17px;
  font-weight: normal;
  color: #000000;
}

.btmnormalFont {
  font-size: 23px;
  font-weight: normal;
  color: #000000;
}
</style>

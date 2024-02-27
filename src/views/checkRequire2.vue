<script setup lang="ts">
import { mdiClose, mdiCheckCircleOutline } from '@mdi/js';
</script>

<template>
  <body style="margin-top: 80px; width: 100vw; height: 91.2vh;">
    <container class="fluid">
      <v-card class="lgallfont borderradius">
        <div style="margin: 0px 0px 0px 40px" class="headFont">
          รายละเอียดบัตร
        </div>
        <v-row>
          <v-col cols="12" lg="3" class="lgallfont"><v-img src="../src/images/Ticket/QrCode.png"
              width="100%"></v-img></v-col>
          <v-col class="mt-6 pt-6">
            <div>
              <v-row class="pt-6">
                <v-col cols="12" lg="2" class="lgallfont">
                  <h5 class="ml-8">ชื่อบัตร</h5>
                </v-col>
                <v-col cols="12" lg="2" class="lgallfont">
                  <h5>บัตรเด็ก</h5>
                </v-col>
                <v-col cols="12" lg="2" class="lgallfont">
                  <h5 class="ml-8">ชื่อโปรโมชั่น</h5>
                </v-col>
                <v-col cols="12" lg="4" class="lgallfont">
                  <h5>หรรษาคลายร้อน</h5>
                </v-col>
              </v-row>
              <v-row class="pt-6 mt-6">
                <v-col cols="12" lg="4" class="lgallfont">
                  <h5 class="ml-8">วันที่เข้าสวนน้ำ</h5>
                </v-col>
                <v-col cols="12" lg="4" class="lgallfont">
                  <h5 class="ml-8">28 Jan, 2024</h5>
                </v-col>
              </v-row>
              <v-row class="pt-6 mt-6">
                <v-col cols="12" lg="4" class="lgallfont">
                  <h5 class="ml-8">ระยะเวลาที่เหลือของตั๋ว</h5>
                </v-col>
                <v-col cols="12" lg="4" class="lgallfont">
                  <h5 class="ml-8">4 ชั่วโมง</h5>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>

        <v-divider class="border-opacity-100"></v-divider>
        <v-row>
          <v-col cols="12" lg="5">
            <RouterLink to="/CheckRequire2">
              <v-btn class="large-button1">
                <div class="smallnormalFont">Scan</div>
              </v-btn>
            </RouterLink>
          </v-col>
          <v-col cols="12" lg="7" class="btn-right">
            <v-dialog transition="dialog-bottom-transition" width="800px">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn class="large-button2 smallnormalFont" v-bind="activatorProps" text="อนุญาต"></v-btn>
              </template>
              <template v-slot:default="{ isActive }">
                <v-card >
                  <div class="Right_btn">
                    <RouterLink to="/CheckRequire">
                      <v-btn :icon="mdiClose" variant="text" @click="isActive.value = false"></v-btn>
                    </RouterLink>
                  </div>
                  <v-card>
                    <v-row>
                      <v-col cols="12" sm="3">
                        <v-icon color="success" :icon="mdiCheckCircleOutline" size="194"></v-icon>
                      </v-col>
                      <v-col cols="12" sm="9" class="mt-4">
                        <div class="dialogFont">ยืนยันเสร็จสิ้น</div>
                      </v-col>
                    </v-row> 
                  </v-card>
                </v-card>
              </template>
            </v-dialog>
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
  padding: 25px;
  font-family: 'Kanit', sans-serif;
}

.Right_btn {
  display: flex;
  justify-content: flex-end;
}

.borderradius {
  border-radius: 20px;
}

.no-padding {
  padding: 0;
}

.dialogFont {
  font-size: 96px;
  font-weight: lighter;
  color: black;
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
  border-radius: 25px;
  margin: 20px;
  font-size: 36px;
  font-weight: normal;
  background-color: #3fa956;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.detailCard {
  background-color: #f8f8f8;
  z-index: 1;
}

.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  padding-top: 100px;
  /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
<script lang="ts">
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

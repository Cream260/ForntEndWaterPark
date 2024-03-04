<script setup lang="ts">
import { useCustomerStore } from "@/stores/customer";
import { useOrderStore } from "@/stores/order.store";
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
const orderStore = useOrderStore();
const customerStore = useCustomerStore();

onMounted(async () => {
  await orderStore.getOrder;
  await customerStore.getCustomer;
})
</script>

<template>
  <body>
    <container class="fluid">
      <v-card class="activeTabs lgallfont">
        <div style="font-size: 40px; margin-top: 1%; margin-bottom: 1%;">
          รายละเอียดของคุณ
        </div>
        
        <v-card class="pa-4 ma-4 detailCard">
          <v-row>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>ชื่อ</h5>
            </v-col>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>{{ customerStore.currentUser.name }}</h5>
            </v-col>
            <v-divider class="border-opacity-50" vertical></v-divider>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>ชื่อบัตร</h5>
            </v-col>
            <v-col cols="12" lg="2" class="text-left smallnormalFont">
              <h5>??</h5>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>อีเมลล์</h5>
            </v-col>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>{{ customerStore.currentUser.email }}</h5>
            </v-col>
            <v-divider class="border-opacity-50" vertical></v-divider>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>โปรโมชั่น</h5>
            </v-col>
            <v-col cols="12" lg="2" class="text-left smallnormalFont">
              <h5>-</h5>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>เบอร์โทรศัพท์</h5>
            </v-col>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>{{ customerStore.currentUser.tel }}</h5>
            </v-col>
            <v-divider class="border-opacity-50" vertical></v-divider>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>ราคา</h5>
            </v-col>
            <v-col cols="12" lg="2" class="text-left smallnormalFont">
              <h5>?? THB x {{ orderStore.currentOrder.qty }}</h5>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>วันที่มาใช้บริการ</h5>
            </v-col>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>{{ orderStore.currentOrder.startDate }}</h5>
            </v-col>
            <v-divider class="border-opacity-50" vertical></v-divider>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>ส่วนลด</h5>
            </v-col>
            <v-col cols="12" lg="2" class="text-left smallnormalFont">
              <h5>{{ orderStore.currentOrder.totalPrice }} THB</h5>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>บัตรหมดอายุ</h5>
            </v-col>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>{{ orderStore.currentOrder.expDate }}</h5>
            </v-col>
            <v-divider class="border-opacity-50" vertical></v-divider>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>ราคาสุทธิ</h5>
            </v-col>
            <v-col cols="12" lg="2" class="text-left smallnormalFont">
              <h5>{{ orderStore.currentOrder.netPrice }} THB</h5>
            </v-col>
          </v-row>
        </v-card>
        <v-row>
          <v-col>
            <h1 class="lgallfont">ช่องทางการจ่ายเงิน</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="4" class="text-left">
            <RouterLink to="/CreditCard">
              <v-btn class="large-button1">
                <div class="smallnormalFont">Credit/Debit Card</div>
              </v-btn>
            </RouterLink>
          </v-col>
          <v-col cols="12" lg="4" class="text-left">
            <RouterLink to="/TrueWallet">
              <v-btn class="large-button2">
                <div class="smallnormalFont">True Wallet</div>
              </v-btn>
            </RouterLink>
          </v-col>
          <v-col cols="12" lg="4" class="text-left">
            <RouterLink to="/PromptPay">
              <v-btn class="large-button3">
                <div class="smallnormalFont">Prompt Pay</div>
              </v-btn>
            </RouterLink>
          </v-col>
        </v-row>
      </v-card>
    </container>
  </body>
</template>

<style scoped>
body {
  background-image: url('../images/Event/WallPaper.jpg');
  background-size: cover;
  width: 100vw;
  height: 89vh;
  margin-top: 80px;
  padding: 25px;
  font-family: 'Kanit', 'sans-serif';
}

.activeTabs {
  border-radius: 20px;
  position: sticky;
  z-index: 2;
  width: 70%; 
  height: 80vh;
  margin-left: 15%;
  margin-top: 0.5%;
}

.detailCard {
  border-radius: 20px;
  position: sticky;
  top: 1rem;
  z-index: 2;
  background-color: #f5f1dc34;
}

.lgallfont {
  font-size: 40px;
  font-weight: normal;
  color: #00000056;
  text-align: center;
  
}

.smallnormalFont {
  font-size: 23px;
  font-weight: normal;
  color: #000000;
}

.large-button1 {
  width: 280px;
  height: 80px;
  border-radius: 35px;
  margin-left: 10px;
  font-size: 30px;
  font-weight: normal;
  background-color: #9eb8d9;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
}

.large-button2 {
  width: 280px;
  height: 80px;
  border-radius: 35px;
  margin-left: 10px;
  font-size: 36px;
  font-weight: normal;
  background-color: #eec759;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.large-button3 {
  width: 280px;
  height: 80px;
  border-radius: 35px;
  margin-left: 10px;
  font-size: 36px;
  font-weight: normal;
  background-color: #e7bcde;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
}</style>

<script setup lang="ts">
import { useCustomerStore } from "@/stores/customer";
import { useOrderStore } from "@/stores/order.store";
import { useManageTime } from "@/stores/manageDate"
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
const orderStore = useOrderStore();
const customerStore = useCustomerStore();
const manageTimeStore = useManageTime();
const date = (index: string) => {
  let dd = new Date(index);
  let date = {
    date: "",
    mouth: "",
    year: "",
    hour: "",
    minute: "",
    second: "",
  };
  date.year = dd.getFullYear() + "";
  date.date = dd.getDate() + "";
  date.mouth = dd.getMonth() + "";
  date.minute = "" + dd.getMinutes();
  date.hour = "" + dd.getHours();
  date.second = "" + dd.getSeconds();
  if (dd.getDate() < 10) {
    date.date = "0" + dd.getDate();
  }
  if (dd.getMonth() < 10) {
    date.mouth = "0" + dd.getMonth();
  }
  if (dd.getHours() < 10) {
    date.hour = "0" + dd.getHours();
  }
  if (dd.getMinutes() < 10) {
    date.minute = "0" + dd.getHours();
  }
  if (dd.getSeconds() < 10) {
    date.second = dd.getSeconds() + "0";
  }
  if (dd.getMonth() < 10) {
    date.mouth = "0" + dd.getMonth();
  }
  if (dd.getHours() < 10) {
    date.hour = "0" + dd.getHours();
  }
  if (dd.getMinutes() < 10) {
    date.minute = "0" + dd.getHours();
  }
  if (dd.getSeconds() < 10) {
    date.second = dd.getSeconds() + "0";
  }
  return date;
};
onMounted(async () => {
  orderStore.currentOrder.expDate = new Date();
  orderStore.currentOrder.startDate = new Date();
  orderStore.getOrder();
  await orderStore.getOrder;
  await customerStore.getCustomer;
})
</script>

<template>

  <body>
    <container class="fluid">
      <v-card class="activeTabs">
        <div class ="fontheader" style="font-size: 40px; margin-top: 1%; margin-bottom: 1%;">
          รายละเอียดของคุณ
        </div>
        <v-row>
          <v-col cols="12" lg="6">
            <v-card class="pa-4 ml-4 detailCard">
              <v-row>
                <v-col cols="12" lg="4" class="text-left">
                  <h5 class="smallnormalFont">ชื่อ</h5>
                </v-col>
                <v-col cols="12" lg="8" class="text-left">
                  <h5 class="smallnormalFont">{{ customerStore.currentUser.name }}</h5>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="4" class="text-left">
                  <h5 class="smallnormalFont">อีเมลล์</h5>
                </v-col>
                <v-col cols="12" lg="8" class="text-left">
                  <h5 class="smallnormalFont">{{ customerStore.currentUser.email }}</h5>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="4" class="text-left">
                  <h5 class="smallnormalFont">เบอร์โทรศัพท์</h5>
                </v-col>
                <v-col cols="12" lg="8" class="text-left">
                  <h5 class="smallnormalFont">{{ customerStore.currentUser.tel }}</h5>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="4" class="text-left">
                  <h5 class="smallnormalFont">วันที่มาใช้บริการ</h5>
                </v-col>
                <v-col cols="12" lg="8" class="text-left">
                  <h5 class="smallnormalFont">{{ date(orderStore.currentOrder.startDate + "").date + " "
                    + manageTimeStore.month[new Date(orderStore.currentOrder.startDate + "").getMonth()] + " , " + new
                      Date(orderStore.currentOrder.startDate + "").getFullYear() }}</h5>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="4" class="text-left">
                  <h5 class="smallnormalFont">บัตรหมดอายุ</h5>
                </v-col>
                <v-col cols="12" lg="8" class="text-left">
                  <h5 class="smallnormalFont">{{ date(orderStore.currentOrder.startDate + "").date + " "
                    + manageTimeStore.month[new Date(orderStore.currentOrder.startDate + "").getMonth()] + " , " + new
                      Date(orderStore.currentOrder.startDate + "").getFullYear() }}</h5>
                </v-col>
                <v-col cols="12" lg="12">
                  <v-divider class="border-opacity-50 mt-8"></v-divider>
                </v-col>
                <v-col>
                  <h1 class="lgallfont mt-4">ช่องทางการจ่ายเงิน</h1>
                </v-col>
                <v-row class="mt-6">
                  <v-col cols="12" lg="4">
                    <RouterLink to="/CreditCard">
                      <v-btn class="large-button1">
                        <div class="smallbtnnormalFont">Credit Card</div>
                      </v-btn>
                    </RouterLink>
                  </v-col>
                  <v-col cols="12" lg="4">
                    <RouterLink to="/TrueWallet">
                      <v-btn class="large-button2">
                        <div class="smallbtnnormalFont">True Wallet</div>
                      </v-btn>
                    </RouterLink>
                  </v-col>
                  <v-col cols="12" lg="4">
                    <RouterLink to="/PromptPay">
                      <v-btn class="large-button3">
                        <div class="smallbtnnormalFont">Prompt Pay</div>
                      </v-btn>
                    </RouterLink>
                  </v-col>
                </v-row>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12" lg="6">
            <v-card class="pa-4 mr-4 detailCard scroll-container">
              <v-row>
                <v-col cols="12" lg="4" class="text-left">
                  <h5 class="smallnormalFont">ชื่อบัตร</h5>
                </v-col>
                <v-col cols="12" lg="8" class="text-left">
                  <h5 class="smallnormalFont">??</h5>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="4" class="text-left">
                  <h5 class="smallnormalFont">ประเภทบัตร</h5>
                </v-col>
                <v-col cols="12" lg="8" class="text-left">
                  <h5 class="smallnormalFont">??</h5>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="4" class="text-left">
                  <h5 class="smallnormalFont">ราคา</h5>
                </v-col>
                <v-col cols="12" lg="8" class="text-left">
                  <h5 class="smallnormalFont">{{ orderStore.currentOrder.netPrice }}</h5>
                </v-col>
              </v-row>
            </v-card>
            <v-row class="pt-4">
                <v-col>
                  <v-card class="pa-4 mr-4" style="background-color: #f5f1dc34; height: 204px;">
                    <v-row>
                      <v-col cols="12" lg="4" class="text-left">
                        <h5 class="fontSum">โปรโมชั่น</h5>
                      </v-col>
                      <v-col cols="12" lg="8" class="text-right">
                        <h5 class="fontSum">--</h5>
                      </v-col>
                      <v-col cols="12" lg="4" class="text-left">
                        <h5 class="fontSum">ส่วนลด</h5>
                      </v-col>
                      <v-col cols="12" lg="8" class="text-right">
                        <h5 class="fontSum">{{ orderStore.currentOrder.discount }} THB</h5>
                      </v-col>
                      <v-col cols="12" lg="4" class="text-left">
                        <h5 class="fontSum">ราคาสุทธิ</h5>
                      </v-col>
                      <v-col cols="12" lg="8" class="text-right">
                        <h5 class="fontSum">{{ orderStore.currentOrder.netPrice }} THB</h5>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
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
  height: 620px;
  position: sticky;
  top: 1rem;
  z-index: 2;
  background-color: #f5f1dc34;
}

.lgallfont {
  font-size: 32px;
  font-weight: normal;
  color: #21292e82;
  text-align: center;
}

.fontheader {
  font-size: 48px;
  font-weight: normal;
  color: #00000056;
  text-align: center;
}

.fontSum {
  font-size: 30px;
  font-weight: lighter;
  color: #000000;
}

.smallbtnnormalFont {
  font-size: 20px;
  font-weight: normal;
  color: #000000;
}

.smallnormalFont {
  font-size: 24px;
  font-weight: normal;
  color: #000000;
}

.large-button1 {
  width: 180px;
  height: 80px;
  border-radius: 35px;

  font-size: 30px;
  font-weight: normal;
  background-color: #9eb8d9;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

.large-button2 {
  width: 180px;
  height: 80px;
  border-radius: 35px;

  font-size: 36px;
  font-weight: normal;
  background-color: #eec759;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.large-button3 {
  width: 180px;
  height: 80px;
  border-radius: 35px;

  font-size: 36px;
  font-weight: normal;
  background-color: #e7bcde;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.scroll-container {
  height: 400px;
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
</style>

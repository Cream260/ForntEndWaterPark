<script setup lang="ts">
import { useCustomerStore } from "@/stores/customer";
import { useOrderStore } from "@/stores/order.store";
import { useManageTime } from "@/stores/manageDate"
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/user.store";
const orderStore = useOrderStore();
const customerStore = useCustomerStore();
const manageTimeStore = useManageTime();
const userStore = useUserStore();

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
onMounted(() => {
  orderStore.currentOrder.expDate = new Date();
  orderStore.currentOrder.startDate = new Date();
  orderStore.getOrder();
});
console.log(orderStore.event_);

orderStore.findQrById(orderStore.currentOrder.id!);
</script>

<template>
  <div class="d-flex align-center flex-column " style="font-family: 'Kanit', 'sans-serif';">
    <v-card class="borderradius" width="620" height="700">
      <h1 class="text-center bignormalFont ">ชำระเสร็จสิ้น</h1>
      <div class="d-flex align-center flex-column">
        <v-card class=" invcard" width="500" height="600">
          <div class="d-flex align-center justify-space-around">
            <v-avatar color="grey" size="70" rounded="10" class="mt-2">
              <v-img cover src="../src/images/Ticket/Icon.png"></v-img>
            </v-avatar>
          </div>
          <v-divider :thickness="2" class="border-opacity-50 mt-1"></v-divider>
          <div class="pt-2">
            <v-row class="pl-2">
              <v-col cols="12" sm="2">
                <h5 class="normalFont">Date : </h5>
              </v-col>
              <v-col cols="12" sm="4">
                <h5 class="normalFont">{{ date(orderStore.currentOrder.startDate + "").date + " - "
            + manageTimeStore.monthNum[new Date(orderStore.currentOrder.startDate + "").getMonth()] + " - " + new
              Date(orderStore.currentOrder.startDate + "").getFullYear() }}</h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">Time : </h5>
              </v-col>
              <v-col cols="12" sm="4">
                <h5 class="normalFont">{{ date(orderStore.currentOrder.startDate + "").hour + " : "
            + date(orderStore.currentOrder.startDate + "").minute + " : " +
            date(orderStore.currentOrder.startDate + "").second }}</h5>
              </v-col>
            </v-row>
            <v-row class="pl-2">
              <v-col cols="12" sm="2">
                <h5 class="normalFont">Name : </h5>
              </v-col>
              <v-col cols="12" sm="4">
                <h5 class="normalFont">{{ userStore.currentUser.name }}</h5>
              </v-col>
              <v-col cols="12" sm="3">
                <h5 class="normalFont">รูปแบบการจ่าย :</h5>
              </v-col>
              <v-col cols="12" sm="3">
                <h5 class="normalFont">{{ orderStore.currentOrder.payments }}</h5>
              </v-col><v-col>
                <h5 class="text-center headnormalFont">Queue # {{ orderStore.currentOrder.id }}</h5>
              </v-col>          
            </v-row>
          </div>
          <div class="pt-2 pb-1" >
            <v-row>
              <v-col v-if="orderStore.promo_">
              <v-divider :thickness="3" class="border-opacity-50 mt-1"></v-divider>
                <h5 class="normalFont pt-2">โปรโมชั่น {{ orderStore.promo_?.name}}</h5>
              </v-col>
              <v-divider :thickness="2" class="border-opacity-50 "></v-divider>
            </v-row>
          </div>
          
          <div class="pt-2"  v-if="orderStore.currentOrder.orderItems!.length > 0">
            <v-row class="pl-2" v-for="item of orderStore.currentOrder.orderItems" :key="item.id">
              <v-col cols="12" sm="5" >
                <h5 class="normalFont">{{ item.name }} ({{ item.type }})</h5>
              </v-col>
              <v-col cols="12" sm="2" class="pl-6">
                <h5 class="normalFont">{{ item.qty }}</h5>
              </v-col>
              <v-col cols="12" sm="3" class="pl-12 text-right">
                <h5 class="normalFont">{{ item.totalPrice }}</h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">THB</h5>
              </v-col>
            </v-row>
          </div>

          <div class="pt-2"  v-if="orderStore.event_">
            <v-row class="pl-2" >
              <v-col cols="12" sm="5" >
                <h5 class="normalFont">{{ orderStore.event_.name }}</h5>
              </v-col>
              <v-col cols="12" sm="2" class="pl-6">
                <h5 class="normalFont">{{ orderStore.currentOrder.qty }}</h5>
              </v-col>
              <v-col cols="12" sm="3" class="pl-12 text-right">
                <h5 class="normalFont">{{ orderStore.event_.price }}</h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">THB</h5>
              </v-col>
            </v-row>
          </div>

          <div class="pt-2"  v-if="orderStore.currentOrder.package?.id">
            <v-row class="pl-2">
              <v-col cols="12" sm="5" >
                <h5 class="normalFont">{{ orderStore.currentOrder.package.name }}</h5>
              </v-col>
              <v-col cols="12" sm="2" class="pl-6">
                <h5 class="normalFont">{{ orderStore.currentOrder.package.qty }}</h5>
              </v-col>
              <v-col cols="12" sm="3" class="pl-12 text-right">
                <h5 class="normalFont">{{ orderStore.currentOrder.package.price}}</h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">THB</h5>
              </v-col>
            </v-row>
          </div>
          
          <v-divider :thickness="2" class="border-opacity-50 mt-1"></v-divider>
          <div>
            <v-row class="pl-2 mt-2">
              <v-col cols="12" sm="2">
                <h5 class="normalFont">รวม : </h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">{{ orderStore.currentOrder.totalPrice }}</h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">THB</h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">ได้รับ : </h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">{{ orderStore.currentOrder.received }}</h5>
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
                <h5 class="normalFont">{{ orderStore.currentOrder.discount }}</h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">THB</h5>
              </v-col>

              <v-col cols="12" sm="2">
                <h5 class="normalFont">รวมสุทธิ : </h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">{{ orderStore.currentOrder.totalPrice - orderStore.currentOrder.discount }}</h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">THB</h5>
              </v-col>
            </v-row>
            <!-- <v-row class="pl-2 mt-2">
              <v-col cols="12" sm="2">
                <h5 class="normalFont">รวมสุทธิ : </h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">{{ orderStore.currentOrder.totalPrice - orderStore.currentOrder.discount }}</h5>
              </v-col>
              <v-col cols="12" sm="2">
                <h5 class="normalFont">THB</h5>
              </v-col>
              <v-divider :thickness="2" class="border-opacity-50 mt-1"></v-divider>
            </v-row> -->
          </div>
          <div class="pt-2">
            <v-row>
              <v-col>
                <h5 class="text-center btmnormalFont ">Thank you, Please come again.</h5>
              </v-col>
            </v-row>
          </div>
          <v-row>
              <v-col class="d-flex justify-center align-center">
                <v-img :src="orderStore.Qr" max-width="90" max-height="90"></v-img>
              </v-col>
            </v-row>
        </v-card>
      </div>
      <v-row class="pt-2">
        <v-col cols="12" sm="7">
        </v-col>
        <v-col cols="12" sm="5">
          <div class="btn-right">
            <RouterLink to="/BuyTicket">
              <v-btn class="large-button1 btnnormalFont" style="margin-left: 23%;" @click="orderStore.showDialog = false">ตกลง</v-btn>
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
  width: 120px;
  height: 35px;
  border-radius: 20px;
  background-color: #A3D0A2;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.btnnormalFont {
  font-size: 23px;
  font-weight: bold;
  color: #000000;
}


.bignormalFont {
  font-size: 30px;
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
  font-size: 17px;
  font-weight: normal;
  color: #000000;
}
</style>
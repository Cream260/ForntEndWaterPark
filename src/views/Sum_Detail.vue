
<script setup lang="ts">
import { useCustomerStore } from "@/stores/customer";
import { useOrderStore } from "@/stores/order.store";
import { useManageTime } from "@/stores/manageDate"
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import orderService from "@/components/services/order";
//get id from param
import { useRoute } from "vue-router";
import { useEventStore } from "@/stores/event.store";
import { id } from "vuetify/locale";
import order from "@/components/services/order";
import { useUserStore } from "@/stores/user.store";
import { useAuthStore } from "@/stores/auth";
import { useTicketStore } from "@/stores/ticket.store";
import { usePromotionStore } from "@/stores/promotion";
const route = useRoute();
const orderStore = useOrderStore();
const eventStore = useEventStore();
const customerStore = useCustomerStore();
const manageTimeStore = useManageTime();
const event_ = ref<Event>();
const userStore = useUserStore();
const authStore = useAuthStore();
const PromotionStore = usePromotionStore();

// const formatDate = (dateStr: string | number | Date) => {
//   console.log('Input date string:', dateStr);
//   const date = new Date(dateStr);
//   console.log('Parsed date:', date);
//   const formattedDate = date.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "numeric",
//     day: "numeric",
//   });
//   console.log('Formatted date:', formattedDate);
//   return formattedDate;
// }
const formatDate = (dateStr: string | number | Date) => {
  if (!dateStr) return ''; // Handle case where dateStr is undefined or null

  const date = new Date(dateStr);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-GB', options as Intl.DateTimeFormatOptions);
  return formattedDate;
}




onMounted(async () => {
  // 🥲
  authStore.getUserFromLocalStorage();
  orderStore.currentOrder.expDate = new Date();
  orderStore.currentOrder.startDate = new Date();
  orderStore.getOrder();
  await orderStore.getOrder;
  await customerStore.getCustomer;
  const paramValue = route.params.id;
  //getOrderById
  console.log("id", paramValue);
  if(orderStore.currentOrder) {
  const promoId = orderService.getPromotionByOrder(parseInt(paramValue.toString()));
  orderStore.findPromotionById((await promoId).data);
  console.log((await promoId).data);
  }

  // const res = await orderStore.getOrderById_(parseInt(paramValue.toString()));

  // await eventStore.getEventById(res?.data.event!.id);
  // await orderStore.getOrderById(res?.data.event!.id);
})


function updatePayment(payment: string) {
  const orderId = route.params.id;
  // Your logic to handle credit card update with the orderId
  console.log("Updating credit for order with ID:", orderId);
  // You can now use the orderId as needed in this method
  orderStore.updatePayment(parseInt(orderId.toString()), payment);
}


</script>

<template>

  <body>
    <!-- {{ orderStore.currentOrder.expDate }} -->
    <container class="fluid">
      <v-card class="activeTabs">
        <div class="fontheader mt-2" style="font-size: 40px;">
          รายละเอียดของคุณ
        </div>
        <!-- <<<<<<< HEAD
        
        <v-card class="pa-4 ma-4 detailCard">

          <v-row>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>ชื่อ</h5>
            </v-col>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>{{ userStore.currentUser.name }}</h5>
            </v-col>
            
            <v-divider class="border-opacity-50" vertical></v-divider>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>ชื่อบัตร</h5>
            </v-col>
            <v-col cols="12" lg="2" class="text-left smallnormalFont">
              <h5>{{ eventStore.currentEvent.name }}</h5>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>อีเมลล์</h5>
            </v-col>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>{{ userStore.currentUser.email}}</h5>
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
              <h5>{{ userStore.currentUser.tel }}</h5>
            </v-col>
            <v-divider class="border-opacity-50" vertical></v-divider>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>ราคา</h5>
            </v-col>
            <v-col cols="12" lg="2" class="text-left smallnormalFont">
              <h5>{{eventStore.currentEvent.price }} THB x {{ orderStore.currentOrder.qty }}</h5>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5>วันที่มาใช้บริการ</h5>
            </v-col>
            <v-col cols="12" lg="3" class="text-left smallnormalFont">
              <h5 class="smallnormalFont">{{ orderStore.currentOrder.startDate ? formatDate(orderStore.currentOrder.startDate) : 'N/A' }}</h5>
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
              <h5 class="smallnormalFont">{{ orderStore.currentOrder.expDate ? formatDate(orderStore.currentOrder.expDate) : 'N/A' }}</h5>
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
          <v-col cols="12" lg="6">
            <v-card class="pa-4 ml-4 detailCard">
              <v-row>
                <v-col cols="12" lg="4" class="text-left">
                  <h5 class="smallnormalFont">ชื่อ</h5>
                </v-col>
                <v-col cols="12" lg="8" class="text-left">
                  <h5 class="smallnormalFont">{{ userStore.currentUser.name }}</h5>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="4" class="text-left">
                  <h5 class="smallnormalFont">อีเมลล์</h5>
                </v-col>
                <v-col cols="12" lg="8" class="text-left">
                  <h5 class="smallnormalFont">{{ userStore.currentUser.email }}</h5>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="4" class="text-left">
                  <h5 class="smallnormalFont">เบอร์โทรศัพท์</h5>
                </v-col>
                <v-col cols="12" lg="8" class="text-left">
                  <h5 class="smallnormalFont">{{ userStore.currentUser.tel }}</h5>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="4" class="text-left">
                  <h5 class="smallnormalFont">วันที่มาใช้บริการ</h5>
                </v-col>
                <v-col cols="12" lg="8" class="text-left">
                  <h5 class="smallnormalFont">{{ orderStore.currentOrder.startDate ? formatDate(orderStore.currentOrder.startDate) : 'N/A' }}</h5>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="4" class="text-left">
                  <h5 class="smallnormalFont">บัตรหมดอายุ</h5>
                </v-col>
                <v-col cols="12" lg="8" class="text-left">
                  <h5 class="smallnormalFont">{{ orderStore.currentOrder.expDate ? formatDate(orderStore.currentOrder.expDate) : 'N/A' }}</h5>
                </v-col>
                <v-col cols="12" lg="12">
                  <v-divider class="border-opacity-50 mt-8"></v-divider>
                </v-col>
                <v-col>
                  <h1 class="lgallfont mt-4">ช่องทางการจ่ายเงิน</h1>
                </v-col>
                <v-row class="mt-6">
                  <v-col cols="12" lg="4">
======= -->
        <v-row>
          <v-col>


            <div class="card-container" style="margin-left: 8%;">
              <div class="customer-details">
                <div class="detail"><span class="label">ชื่อ</span>{{ userStore.currentUser.name }}</div>
                <div class="detail"><span class="label">อีเมลล์</span>{{ userStore.currentUser.email }}</div>
                <div class="detail"><span class="label">เบอร์โทรศัพท์</span>{{ userStore.currentUser.tel }}</div>
                <div class="detail"><span class="label">วันที่เข้าใช้บริการ</span>{{ orderStore.currentOrder.startDate ?
                  formatDate(orderStore.currentOrder.startDate) : 'N/A' }}</div>
                <div class="detail"><span class="label">บัตรหมดอายุ</span>{{ orderStore.currentOrder.expDate ?
                  formatDate(orderStore.currentOrder.expDate) : 'N/A' }}</div>
              </div>
              <br/>
              <hr class="divider" />
              <div class="payment-options">

                <div class="payment-section">
                  <h5 class="payment-title mt-8">ช่องทางการจ่ายเงิน</h5>
                  <div class="payment-options">
                    <RouterLink to="/CreditCard">
                      <button class="payment-btn ma-2" id="credit-card"
                        @click="updatePayment('Credit Card')">Credit/Debit Card</button>
                    </RouterLink>
                    <RouterLink to="/TrueWallet">
                      <button class="payment-btn ma-2" id="true-wallet" @click="updatePayment('True Wallet')">True
                        Wallet</button>
                    </RouterLink>
                    <RouterLink to="/PromptPay">
                      <button class="payment-btn ma-2" id="prompt-pay" @click="updatePayment('Prompt Pay')">Prompt
                        Pay</button>
                    </RouterLink>

                  </div>
                </div>
              </div>

            </div>
          </v-col>
          <v-col>
            <!-- <v-card> -->
              <div class="card-container2 scroll-container">
                <div class="customer-details" v-for="item of orderStore.currentOrder.orderItems" :key="item.id">
                  <div class="detail"><span class="label">ชื่อบัตร</span>{{ item.name }}</div>
                  <div class="detail"><span class="label">ประเภทบัตร</span>{{ item.type }}</div>
                  <div class="detail"><span class="label">จำนวน</span>{{ item.qty }} ใบ</div>
                  <hr class="divider" />
                </div>

                <div class="detail"><span class="label">โปรโมชั่น</span>{{ PromotionStore.getPromotion.name }}</div>

                <div class="detail"><span class="label">ราคา</span>{{ orderStore.currentOrder.totalPrice.toLocaleString() }}</div>
                <div class="detail"><span class="label">ส่วนลด</span>{{ orderStore.currentOrder.discount.toLocaleString() }}</div>


              </div>
              <div class="detail" style="font-size: 45px;"><span class="label ml-2 mt-2">ราคาสุทธิ</span>{{
                  orderStore.currentOrder.netPrice.toLocaleString() }} บาท</div>
            <!-- </v-card> -->
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

.payment-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
  text-align: center;
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
  height: 270px;
  position: sticky;

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

.card-container {
  background-color: #FFFBF5;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 30vw;
  height: 65vh;
  padding: 20px;
  margin: 2%;
  font-family: 'Kanit', sans-serif;
}

.card-container2 {
  background-color: #FFFBF5;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 30vw;
  height: 48vh;
  padding: 20px;
  margin: 2%;
  font-family: 'Kanit', sans-serif;
}

.customer-details {
  margin-bottom: 20px;
}

.detail {
  margin-bottom: 5px;
  line-height: 1.6;
}

.label {
  font-weight: bold;
  margin-right: 28px;
}

.divider {
  border: 0;
  height: 1px;
  background-color: #333;
  margin: 20px 0;
}

.payment-options {
  display: flex;
  justify-content: space-evenly;
}

.payment-btn {
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  color: #FFF;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#credit-card {
  background-color: #6cace4;
}

#true-wallet {
  background-color: #ffcd3c;
}

#prompt-pay {
  background-color: #c25bff;
}
</style>

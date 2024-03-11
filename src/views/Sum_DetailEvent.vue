<script setup lang="ts">
import { useCustomerStore } from "@/stores/customer";
import { useOrderStore } from "@/stores/order.store";
import { useManageTime } from "@/stores/manageDate"
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
//get id from param
import { useRoute } from "vue-router";
import { useEventStore } from "@/stores/event.store";
import { id } from "vuetify/locale";
import order from "@/components/services/order";
import { useUserStore } from "@/stores/user.store";
import { useAuthStore } from "@/stores/auth";
import { useTicketStore } from "@/stores/ticket.store";
import { usePromotionStore } from "@/stores/promotion";
import router from "@/router";
const route = useRoute();
const orderStore = useOrderStore();
const eventStore = useEventStore();
const customerStore = useCustomerStore();
const manageTimeStore = useManageTime();
const event_  = ref<Event>();
const userStore = useUserStore();
const authStore = useAuthStore();


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
console.log(paramValue);
 await orderStore.getOrderById(parseInt(paramValue.toString()));
 const res = await orderStore.getOrderById_(parseInt(paramValue.toString()));

 await eventStore.getEventById(res?.data.event!.id);
})

function updatePayment(payment: string,routurname:string) {
  const orderId = route.params.id;
  // Your logic to handle credit card update with the orderId
  console.log("Updating credit for order with ID:", orderId);
  // You can now use the orderId as needed in this method
  orderStore.updatePayment(parseInt(orderId.toString()), payment);
  router.push('/'+ routurname +'/'+orderId)
}


</script>

<template>

  <body>
    <!-- {{ orderStore.currentOrder.expDate }} -->
    <container class="fluid">
      <v-card class="activeTabs">
        <div class ="fontheader mt-2" style="font-size: 40px;">
          รายละเอียดของคุณ
        </div>
        <v-row>
          <v-col>
            
            
            <div class="card-container" style="margin-left: 8%;">
              <div class="customer-details">
                <div class="detail"><span class="label">ชื่อ</span>{{ eventStore.currentEvent.name }}</div>
                <div class="detail"><span class="label">อีเมลล์</span>{{ eventStore.currentEvent.name }}</div>
                <div class="detail"><span class="label">เบอร์โทรศัพท์</span>{{ userStore.currentUser.tel }}</div>
                <div class="detail"><span class="label">วันที่เข้าใช้บริการ</span>{{ orderStore.currentOrder.startDate ? formatDate(orderStore.currentOrder.startDate) : 'N/A' }}</div>
                <div class="detail"><span class="label">บัตรหมดอายุ</span>{{ orderStore.currentOrder.expDate}}</div>
              </div>
              <hr class="divider"/>
              <div class="payment-options">
                
                <div class="payment-section">
                  <h5 class="payment-title mt-8">ช่องทางการจ่ายเงิน</h5>
                  <div class="payment-options">
                    <button class="payment-btn ma-2" id="credit-card"
                        @click="updatePayment('Credit Card','CreditCard')">Credit/Debit Card</button>
                      <button class="payment-btn ma-2" id="true-wallet" @click="updatePayment('True Wallet','TrueWallet')">True
                        Wallet</button>
                      <button class="payment-btn ma-2" id="prompt-pay" @click="updatePayment('Prompt Pay','PromptPay')">Prompt
                        Pay</button>
                    
                  </div>
                </div>
              </div>
                
              </div>
          </v-col>
          <v-col>
            
            <div class="card-container2">
              <div class="customer-details" >
                <div class="detail"><span class="label">ชื่อบัตร</span>{{ eventStore.currentEvent.name }}</div>
                <div class="detail"><span class="label">ประเภทบัตร</span>{{ eventStore.currentEvent.type }}</div>
                <div class="detail"><span class="label">โปรโมชั่น</span>{{usePromotionStore.name}}</div>
                <div class="detail"><span class="label">ราคา</span>{{ eventStore.currentEvent.price.toLocaleString() }}</div>
                <div class="detail"><span class="label">จำนวน</span>{{ orderStore.currentOrder.qty }} ใบ</div>
                <div class="detail"><span class="label">ส่วนลด</span>{{ orderStore.currentOrder.discount.toLocaleString() }}</div>
              </div>
            </div>
            <div class="detail" style="font-size: 45px;"><span class="label ml-2 mt-2">ราคาสุทธิ</span>{{
              orderStore.currentOrder.netPrice.toLocaleString() }} บาท</div>
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

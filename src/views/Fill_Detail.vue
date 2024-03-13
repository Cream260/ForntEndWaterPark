<script setup lang="ts">
import order from "@/components/services/order";
import router from "@/router";
import { useAuthStore } from "@/stores/auth";
import { useCustomerStore } from "@/stores/customer";
import { useOrderStore } from "@/stores/order.store";
import { useUserStore } from "@/stores/user.store";
import type Order from "@/type/order";
import { computed, onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
const orderStore = useOrderStore();
const customerStore = useCustomerStore();
const authStore = useAuthStore();
const userStore = useUserStore();

const minDate = ref<string>(new Date().toISOString().split("T")[0]);
const selectedDate = ref<string>(minDate.value);

// Compute expDate based on selectedDate
const expDate = computed<Date>(() => {
    const selectedDateObject = new Date(selectedDate.value);
    const nextDay = new Date(selectedDateObject.getTime());
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay;
});

// Example usage
 // Set selected date

console.log(expDate.value);


function updateOrderDates() {
  orderStore.ticketOrder(new Date(selectedDate.value));
}

onMounted(async () => {
  authStore.getUserFromLocalStorage();
  await orderStore.getOrder;
  await customerStore.getCustomer;
})

function clearFillDetail() {
  orderStore.showDialog = false;
  customerStore.clearUser();
  orderStore.clearOrderDetail();
  router.push("/BuyTicket");
}




// let lastuserId = 1
// interface InfoDetail {
//   userId: number
//   customername: ''
//   tel: string
//   email: string
//   price: number
//   discount: number
//   totalPrice: number
// }
// const infoStore = ref<InfoDetail>({
//   userId: 1,
//   customername: '',
//   tel: '',
//   email: '',
//   price: 0,
//   discount: 0,
//   totalPrice: 0
// })
// const personalinfoList = ref<InfoDetail[]>([])
// function save() {
//   infoStore.value.userId = lastuserId++
//   personalinfoList.value.push(infoStore.value)
//   infoStore.value = {
//   userId: 1,
//   customername: '',
//   tel: '',
//   email: '',
//   price: 0,
//   discount: 0,
//   totalPrice: 0
//   }
// }

</script>

<template>

  <body>
    <container class="fluid">
      <v-card class="activeTabs lgallfont" style="width: 63%; height: 80vh; margin-left: 18%;margin-top: 0.7%">
        <div style="font-size: 50px; margin-top: 2%; margin-bottom: 1%">

          รายละเอียดของคุณ
        </div>
        <div style="display: block; margin: 0 auto;">
          <v-row class="ml-4">
            <v-col cols="12" lg="6">
              <v-flex>
                <input type="text" placeholder="ชื่อ" class="placeholder-color forumSize0"
                  v-model="userStore.currentUser.name" />
              </v-flex>
            </v-col>
            <v-col cols="12" lg="6">
              <v-flex>
                <input type="text" placeholder="เบอร์โทรศัพท์" class="placeholder-color forumSize0 mr-9"
                  v-model="userStore.currentUser.tel" />
              </v-flex>
            </v-col>
          </v-row>
          <v-row class="ml-4">
            <v-col cols="12" lg="6">
              <v-flex>
                <input type="text" placeholder="อีเมลล์" class="placeholder-color forumSize0"
                  v-model="userStore.currentUser.email" />
              </v-flex>
            </v-col>
            <v-col cols="12" lg="6">
              <!-- <v-flex>
                <input type="text" placeholder="เลือกวันที่มาใช้บริการ" class="placeholder-color forumSize0"
                  v-model="orderStore.currentOrder.startDate" />
              </v-flex> -->
              <form action="/action_page.php">
                <label for="dateday"></label>
                <input v-model="selectedDate"  :min="minDate" class="placeholder-color forumSize0 mr-9" type="date" id="dateday" name="dateday">

              </form>
            </v-col>
          </v-row>
          <v-row class="ml-4">
            <v-col cols="12" lg="6">
              <v-flex>
                <!-- <input type="text" placeholder="ราคา" class="placeholder-color forumSize0"
                  
                /> -->
                <div type="text" placeholder="ราคา" class="placeholder-color forumSize0" style="text-align: left; margin-left: 5%;">
                  {{ (orderStore.currentOrder.totalPrice).toLocaleString() }}
                </div>
              </v-flex>
            </v-col>
            <v-col cols="12" lg="6">
              <v-flex>
                <input type="text" placeholder="ส่วนลด" class="placeholder-color forumSize0 mr-9" disabled
                  v-model="orderStore.currentOrder.discount" />
              </v-flex>
            </v-col>
          </v-row>
          <v-row class="ml-8">
            <v-col cols="12" lg="12">
              <v-flex>
                <!-- <h2 type="text" class="forumSize0">{{ orderStore.currentOrder.totalPrice - orderStore.currentOrder.discount }}</h2> -->
                <div type="text" class="forumSize0" style="text-align: left; width: 960px;">
                  {{ (orderStore.currentOrder.totalPrice - orderStore.currentOrder.discount).toLocaleString() }}
                </div>
              </v-flex>
            </v-col>
          </v-row>
        </div>
        
        <v-row class="mt-3">
          <v-col cols="12" lg="6" class="text-left">
            
              <v-btn color="#87B859" class="large-button" style="margin-left: 28%;" @click="updateOrderDates()">ซื้อเลยตอนนี้</v-btn>
            

          </v-col>
          <v-col cols="12" lg="6" class="text-left">
            <v-btn color="#FF835A" class="large-button" @click="clearFillDetail">ยกเลิกการซื้อ</v-btn>
          </v-col>
          <v-col></v-col>
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
  top: 3rem;
  z-index: 2;
  width: 70%;
  height: 80%;
  margin-left: 15%;

}

.placeholder-color::placeholder {
  color: #00000045;
}

.forumSize0 {
  background-color: rgba(0, 0, 0, 0.07);
  border-radius: 40px;
  width: 555px;
  height: 57px;
  padding: 8px 10px;
  margin: 5px;
  box-sizing: border-box;
  outline: none;
  font-size: 25px;
  font-weight: lighter;
  border: 2px solid #0ebfd7;
  width: 90%;
}

.forumSize {
  background-color: rgba(0, 0, 0, 0.07);
  border-radius: 40px;
  width: 555px;
  height: 57px;
  padding: 8px 10px;
  margin: 5px;
  box-sizing: border-box;
  outline: none;
  font-size: 25px;
  font-weight: lighter;
  border: 2px solid #0ebfd7;
  width: 95%;
}

.lgallfont {
  font-size: 28px;
  font-weight: normal;
  color: #00000056;
  text-align: center;

}

.large-button {
  width: 315px;
  height: 57px;
  border-radius: 20px;
  margin-top: 2%;
  margin-left: 30px;
  font-size: 38px;
  font-weight: bold;
  color: #ffffff;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

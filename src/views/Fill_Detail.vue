<script setup lang="ts">
import order from "@/components/services/order";
import { useCustomerStore } from "@/stores/customer";
import { useOrderStore } from "@/stores/order.store";
import type Order from "@/type/order";
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
const orderStore = useOrderStore();
const customerStore = useCustomerStore();

onMounted(async () => {
  await orderStore.getOrder;
  await customerStore.getCustomer;
})

function clearFillDetail() {
  customerStore.clearUser();
  orderStore.clearOrderDetail();
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
      <v-card class="activeTabs lgallfont">
        <div style="margin-top: 2%;">
          รายละเอียดของคุณ
        </div>

        <v-row>
          <v-col cols="12" lg="6">
            <v-flex>
              <input type="text" placeholder="ชื่อ" class="placeholder-color forumSize0"
                v-model="customerStore.currentUser.name" />
            </v-flex>
          </v-col>
          <v-col cols="12" lg="6">
            <v-flex>
              <input type="text" placeholder="เบอร์โทรศัพท์" class="placeholder-color forumSize0"
                v-model="customerStore.currentUser.tel" />
            </v-flex>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="6">
            <v-flex>
              <input type="text" placeholder="อีเมลล์" class="placeholder-color forumSize0"
                v-model="customerStore.currentUser.email" />
            </v-flex>
          </v-col>
          <v-col cols="12" lg="6">
            <!-- <v-flex>
              <input type="text" placeholder="เลือกวันที่มาใช้บริการ" class="placeholder-color forumSize0"
                v-model="orderStore.currentOrder.startDate" />
            </v-flex> -->
            <form action="/action_page.php">
              <label for="dateday"></label>
              <input class="placeholder-color forumSize0" type="date" id="dateday" name="dateday">
            </form>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="6">
            <v-flex>
              <input type="text" placeholder="ราคา" class="placeholder-color forumSize0"
                v-model="orderStore.currentOrder.totalPrice" />
            </v-flex>
          </v-col>
          <v-col cols="12" lg="6">
            <v-flex>
              <input type="text" placeholder="ส่วนลด" class="placeholder-color forumSize0"
                v-model="orderStore.currentOrder.discount" />
            </v-flex>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="12">
            <v-flex>
              <input type="text" placeholder="ราคาสุทธิ" class="placeholder-color forumSize"
                v-model="orderStore.currentOrder.netPrice" />
            </v-flex>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="6" class="text-left">
            <RouterLink to="/sumdetail">
              <v-btn color="#87B859" class="large-button" >ซื้อเลยตอนนี้</v-btn>
            </RouterLink>
          </v-col>
          <v-col cols="12" lg="6" class="text-left">
            <!-- <RouterLink to="/"> -->
            <v-btn color="#FF835A" class="large-button" @click="clearFillDetail">ยกเลิกการซื้อ</v-btn>
            <!-- </RouterLink> -->
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
  width: 80vw;
  height: 80vh;
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
  height: 77px;
  padding: 12px 20px;
  margin: 12px;
  box-sizing: border-box;
  outline: none;
  font-size: 35px;
  font-weight: lighter;
  border: 2px solid #0ebfd7;
  width: 90%;
}

.forumSize {
  background-color: rgba(0, 0, 0, 0.07);
  border-radius: 40px;
  width: 555px;
  height: 77px;
  padding: 12px 20px;
  margin: 12px;
  box-sizing: border-box;
  outline: none;
  font-size: 35px;
  font-weight: lighter;
  border: 2px solid #0ebfd7;
  width: 95%;
}

.lgallfont {
  font-size: 48px;
  font-weight: normal;
  color: #00000056;
  text-align: center;

}

.large-button {
  width: 500px;
  height: 70px;
  border-radius: 20px;
  margin-left: 70px;
  font-size: 48px;
  font-weight: bold;
  color: #ffffff;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

<script setup lang="ts">
import order from "@/components/services/order";
import router from "@/router";
import orderService from "@/components/services/order";
import { useAuthStore } from "@/stores/auth";
import { useCustomerStore } from "@/stores/customer";
import { useOrderStore } from "@/stores/order.store";
import { usePackageStore } from "@/stores/package.store";
import { useUserStore } from "@/stores/user.store";
import type Order from "@/type/order";
import type Package from "@/type/package";
import Swal from "sweetalert2";
import { computed, onMounted, ref } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";

const route = useRoute()

const orderStore = useOrderStore();
const customerStore = useCustomerStore();
const packageStore = usePackageStore();
const authStore = useAuthStore();
const userStore = useUserStore();
const typeError = ref("");
const showDialog = ref(false);
const currentDate = new Date().toISOString().split("T")[0];
const dateError = ref("");
let isValid = true;
// const selectDate = ref
//enddare is 1 year
const minDate = ref<string>(new Date().toISOString().split("T")[0]);
const selectedDate = ref<string>(minDate.value);

// Compute expDate based on selectedDate
const expDate = computed<Date>(() => {
  const selectedDateObject = new Date(selectedDate.value);
  const nextDay = new Date(selectedDateObject.getTime());
  nextDay.setDate(nextDay.getDate() + 1);
  return nextDay;
});

console.log(expDate.value);

onMounted(async () => {
  authStore.getUserFromLocalStorage();
  await orderStore.getOrder;
  await customerStore.getCustomer;
})

function clearFillDetail() {
  customerStore.clearUser();
  orderStore.clearOrderDetail();
}
const validateForm = async () => {
  showDialog.value = false;
  isValid = true;

  if (!selectedDate.value) {
    dateError.value = "โปรดเลือกวันที่";
    isValid = false;

  } else {
    dateError.value = "";
  }
  console.log("---------------------------");


  return isValid;

}

//caerte save function
const saveOrder = async (startDate_: Date) => {
  validateForm();
  if (isValid === true) {
    // if (currentDate.toString() === selectedDate.value.toString()) {
    console.log("********************************")

    await Swal.fire({
      title: "โปรดยืนยันวันที่เข้าใช้บริการ",
      text: `"คุณต้องการเข้าใช้บริการ ณ วันที่ ${selectedDate.value.toString().split("T")[0]} ใช่หรือไม่?"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ใช่",
      cancelButtonText: "ไม่",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (!selectedDate.value) {
          alert("Please select a date");
          return;
        }
        await orderStore.packageOrder(packageStore.currentPackage);
        const expDate = new Date(startDate_);
        expDate.setDate(expDate.getDate() + 1);
        console.log("expDate", expDate);
        orderStore.currentOrder.expDate = expDate;
        orderStore.currentOrder.startDate = new Date(startDate_);
        console.log("currentOrder", JSON.stringify(orderStore.currentOrder));
        orderStore.currentOrder.cusID = 1;
        const res = await orderService.updateOrder(
          orderStore.currentOrder.id!,
          orderStore.currentOrder
        );
        if (res.status === 200) 
          console.log("Order**********", res.data.expDate);
          //set the current order to the updated order
          orderStore.currentOrder = res.data;
          console.log("Order", orderStore.currentOrder);
          router.push('/sumdetail/' + orderStore.currentOrder.id)

        } if (result.isDenied) {
          return;
        }
      })

    // }


  }

}

</script>

<template>

  <body>
    <container class="fluid">
      <v-card class="activeTabs lgallfont" style="width: 63%; height: 75vh; margin-left: 18%;margin-top: 1.5%">
        <div style="font-size: 50px; margin-top: 3%; margin-bottom: 3%">
          รายละเอียดของคุณ
        </div>

        <v-row class="ml-1">
          <v-col cols="12" lg="6">
            <v-flex>
              <input disabled type="text" placeholder="ชื่อ" class="placeholder-color forumSize0"
                v-model="userStore.currentUser.name" />
            </v-flex>
          </v-col>
          <v-col cols="12" lg="6">
            <v-flex>
              <input type="text" disabled placeholder="เบอร์โทรศัพท์" class="placeholder-color forumSize0"
                v-model="userStore.currentUser.tel" />
            </v-flex>
          </v-col>
        </v-row>
        <v-row class="ml-1">
          <v-col cols="12" lg="6">
            <v-flex>
              <input type="text" disabled placeholder="อีเมลล์" class="placeholder-color forumSize0"
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
              <input v-model="selectedDate" :min="minDate" class="placeholder-color forumSize0 mr-9" type="date"
                id="dateday" name="dateday">
            </form>
          </v-col>
        </v-row>
        <v-row class="ml-1">

          <!-- <v-col cols="12" lg="6">
            <v-flex>

              <input type="text" placeholder="ราคารวม" class="placeholder-color forumSize0"
                v-model="packageStore.currentPackage.price" />


              <input type="text" placeholder="ราคา" class="placeholder-color forumSize0"
                v-model="price" />

            </v-flex>
          </v-col> -->
          <!-- <v-col cols="12" lg="6">
            <v-flex>
              <input type="text" placeholder="ส่วนลด" class="placeholder-color forumSize0"
                v-model="orderStore.currentOrder.discount" disabled />
            </v-flex>
          </v-col> -->

        </v-row>
        <v-row class="ml-5">
          <v-col cols="12" lg="12">
            <v-flex>
              <h2 class="forumSize" style="text-align: left; width: 960px;">{{ packageStore.currentPackage.name }} ราคา
                {{ packageStore.currentPackage.price }}
                บาท</h2>
            </v-flex>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="6" class="text-left">

            <v-btn color="#87B859" class="large-button" style="margin-left: 28%;"
              @click="saveOrder(new Date(selectedDate))">ซื้อเลยตอนนี้</v-btn>


          </v-col>
          <v-col cols="12" lg="6" class="text-left">
            <RouterLink to="/BuyPackage">
              <v-btn color="#FF835A" class="large-button" @click="clearFillDetail">ยกเลิกการซื้อ</v-btn>
            </RouterLink>
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
  margin: 6px;
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
  margin-top: 5%;
  margin-left: 30px;
  font-size: 38px;
  font-weight: bold;
  color: #ffffff;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
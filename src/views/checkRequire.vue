<script setup lang="ts">
import orderService from "@/components/services/order";
import { useEventStore } from "@/stores/event.store";
import { useOrderStore } from "@/stores/order.store";
import { usePackageStore } from "@/stores/package.store";
import type Order from "@/type/order";
import { computed, onMounted, ref } from "vue";
import { useRoute } from 'vue-router';

const orderStore = useOrderStore();
const orderId = ref();
const route = useRoute();

onMounted(async () => {
  // wristbandId.value = route.params.id;
  // console.log(wristbandId.value);
  // await orderStore.getOrder();
  // await wristbandStore.findIdWristband(wristbandId.value);
  orderId.value = route.params.id;
  console.log(orderId.value);
  await orderStore.getOrderById(orderId.value);

  if (orderStore.currentOrder.eventId) {
    const eventId = orderService.getEventByOrder(orderId.value);
    orderStore.findEventById((await eventId).data);
    console.log((await eventId).data);
  }
  if (orderStore.currentOrder.packageId) {
    const packageId = orderService.getPackageByOrder(orderId.value);
    orderStore.findPackageById((await packageId).data);
    console.log((await packageId).data);
  }

  // }
  // else if(orderService.getOrderItemByOrder(orderId.value) !== null) {
  //  console.log("item");

})
// wristbandStore.findQrById(wristbandId.value);
orderStore.findQrById(orderId.value);

const formatDate = (dateStr: string | number | Date) => {
  if (!dateStr) return ''; // Handle case where dateStr is undefined or null

  const date = new Date(dateStr);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-GB', options as Intl.DateTimeFormatOptions);
  return formattedDate;
}


</script>

<template>

  <body>
    <container class="fluid">
      <v-card class="lgallfont borderradius"
        style="width: 75%; height: 80vh;align-items: center;border-radius: 20px; background-color: #FFFBF5; margin-top: 0.5%; margin-left: 13%;"
        elevation="5">
        <div class="headFont" style="margin-left: 5%; margin-top: 2%;">
          รายละเอียดบัตร
        </div>
        <v-row>
          <v-col cols="12" lg="4" class="lgallfont">
            <!-- <v-img src="../src/images/Ticket/QrCode.png" width="80%"
              style="margin-left: 15%; margin-top: 5%;"></v-img> -->
            <v-img :src="orderStore.Qr" width="80%" style="margin-left: 15%; margin-top: 5%;"></v-img>
          </v-col>
          <v-col>
            <div style="margin-top: 1%;">
              
              <v-row class="pt-6">
                <v-col cols="12" lg="3" class="lgallfont">
                  <h5 class="ml-4">ชื่อบัตร</h5>
                </v-col>
                <v-col cols="12" lg="3" class="lgallfont" style="margin-left: 13%;">
                  <h5 v-if="orderStore.currentOrder.eventId">{{ orderStore.event_?.name }}</h5>
                  <h5 v-if="orderStore.currentOrder.packageId">
                    <template v-if="orderStore.package_?.package_detail">
                      <div v-for="(detail, index) in orderStore.package_.package_detail" :key="index">
                        {{ detail.name }}
                        <!-- แสดงข้อมูลอื่น ๆ จาก package_detail ตามความเหมาะสม -->
                      </div>
                    </template>
                  </h5>
                  <h5 v-if="orderStore.currentOrder.orderItems!.length > 0">
                    <template v-if="orderStore.currentOrder.orderItems!.length > 0">
                      <div v-for="(detail, index) in orderStore.currentOrder.orderItems" :key="index">
                        {{ detail.name }}
                        <!-- แสดงข้อมูลอื่น ๆ จาก package_detail ตามความเหมาะสม -->
                      </div>
                    </template>
                  </h5>
                </v-col>
                <v-col cols="12" lg="2" class="lgallfont" style="margin-left: 13%;">
                  <h5 v-if="orderStore.currentOrder.eventId">{{ orderStore.currentOrder.numPeople}}</h5>
                  <h5 v-if="orderStore.currentOrder.packageId">
                    <template v-if="orderStore.package_?.package_detail">
                      <div v-for="(detail, index) in orderStore.package_.package_detail" :key="index">
                        {{ detail.qty }} ใบ
                        <!-- แสดงข้อมูลอื่น ๆ จาก package_detail ตามความเหมาะสม -->
                      </div>
                    </template>
                  </h5>
                  <h5 v-if="orderStore.currentOrder.orderItems!.length > 0">
                    <template v-if="orderStore.currentOrder.orderItems!.length > 0">
                      <div v-for="(detail, index) in orderStore.currentOrder.orderItems" :key="index">
                        {{ detail.qty }}
                        <!-- แสดงข้อมูลอื่น ๆ จาก package_detail ตามความเหมาะสม -->
                      </div>
                    </template>
                  </h5>
                </v-col>
              </v-row>


              <v-row class="pt-6">
                <v-col cols="12" lg="3" class="lgallfont">
                  <h5 class="ml-4">ประเภทบัตร</h5>
                </v-col>
                <v-col cols="12" lg="3" class="lgallfont" style="margin-left: 13%;">
                  <h5 v-if="orderStore.currentOrder.eventId">{{ orderStore.event_?.type }}</h5>
                  <h5 v-if="orderStore.currentOrder.packageId">
                    <template v-if="orderStore.package_?.package_detail">
                      <div v-for="(detail, index) in orderStore.package_.package_detail" :key="index">
                        {{ detail.type }}
                        <!-- แสดงข้อมูลอื่น ๆ จาก package_detail ตามความเหมาะสม -->
                      </div>
                    </template>
                  </h5>
                  <h5 v-if="orderStore.currentOrder.orderItems">
                    <template v-if="orderStore.currentOrder.orderItems">
                      <div v-for="(detail, index) in orderStore.currentOrder.orderItems" :key="index">
                        {{ detail.type }}
                        <!-- แสดงข้อมูลอื่น ๆ จาก package_detail ตามความเหมาะสม -->
                      </div>
                    </template>
                  </h5>
                </v-col>
              </v-row>
                
              <v-row class="pt-6">
                <v-col cols="12" lg="4" class="lgallfont">
                  <h5 class="ml-4">วันที่เข้าสวนน้ำ</h5>
                </v-col>
                <v-col cols="12" lg="4" class="lgallfont">
                  <h5 class="ml-8" style="margin-left: 13%;">{{ orderStore.currentOrder.startDate ?
              formatDate(orderStore.currentOrder.startDate) : 'N/A' }}</h5>
                </v-col>
              </v-row>
              <v-row class="pt-6">
                <v-col cols="12" lg="4" class="lgallfont">
                  <h5 class="ml-4">วันที่หมดอายุ</h5>
                </v-col>
                <v-col cols="12" lg="4" class="lgallfont">
                  <h5 class="ml-8" style="margin-left: 13%;">{{ orderStore.currentOrder.expDate ?
              formatDate(orderStore.currentOrder.expDate) : 'N/A' }}</h5>
                </v-col>
              </v-row>
            </div>
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
  width: 100vw;
  height: 89vh;
  margin-top: 80px;
  padding: 25px;
  font-family: 'Kanit', 'sans-serif';
}

.borderradius {
  border-radius: 20px;
  z-index: 0;
}

.no-padding {
  padding: 0;
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
  font-size: 60px;
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
  border-radius: 20px;
  margin: 20px;
  font-size: 36px;
  font-weight: normal;
  background-color: #3fa956;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.detailCard {
  background-color: #F8F8F8;
  z-index: 1;
}
</style>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { usePlusMinusStore } from "../stores/counter";
import { mdiPlus, mdiMinus } from "@mdi/js";
import { useOrderStore } from "@/stores/order.store";
import type { VForm } from "vuetify/components";
import { useEventStore } from "@/stores/event.store";
import { useCustomerStore } from "@/stores/customer";
import type Order from "@/type/order";
import { useUserStore } from "@/stores/user.store";
import { useAuthStore } from "@/stores/auth";

const form = ref<VForm | null>(null);
const orderStore = useOrderStore();
const userStore = useUserStore();
const authStore = useAuthStore();
const eventStore = useEventStore();

const selectedDate = ref<Date>(new Date());
//enddare is 1 year
const endDate = ref<string>("");
const minDate = ref<string>(new Date().toISOString().split("T")[0]);
const PeopleIncrement = ref(0);
const type = ref(""); 
const nameComp = ref("");
const ppiError = ref("");
const nameCompError = ref("");
const typeError = ref("");
const showDialog = ref(false);
const dateError = ref("");
let isValid = true;
const expDate = new Date(selectedDate.value);
expDate.setFullYear(expDate.getFullYear());
const day = selectedDate.value.getDate();
const month = selectedDate.value.getMonth();
expDate.setMonth(month);
expDate.setDate(day);

onMounted(async () => {
  authStore.getUserFromLocalStorage();
  await orderStore.getOrder();
});

const validateForm = () => {
  showDialog.value = false;
  isValid = true; 

if (!nameComp.value || nameComp.value === null) {
      nameCompError.value = "โปรดใส่ชื่อบริษัท";
      isValid = false;
  } else if (nameComp.value.length < 3 || nameComp.value.length > 100) {
      nameCompError.value = "ชื่อบริษัทต้องมี 3-100 ตัวอักษร";
      isValid = false;
  } else {
      nameCompError.value = "";
  }

if (type.value === null || !type.value) {
    typeError.value = "โปรดเลือกหลักสูตร";
    isValid = false;
} else {
    typeError.value = "";
}

if (PeopleIncrement.value === 0) {
    ppiError.value = "จำนวนผู้เข้าร่วมไม่สามารถเป็น 0";
    isValid = false;
} else if (PeopleIncrement.value == null) {
    ppiError.value = "โปรดระบุจำนวนผู้เข้าร่วม";
    isValid = false;
} else {
    ppiError.value = "";
}
    return isValid;

}

async function save() {
  validateForm();
  if (
    type.value ==
    'การฝึกอบรมไลฟ์การ์ดในแหล่งน้ำเปิดแบบสากล'
  ) {
    //get event id 36
    eventStore.currentEvent.id = 36;

  }
  if (type.value =='การฝึกอบรมไลฟ์การ์ดในน้ำตื้นและสระว่ายน้ำระดับสากล') {
    //get event id 35
    eventStore.currentEvent.id = 35;
    // console.log(event);

  }
  if (
    type.value == 'หลักสูตร จูเนียร์ ไลฟ์การ์ด'
  ) {
    //get event id 34
    eventStore.currentEvent.id = 34;
    // console.log(event);
  }
  const order:Order = {
    cusID:1,
    eventId: eventStore.currentEvent.id,
    nameComp: nameComp.value,
    discount: 0,
    expDate: expDate,
    startDate: new Date(selectedDate.value),
    qty: PeopleIncrement.value,
    numPeople: PeopleIncrement.value,
    netPrice:0,
    totalPrice:0,
    received: 0,
    payments: "",
  }
  console.log(order.nameComp);
  await orderStore.eventOrder(order);
}

// function formatDate(date: string): string {
//   // format วันที่
//   const selectedDate = new Date(date);
//   const day = selectedDate.getDate().toString().padStart(2, "0");
//   const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
//   const year = selectedDate.getFullYear();
//   return `${day}-${month}-${year}`;
// }

// function getDate() {
//   // ดึงข้อมูลมาจากปฎิทิน
//   const input = document.getElementById("dateday") as HTMLInputElement;
//   if (input) {
//     selectedDate.value = formatDate(input.value);
//     console.log(selectedDate.value);
//     calculateEndDate();
//   }
// }

// function calculateEndDate() {
//   const tempDate = new Date(selectedDate.value);
//   tempDate.setFullYear(tempDate.getFullYear() + 1); // เพิ่มเวลาหมดอายุ 1 ปี
//   endDate.value = formatDate(tempDate.toISOString().split("T")[0]);
//   console.log("End date:", endDate.value);
// }

// watch(selectedDate, () => {
//   console.log("Selected date:", selectedDate.value);
//   calculateEndDate();
// });

// watch(minDate, () => {
//   getDate();
// });

function add() {
  PeopleIncrement.value++;
}

function minus() {
  if (PeopleIncrement.value <= 0) {
    PeopleIncrement.value = 0;
  } else {
    PeopleIncrement.value--;
  }
}
</script>

<template>
  <body>
    <container>
      <v-row justify="center" align="center">
        <v-card
          class="activeTabs lgallfont my-5"
          style="
            width: 55%;
            height: 80vh;
            align-items: center;
            border-radius: 20px;
            background-color: #fffbf5;
          "
          elevation="5"
        >
          <div style="font-size: 50px; margin-top: 1%; margin-bottom: 1%">
            รายละเอียดของคุณ
          </div>

          <v-row>
            <v-col cols="12" lg="6">
              <v-flex>
                <input
                  type="text"
                  placeholder="ชื่อ"
                  disabled
                  v-model="userStore.currentUser.name "
                  class="placeholder-color forumSize0"
                />
              </v-flex>
            </v-col>
            <v-col cols="12" lg="6">
              <v-flex>
                <input
                  type="text"
                  placeholder="เบอร์โทรศัพท์"
                  disabled
                  v-model="userStore.currentUser.tel "
                  class="placeholder-color forumSize0"
                />
              </v-flex>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6">
              <v-flex>
                <!-- <input type="text" placeholder="หลักสูตร" class="placeholder-color forumSize0" /> -->

                <!-- <select
                    class="placeholder-color forumSize0"
                    style="font-size:25px;"
                    
                  >
                    <option class="placeholder-color forumSize0">หลักสูตร</option>
                    <option>การฝึกอบรมไลฟ์การ์ดในน้ำตื้นและสระว่ายน้ำระดับสากล</option>
                    <option>หลักสูตร จูเนียร์ ไลฟ์การ์ด</option>
                    <option>การฝึกอบรมไลฟ์การ์ดในแหล่งน้ำเปิดแบบสากล</option>
                  </select> -->
                <v-select
                  class="placeholder-color forumSize0"
                  style="font-size: 35px; margin-left: 5%;"
                  label="หลักสูตร"
                  v-model="type"
                  :items="[
                    'การฝึกอบรมไลฟ์การ์ดในน้ำตื้นและสระว่ายน้ำระดับสากล',
                    'หลักสูตร จูเนียร์ ไลฟ์การ์ด',
                    'การฝึกอบรมไลฟ์การ์ดในแหล่งน้ำเปิดแบบสากล',
                  ]"
                >
                </v-select>
              </v-flex>
              <p v-if="typeError" class="error-message small-text" style="color: red">{{ typeError }}</p>
            </v-col>
            <v-col cols="12" lg="6">
              <v-flex>
                <input
                  type="text"
                  placeholder="ชื่อบริษัท"
                  required
                  v-model="nameComp"
                  class="placeholder-color forumSize0"
                />
                <p v-if="nameCompError" class="error-message small-text" style="color: red">{{ nameCompError }}</p>
              </v-flex>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6">
              <v-flex>
                <input
                  type="text"
                  placeholder="อีเมลล์"
                  disabled
                  v-model="userStore.currentUser.email"
                  class="placeholder-color forumSize0"
                />
              </v-flex>
            </v-col>
            <v-col cols="12" lg="6">
              <!-- <v-flex>
                <input type="text" placeholder="เลือกวันที่จะเข้าอบรม" class="placeholder-color forumSize0" />
              </v-flex> -->
              <!-- <form action="/action_page.php"> -->
              <!-- <label for="dateday"></label> -->
              <input
                class="placeholder-color forumSize0"
                type="date"
                id="dateday"
                name="dateday"
               v-model="selectedDate"
                :min="minDate"
                />
                <p  class="small-text" >(หากคุณไม่เลือกวันที่, ทางระบบจะเลือกวันที่ปัจจุบันโดยอัตโนมัติ)</p>
              <!-- </form>  -->
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="12">
              <div class="d-flex align-center forumSize">
                <input
                  type="text"
                  placeholder="จำนวนผู้เข้าอบรม"
                  class="placeholder-color mr-2"
                  readonly
                />
                <button
                  @click="add()"
                  class="mr-4"
                  style="margin-left: 350px; font-size: 30px"
                >
                  +
                </button>
                <div class="smallfont mr-4">{{ PeopleIncrement }}</div>
                <button style="font-size: 30px" @click="minus()">−</button>
              </div>
              <p v-if="ppiError" class="error-message small-text" style="color: red">{{ppiError}}</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="text-left; justify-center">
              <!-- <RouterLink to="/sumdetail"> -->
              <v-btn color="#87B859" class="large-button" @click="save()"
                >ยืนยัน</v-btn
              >
              <!-- </RouterLink> -->
            </v-col>
          </v-row>
        </v-card>
      </v-row>
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
}

.activeTabs {
  border-radius: 20px;
  position: sticky;
  z-index: 2;
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
  margin-left: 23px;
  margin-top: 4px;
  box-sizing: border-box;
  outline: none;
  font-size: 25px;
  font-weight: lighter;
  border: 2px solid #0ebfd7;
  width: 95%;
}

input[type="text"]:focus {
  background-color: lightblue;
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
  margin-left: 30px;
  font-size: 38px;
  font-weight: bold;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.small-text {
  font-size: 18px; /* Adjust the font size as needed */
}
</style>

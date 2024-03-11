<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { usePlusMinusStore } from "../stores/counter";
import { mdiPlus, mdiMinus } from "@mdi/js";
import type { VForm } from "vuetify/components";
import { useOrderStore } from "@/stores/order.store";
import { useUserStore } from "@/stores/user.store";
import { useAuthStore } from "@/stores/auth";
import { useEventStore } from "@/stores/event.store";
import type Order from "@/type/order";
import Swal from "sweetalert2";
const form = ref<VForm | null>(null);
const orderStore = useOrderStore();
const userStore = useUserStore();
const authStore = useAuthStore();
const eventStore = useEventStore();
//enddare is 1 year
const endDate = ref<string>("");
const minDate = ref<string>(new Date().toISOString().split("T")[0]);
const selectedDate = ref(minDate);
const PeopleIncrement = ref(0);
const currentDate = new Date().toISOString().split("T")[0];
const type = ref(""); 
const nameComp = ref("");
const ppiError = ref("");
const nameCompError = ref("");
const typeError = ref("");
const dateError = ref("");
const showDialog = ref(false);
let isValid = true;
var expDate = new Date(selectedDate.value);
// const day = selectedDate.value.getDate();
// const month = selectedDate.value.getMonth();
// expDate.setMonth(month);
// expDate.setDate(day);
onMounted(() => {
  authStore.getUserFromLocalStorage();
});

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
const validateForm = () => {
  showDialog.value = false;
  isValid = true; 

  // Regular expression to check if nameComp contains special characters
  const specialChars = /[!@#$%^&*(),.?":{}|<>]/;

  // Regular expression to check if nameComp is a number
  const numeric = /^\d+$/;

  if (nameComp.value.length <= 0 || nameComp.value === null) {
    nameCompError.value = "โปรดใส่ชื่อบริษัท";
    isValid = false;
  } else if (
    nameComp.value.length < 3 ||
    nameComp.value.length > 100 ||
    specialChars.test(nameComp.value) ||
    numeric.test(nameComp.value)
  ) {
    nameCompError.value = "ชื่อบริษัทต้องมี 3-100 ตัวอักษร และไม่มีอักขระพิเศษหรือตัวเลข";
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
if (!selectedDate.value) {
    dateError.value = "โปรดเลือกวันที่";
    isValid = false;
    
  } else {
    dateError.value = "";
  }

    return isValid;

}
async function save() {
  validateForm();
  if (
    type.value ==
    'หลักสูตร การว่ายน้ำ ขั้นพื้นฐาน'
  ) {
    //get event id 40
    eventStore.currentEvent.id = 40;

  }
  if (type.value == 'หลักสูตร การว่ายน้ำ ขั้นสูง') {
    //get event id 41
    eventStore.currentEvent.id = 41;
    // console.log(event);

  }
  if (
    type.value == 'หลักสูตร การว่ายน้ำ สำหรับผู้ใหญ่'
  ) {
    //get event id 37
    eventStore.currentEvent.id = 42;
    // console.log(event);
  }
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
            const order: Order = {
              cusID: 1,
              eventId: eventStore.currentEvent.id,
              nameComp: nameComp.value,
              discount: 0,
              expDate: expDate,
              startDate: new Date(selectedDate.value),
              qty: PeopleIncrement.value,
              numPeople: PeopleIncrement.value,
              netPrice: 0,
              totalPrice: 0,
              received: 0,
              payments: "",
            }
            console.log(order.nameComp);
            await orderStore.eventOrder(order);

        } if(result.isDenied) {
          return;
        }
      })

    // }


  }
}
</script>

<template>
  <body>
    <container >
      <v-row justify="center" align="center">
        <v-card 
          class="activeTabs lgallfont my-12"
          style="width: 70%; height: 80vh;align-items: center;border-radius: 20px; background-color: #FFFBF5;"
          elevation="5" 
        >
          รายละเอียดของคุณ
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
              <!-- <v-flex> -->
                <!-- <input type="text" placeholder="หลักสูตร" class="placeholder-color forumSize0" /> -->
                <v-select
                  class="placeholder-color forumSize0"
                  style="font-size: 35px"
                  label="หลักสูตร"
                  v-model="type"
                  :items="[
                    'หลักสูตร การว่ายน้ำ ขั้นพื้นฐาน',
                    'หลักสูตร การว่ายน้ำ ขั้นสูง',
                    'หลักสูตร การว่ายน้ำ สำหรับผู้ใหญ่',
                  ]"
                >
                </v-select>
                <p v-if="typeError" class="error-message small-text" style="color: red">{{ typeError }}</p>
              <!-- </v-flex> -->
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
              </v-flex>
              <p v-if="nameCompError" class="error-message small-text" style="color: red">{{ nameCompError }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6">
              <v-flex>
                <input
                  type="text"
                  placeholder="อีเมล"
                  disabled
                  v-model="userStore.currentUser.tel "
                  class="placeholder-color forumSize0"
                />
              </v-flex>
            </v-col>
            <v-col cols="12" lg="6">
              <v-flex>
                <input
                class="placeholder-color forumSize0"
                type="date"
                id="dateday"
                name="dateday"
               v-model="selectedDate"
                :min="minDate"
              />
              </v-flex>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="12">
              <div class="d-flex align-center">
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
              </div>
              <p v-if="ppiError" class="error-message small-text" style="color: red">{{ ppiError  }}</p>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col  class="text-left; justify-center">
                <v-btn color="#87B859" class="large-button" @click="save()"
                >ยืนยัน</v-btn
              >
            </v-col>
            
          </v-row>
        </v-card>
      </v-row>
      
    </container>
  </body>
</template>

<style scoped>
body {
  background-image: url('../images/Event/WallPaper.jpg');
  background-size: cover;
  width: 100vw;
  height: 91.3vh;
  width: 100vw;
  height: 91.2vh;
  margin-top: 80px;
  padding: 15px;
}

.activeTabs {
  border-radius: 20px;
  position: sticky;
  top: 3rem;
  z-index: 2;
  
}
.small-text {
  font-size: 18px; /* Adjust the font size as needed */
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

.v-field__input {
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

input[type="text"]:focus {
  background-color: lightblue;
}

.lgallfont {
  font-size: 48px;
  font-weight: normal;
  color: #00000056;
  text-align: center;
}

.large-button {
  width: 599px;
  height: 77px;
  border-radius: 20px;
  margin-left: 30px;
  font-size: 48px;
  font-weight: bold;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

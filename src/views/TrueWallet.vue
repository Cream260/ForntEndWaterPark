<script setup lang="ts">
import { RouterLink } from "vue-router";
import { onMounted, ref } from "vue";
import Receipt from "@/views/ReceiptView.vue"
import { useAuthStore } from "@/stores/auth";
import { useUserStore } from "@/stores/user.store";

const authStore = useAuthStore();
const userStore = useUserStore();
onMounted(async () => {
  authStore.getUserFromLocalStorage();
});
</script>

<template>
  <header>
    <v-row>
      <v-col cols="12" lg="9">
        <v-card width="657" height="100" class="cardheader"
          ><v-row>
            <v-col>
              <h1 class="fontheader">True Wallet</h1>
            </v-col>
            <v-col>
              <div class="my-class mr-2">
                <v-avatar rounded="0" size="85">
                  <v-img
                    src="../src/images/PayChoice/Truewallet.png"
                    width="100%"
                  ></v-img>
                </v-avatar>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <div class="my-class1">
          <v-img
            src="../src/images/PayChoice/TrueMoney.png"
            :width="335"
          ></v-img>
        </div>
      </v-col>
    </v-row>
  </header>
  <body>
    <v-row>
      <v-col cols="12" lg="6" style="font-size: 25px;">
        <label for="fname">ชื่อผู้ชำระเงิน</label>
        <input type="text" placeholder="ชื่อ - นามสกุล" v-model="userStore.currentUser.name" disabled/>
      </v-col>
      <v-col cols="12" lg="6" style="font-size: 25px;">
      </v-col>
      <v-col cols="12" lg="6" style="font-size: 25px;">
        <label for="fname">อีเมลล์</label>
        <input type="text" placeholder="Email" v-model = "userStore.currentUser.email" disabled/>
      </v-col>
      <v-col cols="12" lg="6" ></v-col>
      <v-col cols="12" lg="6" style="font-size: 25px;">
        <label for="fname">หมายเลขโทรศัพท์</label>
        <input type="text" placeholder="(+66)" v-model = "userStore.currentUser.tel" disabled/>
      </v-col>
    </v-row>
    <v-row
      ><RouterLink to="/BuyTicket">
        <v-btn class="large-button1"
          ><div class="smallnormalFont">ยกเลิก</div></v-btn
        ></RouterLink
      >
      <v-dialog transition="dialog-bottom-transition" width="auto" >
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn class="large-button2 ml-12 smallnormalFont" v-bind="activatorProps"  text="ชำระเงิน"></v-btn>          
            </template>                    
                <Receipt></Receipt>  
          </v-dialog>
    </v-row>
  </body>
</template>

<style scoped>
header {
  margin-top: 80px;
  font-family: 'Kanit', 'sans-serif';
}
.cardheader {
  background-color: #d9d9d940;
}
.fontheader {
  font-size: 50px;
  font-weight: normal;
  margin-left: 19px;
  margin-top: 4%;
}
body {
  position: sticky;
  font-family: 'Kanit', 'sans-serif';
  padding: 30px;
}
.placeholder-color::placeholder {
  color: #00000045;
}

.large-button1 {
  width: 200px;
  height: 80px;
  border-radius: 35px;
  
  background-color: #dd5353;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 3%;
}
.large-button2 {
  width: 200px;
  height: 80px;
  border-radius: 35px;
  
  background-color: #1f798f;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 0.5%;
}
.smallnormalFont {
  font-size: 30px;
  font-weight: normal;
  color: #ffffff;
}
.my-class {
    display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
.my-class1 {
  justify-content: flex-end;
  margin-top: 10px;
}
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid;
}
</style>

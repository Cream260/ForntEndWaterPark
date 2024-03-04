<script setup lang="ts">
import { RouterLink } from "vue-router";
import Receipt from "@/views/ReceiptView.vue"
</script>

<template>
  <header>
    <v-row>
      <v-col cols="12" lg="9">
        <v-card width="657" height="100" class="cardheader"
          ><v-row>
            <v-col>
              <h1 class="fontheader">Credit Card</h1>
            </v-col>
            <v-col>
              <div class="my-class mr-2">
                <v-avatar rounded="0" size="85">
                  <v-img
                    src="../src/images/PayChoice/Credit.png"
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
            src="../src/images/PayChoice/MasterCard.png"
            :width="335"
          ></v-img>
        </div>
      </v-col>
    </v-row>
  </header>
  <body>
    <v-row>
      <v-col cols="12" lg="6" style="font-size: 30px;">
        <label for="fname">หมายเลขบัตร</label>
        <input type="text" placeholder="0000-0000-0000-0000" />
      </v-col>
      <v-col cols="12" lg="6" ></v-col>
      <v-col cols="12" lg="6" style="font-size: 30px;">
        <label for="fname">ชื่อผู้ถือบัตร (ภาษาอังกฤษ)</label>
        <input type="text" placeholder="ชื่อ - นามสกุล"/>
      </v-col>
      <v-col cols="12" lg="6"></v-col>
      <v-col cols="12" lg="6" style="font-size: 30px;">
        <label for="fname">อีเมลล์</label>
        <input type="text" />
      </v-col>
      <v-col cols="12" lg="6"></v-col>
      <RouterLink to="/">
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
  font-size: 60px;
  font-weight: normal;
  margin-left: 19px;
}
body {
  position: sticky;
  font-family: 'Kanit', 'sans-serif';
  padding: 40px;
}
.placeholder-color::placeholder {
  color: #00000045;
}
.large-button1 {
  width: 230px;
  height: 87px;
  border-radius: 35px;
  
  background-color: #dd5353;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 45%;
}
.large-button2 {
  width: 230px;
  height: 87px;
  border-radius: 35px;
  
  background-color: #1f798f;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 5.6%;
}
.smallnormalFont {
  font-size: 36px;
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

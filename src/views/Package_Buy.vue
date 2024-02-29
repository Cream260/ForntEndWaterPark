<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <body>
    <v-card>
      <div style="margin: 0px 0px 0px 40px;">
        <h2 class="extraBoldfont">แพ็คเกจ</h2>
      </div>
      <v-card color="#F5F1DC" theme="dark" class="ma-10">
        <v-row class="borderradius">
          <v-col>
            <v-img src="../src/images/package/family.png" width="400px" class="ma-10"></v-img>
          </v-col>
          <v-col class="ma-10">
            <v-card-title class="ma-10">
              <div>
                <h2 class="extraBoldfont">แพ็คเกจครอบครัว</h2>
                <br />
                <div>
                  <p3 class="smallBoldfont">แพ็คเกจพิเศษสำหรับครอบครัวซึ่งในเเพ็คเกจนี้</p3>
                </div>
                <div>
                  <p3 class="smallBoldfont">จะประกอบไปด้วยตั๋วเข้าสวนน้ำสำหรับผู้ใหญ่สองคนและเด็กสองคน</p3>
                </div>
                <div>
                  <p3 class="smallBoldfont">พร้อมที่จอดรถฟรีและส่วนลดสำหรับอาหารภายในสวนน้ำ</p3>
                </div>
                <v-card-actions class="no-padding">
                  <div>
                    <p3 class="smallBoldfont  ">ราคา 1999 บาท</p3>
                  </div>
                  <v-spacer></v-spacer>
                  <v-flex>
                    <RouterLink to="/filldetail"><v-btn color="#FFFFFF" class="large-button">ซื้อเลยตอนนี้</v-btn>
                    </RouterLink>
                  </v-flex>
                </v-card-actions>
              </div>
            </v-card-title>
          </v-col>
        </v-row>
      </v-card>

      <v-card color="#F5F1DC" theme="dark" class="ma-10">
        <v-row class="borderradius">
          <v-col>
            <v-img src="../src/images/package/birthday2.png" width="420px" class="ma-10"></v-img>
          </v-col>
          <v-col class="ma-10">
            <v-card-title class="ma-10">
              <div>
                <h2 class="extraBoldfont">แพ็คเกจวันเกิด</h2>
                <br />
                <div>
                  <p3 class="smallBoldfont">แพ็คเกจวันเกิดที่รวมตั๋วเข้าสวนน้ำ พื้นที่จัดปาร์ตี้</p3>
                </div>
                <div>
                  <p3 class="smallBoldfont">และอาหารสำหรับกลุ่มของเด็กๆพร้อมของขวัญเล็กๆน้อยๆสำหรับผู้ฉลอง</p3>
                </div>
                <div>
                  <p3 class="smallBoldfont"></p3>
                </div>
                <v-card-actions class="no-padding">
                  <div>
                    <p3 class="smallBoldfont  ">ราคา 1999 บาท</p3>
                  </div>
                  <v-spacer></v-spacer>
                  <v-flex>
                    <RouterLink to="/filldetail"><v-btn color="#FFFFFF" class="large-button">ซื้อเลยตอนนี้</v-btn>
                    </RouterLink>
                  </v-flex>
                </v-card-actions>
              </div>
            </v-card-title>
          </v-col>
        </v-row>
      </v-card>


    </v-card>
  </body>
</template>

<style scoped>
body {
  background-image: url("../images/Event/WallPaper.jpg");
  background-size: cover;
  font-family: sans-serif;
  margin-top: 40px;

  padding: 60px;

}

.borderradius {
  border-radius: 20px;

}

.activeTabs {
  border-radius: 20px;
  position: sticky;
  top: 2rem;
  width: 90vw;
  height: 90vh;

}

.no-padding {
  padding: 0;
}

.fontlarge {
  font-size: 45px;
  font-weight: normal;
}

.large-button {
  width: 222px;
  height: 77px;
  border-radius: 20px;
  margin: 28px;
  font-size: 30px;
  font-weight: bold;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #87B859;
}

.smallfont {
  font-size: 30px;
  font-weight: normal;
  color: #0b2c44;
}

.smallBoldfont {
  font-size: 30px;
  font-weight: bold;
  color: #0b2c44;
}

.extraBoldfont {
  font-size: 40px;
  font-weight: bolder;
  color: #0b2c44;
}

input[type="text"] {
  background-color: #8eadcdeb;
  border-radius: 20px;
  width: 504px;
  height: 77px;
  padding: 12px 20px;
  margin: 28px;
  box-sizing: border-box;
  outline: none;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

input[type="text"]:focus {
  background-color: lightblue;
}

.placeholder-color::placeholder {
  color: white;
}

.scroll-container {
  height: 430px;
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

.v-tabs--density-default {
  --v-tabs-height: 80px;
}</style>

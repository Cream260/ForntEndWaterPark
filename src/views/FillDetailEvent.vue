<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <body>
    <container >
      <v-row justify="center" align="center">
        <v-card 
          class="activeTabs lgallfont my-8"
          style="width: 70%; height: 80vh;align-items: center;border-radius: 20px; background-color: #FFFBF5;"
          elevation="5" 
        >
          รายละเอียดของคุณ
          <v-row>
            <v-col cols="12" lg="6">
              <v-flex>
                <input type="text" placeholder="ชื่อ" class="placeholder-color forumSize0"/>
              </v-flex>
            </v-col>
            <v-col cols="12" lg="6">
              <v-flex>
                <input type="text" placeholder="เบอร์โทรศัพท์" class="placeholder-color forumSize0"/>
              </v-flex>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6">
              <v-flex>
                <!-- <input type="text" placeholder="หลักสูตร" class="placeholder-color forumSize0" /> -->
                  <v-select
                    class="placeholder-color forumSize0"
                    
                    label="หลักสูตร"
                  
                    :items="['การฝึกอบรมไลฟ์การ์ดในน้ำตื้นและสระว่ายน้ำระดับสากล', 'หลักสูตร จูเนียร์ ไลฟ์การ์ด', 'การฝึกอบรมไลฟ์การ์ดในแหล่งน้ำเปิดแบบสากล']"
                  ></v-select>
              </v-flex>
            </v-col>
            <v-col cols="12" lg="6">
              <v-flex>
                <input type="text" placeholder="ชื่อบริษัท" class="placeholder-color forumSize0" />
              </v-flex>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6">
              <v-flex>
                <input type="text" placeholder="อีเมลล์" class="placeholder-color forumSize0" />
              </v-flex>
            </v-col>
            <v-col cols="12" lg="6">
              <v-flex>
                <input type="text" placeholder="เลือกวันที่จะเข้าอบรม" class="placeholder-color forumSize0" />
              </v-flex>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="12">
              <v-flex>
                <input type="text" placeholder="ราคาสุทธิ" class="placeholder-color forumSize" />
              </v-flex>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6" class="text-left">
              <RouterLink to="/sumdetail">
                <v-btn color="#87B859" class="large-button">ซื้อเลยตอนนี้</v-btn>
              </RouterLink>
            </v-col>
            <v-col cols="12" lg="6" class="text-left">
              <RouterLink to="/">
                <v-btn color="#FF835A" class="large-button">ยกเลิกการซื้อ</v-btn>
              </RouterLink>
            </v-col>
            <v-col></v-col>
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

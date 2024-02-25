<script setup lang="ts">
 import { RouterLink, RouterView } from 'vue-router'
 import FirstAidCard1 from '../components/events/FirstAidCard1.vue';
 import FirstAidCard2 from '../components/events/FirstAidCard2.vue';
 import FirstAidCard3 from '../components/events/FirstAidCard3.vue';
 import FirstAidCard4 from '../components/events/FirstAidCard4.vue';
</script>

<template>
    <div class="body">
        <v-container>
            <v-row justify="center" align="center">
                <v-card
                    class="my-8"
                    style="width: 70%; height: 80vh;align-items: center;border-radius: 20px; background-color: #FFFBF5;"
                    elevation="5"
                >
                    <v-row>
                        <v-col class="my-8" cols="5">
                            <img src="../images/Event/swim.jpg" height="98%" width="90%" style="border-radius: 5%; margin-left: 5%;"/>
                        </v-col>
                        <v-col class="my-8" cols="3.5">
                            <v-card style=" width: 95%; height: 33.8vh; border-radius: 40px; background-color: #F2F2F2; margin-right: 50%; border-color: #E0DCDC; border-width: 3px;"
                            elevation="5">
                            <FirstAidCard1></FirstAidCard1>
                            </v-card>
                        </v-col>
                        <v-col class="my-8" cols="3.5">
                            <v-card style=" width: 95%; height: 33.8vh; border-radius: 40px; background-color: #5A97E7; margin-right: 5%;border-color: #5286D4; border-width: 3px;"
                            elevation="5">
                            <FirstAidCard2></FirstAidCard2>
                            </v-card>
                            
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col  cols="4" style="margin-left: 3%;" >
                            <h2 style="font-size: 45px; color: #164159; font-family: 'Kanit', sans-serif;">ว่ายน้ำ</h2>
                            <p style="font-size: 20px; color: #164159; font-family: 'Kanit', sans-serif;"> หลักสูตรว่ายน้ำที่เป็นเอกลักษณ์ของเราเหมาะกับทั้งเด็ก
                                และผู้ใหญ่เราจะช่วยยกระดับการว่ายน้ำของคุณไปอีกขั้น
                                ในสภาพแวดล้อมที่สะดวกสบายและสนุกสนานเรียนรู้
                                ทักษะสําหรับชีวิตประจำวัน!
                                 
                            </p>
                            <v-btn style="border-radius: 20px; width: 320px; height: 75px; background-color: #317EE2;" class="my-3">
                                <v-list-item to="/FillDetailEvent" style="font-size: 32px; font-weight: bolder; color: white; font-family: 'Kanit', sans-serif;">ติดต่อรับข้อเสนอ</v-list-item>
                            </v-btn>
                        </v-col>
                        <v-col  cols="3.5">
                            <v-card style=" width: 87%; height: 33.8vh; border-radius: 40px; background-color: #5A97E7;margin-left: 17%;border-color: #5286D4; border-width: 3px;"
                            elevation="5">
                            <FirstAidCard3></FirstAidCard3>
                            </v-card>
                            
                        </v-col>
                        <v-col cols="3.5">
                            <v-card style=" width: 85%; height: 33.8vh; border-radius: 40px; background-color: #5A97E7; left: 10%;border-color: #5286D4; border-width: 3px;"
                            elevation="5">
                            <FirstAidCard4></FirstAidCard4>
                            </v-card>
                            
                        </v-col>
                    </v-row>
                </v-card>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
    .body {
        background-image: url('../images/Event/WallPaper.jpg');
        background-size: cover;
        width: 100vw;
        height: 91.3vh;
        width: 100vw;
        height: 91.2vh;
        margin-top: 80px;
        padding: 15px;
    }
</style>
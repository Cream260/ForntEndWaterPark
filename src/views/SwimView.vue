<script setup lang="ts">
 import { RouterLink, RouterView } from 'vue-router'
 import SwimCard1 from '../components/events/SwimCard1.vue';
 import SwimCard2 from '../components/events/SwimCard2.vue';
 import SwimCard3 from '../components/events/SwimCard3.vue';
 import SwimCard4 from '../components/events/SwimCard4.vue';
</script>

<template>
    <div class="body">
        <v-container>
            <v-row justify="center" align="center">
                <v-card
                    class="my-1"
                    style="width: 70%; height: 80vh;align-items: center;border-radius: 20px; background-color: #FFFBF5;"
                    elevation="5"
                >
                    <v-row>
                        <v-col class="my-5" cols="5">
                            <img src="../images/Event/swim.jpg" height="90%" width="90%" style="border-radius: 5%; margin-left: 5%;"/>
                        </v-col>
                        <v-col class="my-5" cols="3.5">
                            <v-card style=" width: 99%; height: 33vh; border-radius: 40px; background-color: #F2F2F2; border-color: #E0DCDC; border-width: 3px;"
                            elevation="5">
                            <SwimCard1></SwimCard1>
                            </v-card>
                        </v-col>
                        <v-col class="my-5" cols="3.5">
                            <v-card style=" width: 98%; height: 33vh; border-radius: 40px; background-color: #5A97E7; margin-right: 12%;border-color: #5286D4; border-width: 3px;"
                            elevation="5">
                            <SwimCard2></SwimCard2>
                            </v-card>
                            
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col  cols="4" style="margin-left: 3%;" >
                            <h2 style="font-size: 35px; color: #164159; font-family: 'Kanit', sans-serif;">ว่ายน้ำ</h2>
                            <p style="font-size: 16px; color: #164159; font-family: 'Kanit', sans-serif;"> หลักสูตรว่ายน้ำที่เป็นเอกลักษณ์ของเราเหมาะกับทั้งเด็ก
                                และผู้ใหญ่เราจะช่วยยกระดับการว่ายน้ำของคุณไปอีกขั้น
                                ในสภาพแวดล้อมที่สะดวกสบายและสนุกสนานเรียนรู้
                                ทักษะสําหรับชีวิตประจำวัน!
                                 
                            </p>
                            <v-btn style="border-radius: 20px; width: 320px; height: 75px; background-color: #317EE2;" class="my-1">
                                <v-list-item to="/FillDetailEventSwim" style="font-size: 24px; font-weight: bolder; color: white; font-family: 'Kanit', sans-serif;">ติดต่อรับข้อเสนอ</v-list-item>
                            </v-btn>
                        </v-col>
                        <v-col  cols="3.5">
                            <v-card style=" width: 90%; height: 33vh; border-radius: 40px; background-color: #5A97E7;margin-left: 17%;border-color: #5286D4; border-width: 3px;"
                            elevation="5">
                            <SwimCard3></SwimCard3>
                            </v-card>
                            
                        </v-col>
                        <v-col cols="3.5">
                            <v-card style=" width: 90%; height: 33vh; border-radius: 40px; background-color: #5A97E7; left: 8%;border-color: #5286D4; border-width: 3px;"
                            elevation="5">
                            <SwimCard4></SwimCard4>
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
        height: 89vh;
        margin-top: 80px;
        padding: 25px;
    }

</style>
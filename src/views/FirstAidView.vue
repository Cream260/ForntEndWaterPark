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
                    class="my-1"
                    style="width: 70%; height: 80vh;align-items: center;border-radius: 20px; background-color: #FFFBF5;"
                    elevation="5"
                >
                    <v-row>
                        <v-col class="my-5" cols="5">
                            <img src="../images/Event/Safety.jpg" height="98%" width="90%" style="border-radius: 5%; margin-left: 5%;"/>
                        </v-col>
                        <v-col class="my-5" cols="3.5">
                            <v-card style=" width: 99%; height: 33vh; border-radius: 40px; background-color: #F2F2F2; border-color: #E0DCDC; border-width: 3px;"
                            elevation="5">
                            <FirstAidCard1></FirstAidCard1>
                            </v-card>
                        </v-col>
                        <v-col class="my-5" cols="3.5">
                            <v-card style=" width: 98%; height: 33vh; border-radius: 40px; background-color: #58CEB9; margin-right: 12%;border-color: #70BEAA; border-width: 3px;"
                            elevation="5">
                            <FirstAidCard2></FirstAidCard2>
                            </v-card>
                            
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col  cols="4" style="margin-left: 3%;" >
                            <h2 style="font-size: 35px; color: #164159; font-family: 'Kanit', sans-serif;">ปฐมพยาบาล</h2>
                            <p style="font-size: 16px; color: #164159; font-family: 'Kanit', sans-serif;"> หลักสูตรการปฐมพยาบาล,การทํา CPR และ AED ของเราได้รับการออกแบบมาเพื่อให้คุณมีความมั่นใจ
                                ในการตอบสนองต่อสถานการณ์ฉุกเฉินด้วยทักษะที่
                                สามารถช่วยชีวิตได้ มาสร้าง “นักช่วยชีวิตในชีวิตประจําวัน” 
                                ด้วยกันเถอะ!
                                 
                            </p>
                            <v-btn style="border-radius: 20px; width: 320px; height: 63px; background-color: #2FC2A8;" class="my-1">
                                <v-list-item to="/FillDetailEventFirstAid" style="font-size: 24px; font-weight: bolder; color: white; font-family: 'Kanit', sans-serif;">ติดต่อรับข้อเสนอ</v-list-item>
                            </v-btn>
                        </v-col>
                        <v-col  cols="3.5">
                            <v-card style=" width: 90%; height: 33vh; border-radius: 40px; background-color: #58CEB9;margin-left: 17%;border-color: #70BEAA; border-width: 3px;"
                            elevation="5">
                            <FirstAidCard3></FirstAidCard3>
                            </v-card>
                            
                        </v-col>
                        <v-col cols="3.5">
                            <v-card style=" width: 90%; height: 33vh; border-radius: 40px; background-color: #58CEB9; left: 7%;border-color: #70BEAA; border-width: 3px;"
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
        height: 89vh;
        margin-top: 80px;
        padding: 25px;
    }
</style>
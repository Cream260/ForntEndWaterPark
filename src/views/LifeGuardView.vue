<script setup lang="ts">
 import { RouterLink, RouterView } from 'vue-router'
 import LifeGuardCard1 from '../components/events/LifeGuardCard1.vue';
 import LifeGuardCard2 from '../components/events/LifeGuardCard2.vue';
 import LifeGuardCard3 from '../components/events/LifeGuardCard3.vue';
 import LifeGuardCard4 from '../components/events/LifeGuardCard4.vue';
import { useEventStore } from '@/stores/event.store';

//set current event
const eventStore = useEventStore();
//crate function setCurrentEvent





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
                            <img src="../images/Event/lifeGuard.jpg" height="90%" width="90%" style="border-radius: 5%; margin-left: 5%;"/>
                        </v-col>
                        <v-col class="my-5" cols="3.5">
                            <v-card style=" width: 99%; height: 33vh; border-radius: 40px; background-color: #F2F2F2; border-color: #E0DCDC; border-width: 3px;"
                            elevation="5">
                            <LifeGuardCard1></LifeGuardCard1>
                            </v-card>
                        </v-col>
                        <v-col class="my-5" cols="3.5">
                            <v-card style=" width: 98%; height: 33vh; border-radius: 40px; background-color: #B784D8; margin-right: 12%;border-color: #A67AC2; border-width: 3px;"
                            elevation="5">
                            <LifeGuardCard2></LifeGuardCard2>
                            </v-card>
                            
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col  cols="4" style="margin-left: 3%;" >
                            <h2 style="font-size: 35px; color: #164159; font-family: 'Kanit', sans-serif;">ไลฟ์การ์ด</h2>
                            <p style="font-size: 16px; color: #164159; font-family: 'Kanit', sans-serif;"> ศูนย์ฝึกอบรมของเรามีหลักสูตรการช่วยชีวิตที่
                                หลากหลายถึง 3 หลักสูตรสำหรับทุกสถานการณ์ ตั้งแต่หลักสูตรเบื้องต้นสําหรับเด็กไปจนถึงหลักสูตรวิชาชีพที่ได้รับการรับรองในระดับสากล
                            </p>
                            <v-btn style="border-radius: 20px; width: 320px; height: 75px; background-color: #945BBA;" class="my-1">
                                <v-list-item to="/FillDetailEvent" style="font-size: 24px; font-weight: bolder; color: white; font-family: 'Kanit', sans-serif;">ติดต่อรับข้อเสนอ</v-list-item>
                            </v-btn>
                        </v-col>
                        <v-col  cols="3.5">
                            <v-card style=" width: 90%; height: 33vh; border-radius: 40px; background-color: #B784D8;margin-left: 17%;border-color: #A67AC2; border-width: 3px;"
                            elevation="5">
                            <LifeGuardCard3></LifeGuardCard3>
                            </v-card>
                            
                        </v-col>
                        <v-col cols="3.5">
                            <v-card style=" width: 90%; height: 33vh; border-radius: 40px; background-color: #B784D8; left: 7%;border-color: #A67AC2; border-width: 3px;"
                            elevation="5">
                            <LifeGuardCard4></LifeGuardCard4>
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
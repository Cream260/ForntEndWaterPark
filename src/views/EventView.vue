<script setup lang="ts">
 import { RouterLink, RouterView } from 'vue-router'
 
</script>

<template>
    <div class="body">
        <v-container>
            <v-row justify="center" align="center" class="my-20">
                <v-card
                    
                    style="width: 75%; height: 80vh;align-items: center;border-radius: 20px; background-color: #FFFBF5; margin-top: 0.5%;"
                    elevation="5"
                >
                <v-container>
                    <v-row justify="center" align="center">
                        <v-card
                            class="my-6"
                            style="margin-top: 70%; width: 97%; height: 72vh; border-radius: 40px; background-color: #097F9E;"
                            elevation="5"
                        >
                        <v-row>
                            <v-col order="6">

                                <img src="../images/Event/ProfileEvent.jpg" height="95.5%" width="100%" style="border-radius: 12% 0% 0% 12%;"/>
                            </v-col>
                            <v-col order="12">
                                <v-card
                                    class="my-1"
                                    style=" width: 98%; height: 94%; border-radius: 40px; background-color: #FFFBF5;"
                                    elevation="5"
                                >   
                                <v-row justify="center" align="center" class="my-5">
                                    <img src="../images/Event/event.jpg" height="50%" width="81%" style="border-radius: 8% ; " />
                                    
                                </v-row>
                                <v-row justify="center" align="center">
                                        <img src="../images/Event/iconLearn.jpg" height="10%" width="10%" style="border-radius: 8% ; margin-right: 20px;"/>
                                        <h1 style="color: #024864; font-size: 40px;">ศูนย์ฝึกอบรม</h1>

                                </v-row>
                                <v-row justify="center" align="center" class="my-9" >
                                    <v-btn style="border-radius: 20px; width: 320px; height: 55px; background-color: #FAEF9B;">
                                        <!-- <p style="font-size: 33px; font-weight: bolder; color: #9E6F21;">กดเพื่อดูข้อมูล</p> -->
                                        <v-list-item to="/EventDetail" style="font-size: 33px; font-weight: bolder; color: #9E6F21;">กดเพื่อดูข้อมูล</v-list-item>
                                    </v-btn>

                                </v-row>
                                </v-card>
                            </v-col>
                        </v-row>
                        
                        </v-card>
                    </v-row>
                </v-container>
                
          
              
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
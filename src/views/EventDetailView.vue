<script setup lang="ts">
 import EventCard1 from '../components/events/EventCard1.vue'
 import EventCard2 from '../components/events/EventCard2.vue'
 import EventCard3 from '../components/events/EventCard3.vue'
</script>

<template>
    <div class="body">
        <v-container>
            <v-row justify="center" align="center">
                <v-card
                    class="my-50"
                    style="width: 70%; height: 80vh;align-items: center;border-radius: 20px; background-color: #FFFBF5;"
                   
                >
                <v-container>
                    <v-row justify="center" align="center">
                        <v-card
                            class="my-8"
                            style="width: 93%; height: 15vh;align-items: center;border-radius: 20px; background-color: #B0DAFF; border-color: #A4C9EA; border-width: 3px;"                            
                        >
                            <v-row >
                                <v-col class="my-5" cols="4">
                                    <p style="margin-left: 17%; color: #164159; font-size: 49px; font-weight: bolder;" class="text">
                                        ศูนย์ฝึกอบรม
                                    </p>
                                </v-col>
                                <v-col class="my-4" cols="8">
                                    <p style="margin-right: 7%;color: #164159; font-size: 22px; font-weight: bolder;">
                                        เราภูมิใจที่จะนําเสนอหลักสูตร ไลฟ์การ์ด , First Aid และ หลักสูตรว่ายน้ำที่มีคุณภาพระดับสากลให้กับชุมชนคนพัทยาและทั่วประเทศไทย! ไม่มีที่ไหนที่จะเรียนรู้ได้ดีไปกว่าสวนน้ำที่ใหญ่ที่สุดและดีที่สุดแล้ว!
                                    </p>
                                </v-col>
                                
                                
                            </v-row>
                        </v-card>
                        <v-card
                            style="width: 93%; height: 53vh;align-items: center;border-radius: 20px; " 
                            class="cardBody"                            
                        >
                            <v-row>
                                <v-col class="my-5" cols="4">
                                    <p style="margin-left: 20%; color: #164159; font-size: 53px; font-weight: bolder;" class="my-4">
                                        หลักสูตร
                                    </p>
                                </v-col>
                                <v-col class="my-5" cols="8">
                                    <p style="margin-right: 7%;color: #164159; font-size: 22px; font-weight: bolder;" class="my-4">
                                        ทุกหลักสูตรจะถูกสอนโดย ผู้ฝึกสอนจาก Ellis & Associates , การทำ CPR และ หลักสูตรการปฐมพยาบาล จะสอดคล้องตามหลักมาตรฐานของ Ellis & Associates National อย่างแน่นอน
                                    </p>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col ols="4">
                                    <EventCard1 style="margin-left: 9%; "></EventCard1>
                                </v-col>
                                <v-col cols="4">
                                    <EventCard2 style="margin-left: 5%;"></EventCard2>
                                </v-col>
                                <v-col cols="4">
                                    <EventCard3 style="margin-left: 1%;"></EventCard3>
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
        height: 91.3vh;
        width: 100vw;
        height: 91.2vh;
        margin-top: 80px;
        padding: 25px;
    }
    .cardBody {
        background-image: url('../images/Event/WallPaperCardEvent.jpg');
        background-size: cover;
        width: 93vw;
        height: 15vh;
    }
    .text {
        text-shadow: 0.08em 0em #468F97
        
    }
  </style>
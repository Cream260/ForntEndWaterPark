<script setup lang="ts">
import  EventCardVue from '@/components/events/EventCard.vue';
import { useEventStore } from '@/stores/event.store';
import { onMounted } from 'vue';

const eventStore = useEventStore();

onMounted(() => {
    eventStore.getEvent();
    console.log(eventStore.events)
});


</script>

<template>
    <div class="body">
        <v-container>
            <v-row justify="center" align="center">
                <v-card
                    class="my-40"
                    style="width: 70%; height: 80vh;align-items: center;border-radius: 20px; background-color: #FFFBF5;"
                   
                >
                <v-container>
                    <v-row justify="center" align="center">
                        <v-card
                            class="my-5"
                            style="width: 93%; height: 15vh;align-items: center;border-radius: 20px; background-color: #B0DAFF; border-color: #A4C9EA; border-width: 3px;"                            
                        >
                            <v-row >
                                <v-col class="my-6" cols="4">
                                    <p style="margin-left: 17%; color: #164159; font-size: 33px; font-weight: bolder;" class="text">
                                        ศูนย์ฝึกอบรม
                                    </p>
                                </v-col>
                                <v-col class="my-1" cols="8">
                                    <p style="margin-right: 7%;color: #164159; font-size: 16px; font-weight: bolder;">
                                        เราภูมิใจที่จะนําเสนอหลักสูตร ไลฟ์การ์ด , First Aid และ หลักสูตรว่ายน้ำที่มีคุณภาพระดับสากลให้กับชุมชนคนพัทยาและทั่วประเทศไทย! ไม่มีที่ไหนที่จะเรียนรู้ได้ดีไปกว่าสวนน้ำที่ใหญ่ที่สุดและดีที่สุดแล้ว!
                                    </p>
                                </v-col>
                                
                                
                            </v-row>
                        </v-card>
                        <v-card
                            style="width: 93%; height: 56vh;align-items: center;border-radius: 20px; " 
                            class="cardBody"                            
                        >
                            <v-row>
                                <v-col class="my-5" cols="4">
                                    <p style="margin-left: 20%; color: #164159; font-size: 45px; font-weight: bolder;" class="my-4">
                                        หลักสูตร
                                    </p>
                                </v-col>
                                <v-col class="my-5" cols="8">
                                    <p style="margin-right: 7%;color: #164159; font-size: 20px; font-weight: bolder;" class="my-4">
                                        ทุกหลักสูตรจะถูกสอนโดย ผู้ฝึกสอนจาก Ellis & Associates , การทำ CPR และ หลักสูตรการปฐมพยาบาล จะสอดคล้องตามหลักมาตรฐานของ Ellis & Associates National อย่างแน่นอน
                                    </p>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col ols="4" v-for="index in 1" :key="index">
                                   
                                    <EventCardVue  :event-name="eventStore.events[index]?.name" 
                                        :event-img="eventStore.events[index]?.images" style="margin-left: 7%; " />
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
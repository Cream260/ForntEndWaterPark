import eventService from '../components/services/event';
import type Event from '@/type/event'
import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useEventStore = defineStore("event", () => {
  const events = ref<Event[]>([])
  const currentEvent = ref<Event>({
    name: " ",
    images: 'no_image.jpg',
    price: 0,
    type: " ",
  });
  async function getEvent() {
    try {
      const res = await eventService.getEvent();
      events.value = res.data;
      console.log(res);
      console.log(events.value );
    } catch (e) {
      console.log(e);
    }
  }
  function setCurrentEvent(event: Event) {
    currentEvent.value = event;
    console.log(currentEvent.value);
  }
 

  return { events, getEvent, currentEvent ,setCurrentEvent};
});

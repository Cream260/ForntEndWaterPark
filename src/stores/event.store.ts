import eventService from '../components/services/event';
import type Event from './type/event'
import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useEventStore = defineStore("event", () => {
  const events = ref<Event[]>([])
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

  return { events, getEvent };
});

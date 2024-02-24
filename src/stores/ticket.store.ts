import ticketService from '@/components/services/ticket'
import type Ticket from './type/ticket'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTicketStore = defineStore("ticket", () => {
  const tickets = ref<Ticket[]>([])
  async function getTicket() {
    try {
      const res = await ticketService.getTicket();
      tickets.value = res.data;

    } catch (e) {
      console.log(e);
    }
  }
  return { tickets, getTicket };
});

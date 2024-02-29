import orderService from "@/components/services/order";
import type Order from "./type/order";
import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type Ticket from "./type/ticket";
import order from "@/components/services/order";

export const useOrderStore = defineStore("order", () => {
  const orders = ref<Order[]>([]);
  const orderList = ref<{ ticket: Ticket; qty: number; sum: number }[]>([]);
  const ThChildqty = ref(0);
  const ThAdultqty = ref(0);
  const EnChildqty = ref(0);
  const EnAdultqty = ref(0);
  const sumbeDis = computed(() => {
    let sum = 0;
    for (let i = 0; i < orderList.value.length; i++) {
      sum = sum + orderList.value[i].sum;
    }
    return sum;
  });
  function ThChildincrement(item: Ticket) {
    ThChildqty.value++;
    for (let i = 0; i < orderList.value.length; i++) {
      if (orderList.value[i].ticket.id === item.id) {
        orderList.value[i].qty++;
        orderList.value[i].sum = orderList.value[i].qty * item.price;
        return;
      }
    }
    orderList.value.push({ ticket: item, qty: 1, sum: 1 * item.price });
    console.log(orderList.value);
  }

  function ThChilddecrement(index: number) {
    if (ThChildqty.value == 0) return;
    ThChildqty.value--;
    orderList.value.splice(index, 1);
    
    console.log(orderList.value);
  }

  function ThAdultincrement(item: Ticket) {
    ThAdultqty.value++;
    for (let i = 0; i < orderList.value.length; i++) {
      if (orderList.value[i].ticket.id === item.id) {
        orderList.value[i].qty++;
        orderList.value[i].sum = orderList.value[i].qty * item.price;
        return;
      }
    }
    orderList.value.push({ ticket: item, qty: 1, sum: 1 * item.price });
    console.log(orderList.value);
  }

  function ThAdultdecrement(index: number) {
    if (ThAdultqty.value == 0) return;
    ThAdultqty.value--;
    orderList.value.splice(index, 1);
    console.log(orderList.value);
  }

  function EnChildincrement(item: Ticket) {
    EnChildqty.value++;
    for (let i = 0; i < orderList.value.length; i++) {
      if (orderList.value[i].ticket.id === item.id) {
        orderList.value[i].qty++;
        orderList.value[i].sum = orderList.value[i].qty * item.price;
        return;
      }
    }
    orderList.value.push({ ticket: item, qty: 1, sum: 1 * item.price });
    console.log(orderList.value);
  }

  function EnChilddecrement(index: number) {
    if (EnChildqty.value == 0) return;
    EnChildqty.value--;
    orderList.value.splice(index, 1);
    console.log(orderList.value);
  }

  function EnAdultincrement(item: Ticket) {
    EnAdultqty.value++;
    for (let i = 0; i < orderList.value.length; i++) {
      if (orderList.value[i].ticket.id === item.id) {
        orderList.value[i].qty++;
        orderList.value[i].sum = orderList.value[i].qty * item.price;
        return;
      }
    }
    orderList.value.push({ ticket: item, qty: 1, sum: 1 * item.price });
    console.log(orderList.value);
  }

  function EnAdultdecrement(index: number) {
    if (EnAdultqty.value == 0) return;
    EnAdultqty.value--;
    orderList.value.splice(index, 1);
    console.log(orderList.value);
  }

  function clearOrder() {
    orderList.value = [];
  }

  async function getOrder() {
    try {
      const res = await orderService.getOrder();
      orders.value = res.data;
    } catch (e) {
      console.log(e);
    }
  }

  async function openOrder() {
    const orderItems = orderList.value.map(
      (item) =>
        <{ name: string; type:string; price: number; totalprice: number; qty: number }>{
          name: item.ticket.name,
          type: item.ticket.type,
          price: item.ticket.price,
          totalprice: item.sum,
          qty: item.qty,
        }
    );
    console.log(orderItems);
    // const order = {userId:1, orderItems: orderItems};
    const order = {orderItems: orderItems};
    try {
      const res = await orderService.saveOrder(order);
      clearOrder();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  return {
    ThChildqty,
    ThAdultqty,
    EnChildqty,
    EnAdultqty,
    orders,
    sumbeDis,
    orderList,
    clearOrder,
    getOrder,
    openOrder,
    ThChildincrement,
    ThChilddecrement,
    ThAdultincrement,
    ThAdultdecrement,
    EnChildincrement,
    EnChilddecrement,
    EnAdultincrement,
    EnAdultdecrement,
  };
});

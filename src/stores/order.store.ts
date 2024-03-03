import orderService from "@/components/services/order";
import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type Ticket from "@/type/ticket";
import type Order from "@/type/order";
import type OrderItem from "@/type/OrderItem";

export const useOrderStore = defineStore("order", () => {
  const orders = ref<Order[]>([]);
  const orderList = ref<OrderItem[]>([]);
  const ThChildqty = ref(0);
  const ThAdultqty = ref(0);
  const EnChildqty = ref(0);
  const EnAdultqty = ref(0);
  const startDate = ref(new Date());
  const expDate = ref(new Date());
  const currentOrder = ref<Order>({
    cusID: 1,
    qty: 0,
    totalPrice: 0,
    netPrice: 0,
    numPeople: null,
    nameComp: null,
    discount: 0,
    received: 0,
    payments: "PromptPay",
    startDate: startDate.value,
    expDate: expDate.value,
    orderItems: orderList.value,
  });
  const clearOrderDetail = () => {
    currentOrder.value = {
      cusID: 0,
      qty: 0,
      totalPrice: 0,
      netPrice: 0,
      numPeople: null,
      nameComp: null,
      discount: 0,
      received: 0,
      payments: "",
      startDate: startDate.value,
      expDate: expDate.value,
      orderItems: [],
    };
  };

  const sumbeDis = computed(() => {
    let sum = 0;
    for (let i = 0; i < orderList.value.length; i++) {
      sum = sum + orderList.value[i].totalPrice;
    }
    return sum;
  });

  async function getOrder() {
    try {
      const res = await orderService.getOrder();
      orders.value = res.data;
    } catch (e) {
      console.log(e);
    }
  }

  async function openOrder() {
    const orderItems = orderList.value;
    const order = {
      cusID: 1,
      qty: 0,
      totalPrice: 0,
      netPrice: 0,
      numPeople: null,
      nameComp: null,
      discount: 0,
      received: 0,
      payments: "PromptPay",
      startDate: new Date(),
      expDate: new Date(),
      orderItems: orderItems,
    };
    console.log(order);
    try {
      const res = await orderService.saveOrder(order);
      currentOrder.value = res.data;
      clearOrder();
    } catch (e) {
      console.log("e");
    }
  }

  function ThChildincrement(item: Ticket) {
    ThChildqty.value++;
    for (let i = 0; i < orderList.value.length; i++) {
      if (orderList.value[i].ticketId === item.id) {
        orderList.value[i].qty++;
        orderList.value[i].totalPrice = orderList.value[i].qty * item.price!;
        return;
      }
    }
    orderList.value.push({
      ticketId: item.id!,
      name: item.name!,
      type: item.type!,
      qty: 1,
      price: item.price!,
      totalPrice: 1 * item.price!,
    });
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
      if (orderList.value[i].ticketId === item.id) {
        orderList.value[i].qty++;
        orderList.value[i].totalPrice = orderList.value[i].qty * item.price!;
        return;
      }
    }
    orderList.value.push({
      ticketId: item.id!,
      name: item.name!,
      type: item.type!,
      qty: 1,
      price: item.price!,
      totalPrice: 1 * item.price!,
    });
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
      if (orderList.value[i].ticketId === item.id) {
        orderList.value[i].qty++;
        orderList.value[i].totalPrice = orderList.value[i].qty * item.price!;
        return;
      }
    }
    orderList.value.push({
      ticketId: item.id!,
      name: item.name!,
      type: item.type!,
      qty: 1,
      price: item.price!,
      totalPrice: 1 * item.price!,
    });
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
      if (orderList.value[i].ticketId === item.id) {
        orderList.value[i].qty++;
        orderList.value[i].totalPrice = orderList.value[i].qty * item.price!;
        return;
      }
    }
    orderList.value.push({
      ticketId: item.id!,
      name: item.name!,
      type: item.type!,
      qty: 1,
      price: item.price!,
      totalPrice: 1 * item.price!,
    });
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
    ThChildqty.value = 0;
    ThAdultqty.value = 0;
    EnChildqty.value = 0;
    EnAdultqty.value = 0;
    console.log(orderList.value);
  }

  return {
    ThChildqty,
    ThAdultqty,
    EnChildqty,
    EnAdultqty,
    orders,
    sumbeDis,
    orderList,
    currentOrder,
    clearOrderDetail,
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

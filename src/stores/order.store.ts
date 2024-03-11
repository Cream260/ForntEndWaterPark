import orderService from "@/components/services/order";
import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type Ticket from "@/type/ticket";
//inport promotionService
import promotionService from "@/components/services/promotion";
import type Order from "@/type/order";
import type OrderItem from "@/type/OrderItem";
import packageService from "@/components/services/package";
import eventService from "../components/services/event";
import type Package from "@/type/package";
import type Event from "@/type/event";
import router from "@/router";
import event from "../components/services/event";
import order from "@/components/services/order";
import type Promotion from "@/type/promotion";
import Swal from "sweetalert2";

export const useOrderStore = defineStore("order", () => {
  const orders = ref<Order[]>([]);
  const orderList = ref<OrderItem[]>([]);
  const ThChildqty = ref(0);
  const ThAdultqty = ref(0);
  const EnChildqty = ref(0);
  const EnAdultqty = ref(0);
  const payment = ref("");
  const nameComp = ref("");
  const received = ref(0);
  const showDialog = ref(false);
  const event_ = ref<Event>();
  const promo_ = ref<Promotion>();
  const package_ = ref<Package>();
  const orderItem_ = ref<OrderItem[]>([]);
  const promo = ref<Promotion>();
  const Qr = ref("");
  const startDate = ref(new Date());
  const expDate = ref(new Date());
  const currentOrder = ref<Order>({
    cusID: 1,
    promoId: 0,
    packageId: 0,
    eventId: 0,
    qty: 0,
    totalPrice: 0,
    netPrice: 0,
    numPeople: 0,
    nameComp: "",
    discount: 0,
    received: received.value,
    payments: payment.value,
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
      numPeople: 0,
      nameComp: "",
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
  //function create order by event
  async function packageOrder(package_: Package) {
    const order: Order = {
      cusID: 1,
      packageId: package_.id,
      qty: package_.qty,
      totalPrice: package_.price!,
      netPrice: package_.price!,
      numPeople: null,
      nameComp: null,
      discount: 0,
      received: package_.price,
      payments: "",
      startDate: new Date(),
      expDate: new Date(),
      orderItems: [],
    };
    console.log(order);
    try {
      const res = await orderService.saveOrder(order);
      currentOrder.value = res.data;
      console.log("Order", currentOrder.value);
      //Json
      clearOrder();
    } catch (e) {
      console.log(e);
    }
  }
  // async function openOrder() {
  //   const orderItems = orderList.value;
  //   const order = {
  //     cusID: 1,
  //     qty: 0,
  //     totalPrice: 0,
  //     netPrice: 0,
  //     numPeople: null,
  //     nameComp: null,
  //     discount: 0,
  //     received: 0,
  //     payments: "",
  //     startDate: new Date(),
  //     expDate: new Date(),
  //     orderItems: orderItems,
  //   };
  //   console.log(order);
  //   try {
  //     const res = await orderService.saveOrder(order);
  //     currentOrder.value = res.data;
  //     console.log("currentOrder", currentOrder.value);
  //     clearOrder();
  //     router.push("/filldetail");
  //   } catch (e) {
  //     console.log("e");
  //   }
  // }

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
      payments: "",
      startDate: new Date(),
      expDate: new Date(),
      orderItems: orderItems,
    };

    console.log(order);

    try {
      if (
        ThChildqty.value <= 0 &&
        ThAdultqty.value <= 0 &&
        EnChildqty.value <= 0 &&
        EnAdultqty.value <= 0
      ) {
        await Swal.fire({
          title: "กรุณาเลือกบัตรให้ถูกต้อง!",
          text: `"กรุณาเลือกจำนวนบัตร" `,
          icon: "warning",
          showCloseButton: true,
        });
        console.log("เลือกตั๋ว");
        return; // Exit function early if qty is 0
      }

      if (
        ThChildqty.value > 0 &&
        ThAdultqty.value === 0 &&
        EnChildqty.value > 0 &&
        EnAdultqty.value === 0
      ) {
        await Swal.fire({
          title: "กรุณาเลือกบัตรให้ถูกต้อง!",
          text: `"กรุณาเลือกจำนวนบัตรผู้ใหญ่หากมีบัตรเด็กอยู่ด้วย" `,
          icon: "warning",
          showCloseButton: true,
        });
        console.log("เลือกตั๋ว");
        return; // Exit function early if qty is 0
      }

      const res = await orderService.saveOrder(order);
      currentOrder.value = res.data;
      console.log("currentOrder", currentOrder.value);
      clearOrder();
      ThChildqty.value = 0;
      ThAdultqty.value = 0;
      EnChildqty.value = 0;
      EnAdultqty.value = 0;
      router.push("/filldetail");
    } catch (e) {
      console.log("Error:", e);
      // Handle the error here if necessary
    }
  }

  async function ticketOrder(startDate_: Date) {
    try {
      //set time to next day
      console.log("startDate", currentOrder.value.startDate);

      // Set the expiration date to the next day at midnight
      const expDate = new Date(startDate_);
      expDate.setDate(expDate.getDate() + 1);
      console.log("expDate", expDate);
      currentOrder.value.expDate = expDate;
      currentOrder.value.startDate = new Date(startDate_);
      console.log("currentOrder", JSON.stringify(currentOrder.value));
currentOrder.value.cusID = 1;
      const res = await orderService.updateOrder(
        currentOrder.value.id!,
        currentOrder.value
      );
      if (res.status === 200) {
        console.log("Order**********", res.data.expDate);
        //set the current order to the updated order
        currentOrder.value = res.data;
        console.log("Order", currentOrder.value);

        router.push("/sumdetail/" + currentOrder.value.id);
      }
    } catch (e) {
      console.log(e);
    }
  }

  //function create order by event
  async function eventOrder(order: Order) {
    try {
      const res = await orderService.saveOrder(order);
      currentOrder.value = res.data;
      console.log("Order", currentOrder.value);
      //Json
      clearOrder();
      router.push("/sumdetailevent/" + currentOrder.value.id);
    } catch (e) {
      console.log(e);
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
    if (ThChildqty.value == 0) {
      orderList.value.splice(index, 1);
      console.log(orderList.value);
      return;
    } else {
      ThChildqty.value--;
      orderList.value[index].qty -= 1;
      orderList.value[index].totalPrice =
        orderList.value[index].qty * orderList.value[index].price!;
      if (orderList.value[index].qty == 0) {
        orderList.value.splice(index, 1);
      }
    }

    console.log(orderList.value);
  }

  function ThAdultincrement(item: Ticket) {
    ThAdultqty.value++;
    for (let i = 0; i < orderList.value.length; i++) {
      if (orderList.value[i].ticketId === item.id) {
        orderList.value[i].qty++;
        orderList.value[i].totalPrice = orderList.value[i].qty * item.price!;
        return orderList.value[i].qty;
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
    return 1;
  }

  function ThAdultdecrement(index: number) {
    if (ThAdultqty.value == 0) {
      orderList.value.splice(index, 1);
      console.log(orderList.value);
      return;
    } else {
      ThAdultqty.value--;
      orderList.value[index].qty -= 1;
      orderList.value[index].totalPrice =
        orderList.value[index].qty * orderList.value[index].price!;
      if (orderList.value[index].qty == 0) {
        orderList.value.splice(index, 1);
      }
    }

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
    if (EnChildqty.value == 0) {
      orderList.value.splice(index, 1);
      console.log(orderList.value);
      return;
    } else {
      EnChildqty.value--;
      orderList.value[index].qty -= 1;
      orderList.value[index].totalPrice =
        orderList.value[index].qty * orderList.value[index].price!;
      if (orderList.value[index].qty == 0) {
        orderList.value.splice(index, 1);
      }
    }

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
    if (EnAdultqty.value == 0) {
      orderList.value.splice(index, 1);
      console.log(orderList.value);
      return;
    } else {
      EnAdultqty.value--;
      orderList.value[index].qty -= 1;
      orderList.value[index].totalPrice =
        orderList.value[index].qty * orderList.value[index].price!;
      if (orderList.value[index].qty == 0) {
        orderList.value.splice(index, 1);
      }
    }

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

  const saveOrder = async () => {
    try {
      await orderService.saveOrder(currentOrder.value);
      console.log(currentOrder.value);
    } catch (e) {
      console.log("e");
    }
  };

  //getOrder by id
  async function getOrderById(id: number) {
    try {
      const res = await orderService.getOrderById(id);
      currentOrder.value = res.data;
      console.log(JSON.stringify(currentOrder.value));

      return currentOrder.value;
    } catch (e) {
      console.log(e);
    }
  }
  async function getOrderById_(id: number) {
    try {
      const res = await orderService.getOrderById(id);
      console.log(JSON.stringify(currentOrder.value));

      return res;
    } catch (e) {
      console.log(e);
    }
  }
  async function updatePayment(id: number, payment: string) {
    try {
      const res = await orderService.getOrderById(id);
      const updatedOrder = res.data;
      updatedOrder.payments = payment; // กำหนดวิธีการชำระเงิน
      const result = await orderService.updateOrder(id, updatedOrder);
      console.log(result); // แสดงผลลัพธ์การอัปเดต
      currentOrder.value = result.data; // อัปเดตค่า currentOrder.value
      console.log("update credit", currentOrder.value);
    } catch (e) {
      console.log(e);
    }
  }

  async function findQrById(id: number) {
    try {
      const res = await orderService.getOrderQR(id);
      const imageDataUrl = `${res.data}`;
      Qr.value = imageDataUrl;
      console.log("found", Qr.value);
    } catch (error) {
      console.error("Error while fetching QR code:", error);
    }
  }

  async function updateReceived(id: number, received: number) {
    try {
      const res = await orderService.getOrderById(id);
      const updatedOrder = res.data;
      updatedOrder.received = received; // กำหนดวิธีการชำระเงิน
      const result = await orderService.updateOrder(id, updatedOrder);
      console.log(result); // แสดงผลลัพธ์การอัปเดต
      currentOrder.value = result.data; // อัปเดตค่า currentOrder.value
      console.log("update receive", currentOrder.value);
    } catch (e) {
      console.log(e);
    }
  }

  async function updatePromotion(id: number, discount: number) {
    const orderItems = orderList.value;
    const res = await promotionService.getPromotionById(id);
    promo.value = res.data;
    console.log("update promotion", promo);
    const order = {
      cusID: 1,
      qty: 0,
      promoId: promo.value!.id,
      totalPrice: 0,
      netPrice: 0,
      numPeople: null,
      nameComp: null,
      discount: discount,
      received: 0,
      payments: "",
      startDate: new Date(),
      expDate: new Date(),
      orderItems: orderItems,
    };
    try {
      const orderQty = orderItems.reduce((total, item) => total + item.qty, 0);
      console.log(orderQty);

      if (EnChildqty.value > 0 && EnAdultqty.value === 0) {
        showDialog.value = false;
        await Swal.fire({
          title: "กรุณาเลือกบัตรให้ถูกต้อง!",
          text: `"กรุณาเลือกจำนวนบัตรผู้ใหญ่หากมีบัตรเด็กอยู่ด้วย" `,
          icon: "warning",
          showCloseButton: true,
        });
      } else if (ThChildqty.value > 0 && ThAdultqty.value === 0) {
        showDialog.value = false;
        await Swal.fire({
          title: "กรุณาเลือกบัตรให้ถูกต้อง!",
          text: `"กรุณาเลือกจำนวนบัตรผู้ใหญ่หากมีบัตรเด็กอยู่ด้วย" `,
          icon: "warning",
          showCloseButton: true,
        });
      } else {
        if (promo.value?.code === "Happy2024") {
          if (orderQty <= 0) {
            showDialog.value = false;
            await Swal.fire({
              title: "กรุณาเลือกบัตรให้ถูกต้อง!",
              text: "โปรโมชั่น หรรษาคลายร้อน จำเป็นต้องใช้สำหรับการซื้อบัตรตั้งแต่ 1 ใบขึ้นไป",
              icon: "warning",
              showCloseButton: true,
            });
          } else {
            const res = await orderService.saveOrder(order);
            currentOrder.value = res.data;
            console.log(res.data);
            ThChildqty.value = 0;
            ThAdultqty.value = 0;
            EnChildqty.value = 0;
            EnAdultqty.value = 0;
            router.push("/filldetail");
          }
          console.log("เลือกตั๋ว");
          return; // Exit function early if qty is 0
        }
        if (promo.value?.code === "Promo123") {
          if (orderQty !== 2) {
            showDialog.value = false;
            await Swal.fire({
              title: "กรุณาเลือกบัตรให้ถูกต้อง!",
              text: "โปรโมชั่น มา 2 จ่าย 1 จำเป็นต้องใช้สำหรับการซื้อบัตร 2 ใบ",
              icon: "warning",
              showCloseButton: true,
            });
            ThChildqty.value = 0;
            ThAdultqty.value = 0;
            EnChildqty.value = 0;
            EnAdultqty.value = 0;
          } else {
            const res = await orderService.saveOrder(order);
            currentOrder.value = res.data;
            console.log(res.data);
            ThChildqty.value = 0;
            ThAdultqty.value = 0;
            EnChildqty.value = 0;
            EnAdultqty.value = 0;
            router.push("/filldetail");
          }
          console.log("เลือกตั๋ว");
          return; // Exit function early if qty is 0
        }
        if (promo.value?.code === "Friend06") {
          if (orderQty % 5 !== 0 || orderQty < 5) {
            showDialog.value = false;
            await Swal.fire({
              title: "กรุณาเลือกบัตรให้ถูกต้อง!",
              text: "โปรโมชั่น มันส์ยกแก๊งค์ จำเป็นต้องใช้สำหรับการซื้อบัตร 5 ใบ",
              icon: "warning",
              showCloseButton: true,
            });
            ThChildqty.value = 0;
            ThAdultqty.value = 0;
            EnChildqty.value = 0;
            EnAdultqty.value = 0;
          } else {
            const res = await orderService.saveOrder(order);
            currentOrder.value = res.data;
            console.log(res.data);
            ThChildqty.value = 0;
            ThAdultqty.value = 0;
            EnChildqty.value = 0;
            EnAdultqty.value = 0;
            router.push("/filldetail");
          }
          console.log("เลือกตั๋ว");
          return; // Exit function early if qty is 0
        }
      }
      // const promo = await promotionService.getPromotionById(id);
      // currentOrder.value = res.data;
      // currentOrder.value.promoId = promo.data;
      // currentOrder.value.discount = discount;
      // await orderService.updateOrder(id, currentOrder.value);

      clearOrder();
    } catch (e) {
      console.log(e);
    }
  }
  async function findEventById(id: number) {
    const res = await eventService.getEventById(id);
    event_.value = res.data;
    return event_;
  }
  async function findPackageById(id: number) {
    const res = await packageService.getPackageById(id);
    package_.value = res.data;
    package_.value?.package_detail;
    console.log(res.data);
    return package_;
  }
  async function findPromotionById(id: number) {
    const res = await promotionService.getPromotionById(id);
    promo_.value = res.data;
    console.log(res.data);
    return promo_;
  }

  return {
    showDialog,
    promo_,
    findPromotionById,
    ticketOrder,
    findPackageById,
    findEventById,
    orderItem_,
    event_,
    package_,
    Qr,
    findQrById,
    updateReceived,
    updatePromotion,
    getOrderById_,
    updatePayment,
    eventOrder,
    saveOrder,
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
    getOrderById,
    // PeopleCrement,
    packageOrder,
  };
});

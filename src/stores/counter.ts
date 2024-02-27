import { ref } from "vue";
import { defineStore } from "pinia";

export const usePlusMinusStore = defineStore("counter", () => {
  const count = ref(0);
  const ThChildcount = ref(0);
  const ThAdultcount = ref(0);
  const EnChildcount = ref(0);
  const EnAdultcount = ref(0);

  function ThChildincrement() {
    ThChildcount.value++;
  }

  function ThChilddecrement() {
    if (ThChildcount.value == 0) return;
    ThChildcount.value--;
  }

  function ThAdultincrement() {
    ThAdultcount.value++;
  }

  function ThAdultdecrement() {
    if (ThAdultcount.value == 0) return;
    ThAdultcount.value--;
  }

  function EnChildincrement() {
    EnChildcount.value++;
  }

  function EnChilddecrement() {
    if (EnChildcount.value == 0) return;
    EnChildcount.value--;
  }

  function EnAdultincrement() {
    EnAdultcount.value++;
  }

  function EnAdultdecrement() {
    if (EnAdultcount.value == 0) return;
    EnAdultcount.value--;
  }

  return {
    count,
    ThChildcount,
    ThAdultcount,
    EnChildcount,
    EnAdultcount,
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

import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePlusMinusStore = defineStore("counter", () => {
  const count = ref(0);
  const Childcount = ref(0);
  const Adultcount = ref(0);
  const doubleChildCount = computed(() => Childcount.value * 2);
  function Childincrement() {
    Childcount.value++;
  }

  function Childdecrement() {
    if (Childcount.value == 0) return;
    Childcount.value--;
  }

  function Adultincrement() {
    Adultcount.value++;
  }

  function Adultdecrement() {
    if (Adultcount.value == 0) return;
    Adultcount.value--;
  }

  return { count, Childcount, Adultcount, doubleChildCount, Childincrement, Childdecrement, Adultincrement, Adultdecrement };
});

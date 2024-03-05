import { ref } from 'vue'
import { defineStore } from 'pinia'
import type Wristband from '@/type/wristbands';
import wristbandService from "@/components/services/wristband";

export const useWristbandStore = defineStore("wristband", () => {
  const wristbands = ref<Wristband[]>([])
  const wristband = ref<Wristband>();
  async function getWristband() {
    try {
      const res = await wristbandService.getWristband();
      wristband.value = res.data;
      console.log(res)

    } catch (e) {
      console.log(e);
    }
  }
  return { wristband, getWristband };
});

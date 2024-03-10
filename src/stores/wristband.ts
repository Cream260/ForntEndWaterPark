import { ref } from 'vue'
import { defineStore } from 'pinia'
import type Wristband from '@/type/wristbands';
import wristbandService from "@/components/services/wristband";

export const useWristbandStore = defineStore("wristband", () => {
  const wristbands = ref<Wristband[]>([])
  const wristband = ref<Wristband>();
  const Qr = ref('');
  const currentWristband = ref<Wristband>({
    type: '',
    startDate: new Date,
    endDate: new Date,
  });
  async function getWristband() {
    try {
      const res = await wristbandService.getWristband();
      wristbands.value = res.data;
      console.log(res)

    } catch (e) {
      console.log(e);
    }
  }

  async function findIdWristband(id: number) {
    const res = await wristbandService.getWristbandById(id); 
    console.log(' found', res.data);
    if (res.data) {
      currentWristband.value = res.data;
    }
  }

  async function findQrById(id: number) {
    try {
      const res = await wristbandService.getWristbandQR(id);
      const imageDataUrl = `${res.data}`;
      Qr.value = imageDataUrl;
      console.log('found', Qr.value);
    } catch (error) {
      console.error('Error while fetching QR code:', error);
    }
  }
  
    



  return { wristbands, getWristband ,wristband,findIdWristband,currentWristband, findQrById ,Qr};
});

import packageService from '@/components/services/package'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type Package from '@/type/package';

export const usePackageStore = defineStore("package", () => {
  const packages = ref<Package[]>([])
  async function getPackage() {
    try {
      const res = await packageService.getPackage();
      packages.value = res.data;

    } catch (e) {
      console.log(e);
    }
  }
  return { packages, getPackage };
});

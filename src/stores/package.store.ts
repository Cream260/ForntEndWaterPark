import packageService from '@/components/services/package'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type Package from '@/type/package';

export const usePackageStore = defineStore("package", () => {
  const packages = ref<Package[]>([])
  const currentPackage = ref<Package>({
    name: " ",
    images: 'no_image.jpg',
    price: 0,
    qty: 0,
    package_detail: [],
  });
  async function getPackage() {
    try {
      const res = await packageService.getPackage();
      packages.value = res.data;

    } catch (e) {
      console.log(e);
    }
  }

  async function getPackageById(id: number) {
    try {
      const res = await packageService.getPackageById(id);
      currentPackage.value = res.data;
      console.log("Package",res.data);
      return currentPackage.value;
    } catch (e) {
      console.log(e);
    }
  }
  return { packages, getPackage ,getPackageById,currentPackage};
});

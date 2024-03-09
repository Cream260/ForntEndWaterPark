import packageService from '@/components/services/package'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type Package from '@/type/package';

export const usePackageStore = defineStore("package", () => {
  const packages = ref<Package[]>([])
  const currentPackage = ref<Package>({
    
    name: " ",
    price: 0,
    qty: 0,
    images: 'no_image.jpg',
    package_detail: [],
    orders: [],
  });
  async function getPackage() {
    try {
      const res = await packageService.getPackage();
      packages.value = res.data;
      
    } catch (e) {
      console.log(e);
    }
  }
  function setCurrentPackages(packageData: Package) {
    currentPackage.value = packageData;
    console.log(currentPackage.value);
  }
  async function getPackageById(id: number) {
    try {
      const res = await packageService.getPackageById(id);
      currentPackage.value = res.data
      console.log(res.data);
      return currentPackage.value;
    } catch (e) {
      console.log(e);
    }
  }
  return { packages, getPackage, currentPackage,getPackageById,setCurrentPackages };
});

<script setup lang="ts">
import { RouterLink, RouterView, useRouter, type RouteLocationRaw } from 'vue-router';
import { mdiMenuDown,mdiLogout} from '@mdi/js';
import { ref } from 'vue';

const router = useRouter();

// ใหม่
const items = ref([
    { title: 'Logout', route: '/' },
]);
// ใหม่

const handleMenuItemClick = (item: { route: RouteLocationRaw; }) => {
    // Handle navigation based on the clicked item
    router.push(item.route);
};

</script>

<template>
   <v-menu class="red-button">
                        <template v-slot:activator="{ props }">
                            <v-btn class="mr-5" color="#9AD0C2" rounded variant="flat"  v-bind="props">
                                Nawapat
                                <v-icon :icon="mdiMenuDown"></v-icon>
                            </v-btn>
                        </template>

                        <v-list class=  "rounded-t-xl rounded-b-xl " >
                            <v-list-item v-for="(item, index) in items" :key="index" @click="handleMenuItemClick(item)">

                                <!-- เพิ่ม Icon -->
                                <div class="d-flex">
                                    <v-icon class="text-black":icon="mdiLogout"></v-icon>
                                    <v-list-item-title class="pl-2" >{{ item.title }}</v-list-item-title>
                                </div>
                                <!-- เพิ่ม Icon -->


                            </v-list-item>
                        </v-list>
                    </v-menu>
</template>

<style></style>
import type User from "@/type/user";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useUserStore = defineStore("userStore",()=> {
    const currentUser = ref<User>({
        id: -1, role: 'customer', username:'',email: '', name: '', password: '', tel: '', customer: {
            id: -1,
            name: '',
            email: '',
            tel: '',
        },
    });

    function setUser(user: User) {
        currentUser.value = {...user};
        localStorage.setItem('user', JSON.stringify(user));
        return currentUser;
      }
      function getUser() {
        localStorage.getItem('user');
    
    
    
        return currentUser.value;
      }
    
      
    return{currentUser, setUser, getUser};
    });
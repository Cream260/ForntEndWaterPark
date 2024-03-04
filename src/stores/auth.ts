import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "@/router";
import { useUserStore } from "./user.store";
import auth from "@/components/services/auth";
import type User from "@/type/user";

export const useAuthStore = defineStore("auth", () => {
  const authName = ref({});
  const userStore = useUserStore();
  const isLogin = ref(false);

  const login = async (username: string, password: string) => {
    try {
      const response = await auth.login({
        username: username,
        password: password,
      });
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      if (response != null) {
        const user__: User = {
          id: response.data.user_id,
          username: response.data.user_name,
          email: response.data.user_email,
          password: response.data.user_password, // Storing password in frontend is usually not advisable.
          role: response.data.user_role,
          tel: response.data.user_tel,
          name: response.data.user_name,
          customer: {
            id: -1,
            name: "",
            email:"",
            tel: "",
          },
        };
        if(response.data.customer){
          user__.customer = {
            id: response.data.customer.cus_id,
            name: response.data.customer.cus_name,
            email: response.data.customer.cus_email,
            tel: response.data.customer.cus_tel,
          }
        }
        userStore.setUser(user__);
        console.log(user__);
        router.push("/");
      } else {
        console.error("User does not have customer");
        return null;
      }

      authName.value = JSON.parse(JSON.stringify(localStorage.getItem("user")));
    } catch (e) {
      console.log(e);
    }
    isLogin.value = true;
    router.push("/");
  };
//   const login = async (username: string, password: string) => {
//     try {
//         const response = await auth.login({
//             username: username,
//             password: password,
//         });

//         // Check if response contains the expected data
//         if (response.data) {
//             const user__: User = {
//               id: response.data.user_id,
//               username: response.data.user_name,
//               email: response.data.user_email,
//               role: response.data.user_role,
//               tel: response.data.user_tel,
//               name: response.data.user_name,
//               password: response.data.user_password,
//               customer: {
//                 id: -1,
//                 name: "",
//                 email: "",
//                 tel: "",
//               },
//             };

//             if (response.data.customer) {
//                 user__.customer = {
//                     id: response.data.customer.cus_id,
//                     name: response.data.customer.cus_name,
//                     email: response.data.customer.cus_email,
//                     tel: response.data.customer.cus_tel,
//                 };
//             }

//             userStore.setUser(user__);
//             console.log(user__);
//             router.push("/");
//         } else {
//             console.error("Invalid response received from the server");
//             // Handle invalid response appropriately, maybe show an error message to the user
//         }

//         // It's insecure to store passwords in local storage, so remove this line
//         // authName.value = JSON.parse(JSON.stringify(localStorage.getItem("user")));
//     } catch (e) {
//         console.log("An error occurred during login:", e);
//         // Handle the error appropriately, show error message to the user or log for debugging
//     }

//     isLogin.value = true;
// };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("customer");
    authName.value = "";
    const currentUser = ref<User>({
      customer: { id: -1, name: "" },
      id: -1,
      email: "",
      password: "",
      username: "",
      name: "",
      tel: "",
      role: ""
    });
    userStore.setUser(currentUser.value);
    router.replace("/login");
  };
  // create register user store
  const register = async (
    email: string,
    password: string,
    username: string
  ) => {
    try {
      const response = await auth.authenticate(email, password, username);
      if (response != null) {
        const user__: User = {
          id: response.data.user_id,
          username: response.data.user_name,
          email: response.data.user_email,
          password: response.data.user_password, // Storing password in frontend is usually not advisable.
          role: response.data.user_role,
          customer: {
            id: response.data.customer.cus_id,
            name: response.data.customer.cus_name,
          },
          name: "",
          tel: ""
        };
        userStore.setUser(user__);
        console.log(user__);
        router.push("/");
      } else {
        console.error("User does not have customer");
        return null;
      }

      authName.value = JSON.parse(JSON.stringify(localStorage.getItem("user")));
      isLogin.value = true;
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  //get User from localStorage
  const getUserFromLocalStorage = () => {
    const userString = localStorage.getItem("user");
    if (userString) {
      // Check if userString is truthy, avoiding null or "undefined"
      try {
        const userObject: User = JSON.parse(userString);
        userStore.setUser(userObject); // Update userStore with the user object
        authName.value = userObject; // Update authName with the user object
        isLogin.value = true; // Set isLogin to true since a user is found
      } catch (e) {
        console.error("Failed to parse user from localStorage:", e);
        // Handle parsing error, e.g., corrupted data
        isLogin.value = false; // Optionally set isLogin to false
      }
    } else {
      // Log or handle the case where no user data is found in localStorage
      console.log("No user found in localStorage.");
      isLogin.value = false; // Set isLogin to false since no user is logged in
    }
  };

  return {
    login,
    logout,
    authName,
    register,
    isLogin,
    getUserFromLocalStorage,
  };
});
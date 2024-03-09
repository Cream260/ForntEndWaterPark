<script setup lang = "ts">
import { RouterLink } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { ref, watch } from "vue";
import router from "@/router";

const username = ref("");
const password = ref("");
const email = ref("");
const name = ref("");
const tel = ref("");
const showPassword = ref(false); 
const authStore = useAuthStore();
const usernameError = ref("");
const passwordError = ref("");
const emailError = ref("");
const showDialog = ref(false);
const errorMessage = ref("");
const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
let isValid = true;
const validateForm = () => {
  isValid = true; 
  showDialog.value = false;
  errorMessage.value = "Please fill all the form, thank you."
  // if (!email.value) {
  //   errorMessage.value;
  //   isValid = false;
  // } else if (
  //   !/^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/.test(email.value)
  // ) {
  //   emailError.value = "Only Gmail or Hotmail accounts are accepted";
  //   isValid = false;
  // } else {
  //   emailError.value = "";
  // }


// Updated Username validation
//   if (!username.value) {
//     errorMessage.value;
//     isValid = false;
//   } else if (username.value.length < 5 || username.value.length > 20) {
//     usernameError.value = "Username must be between 8-20 characters";
//     isValid = false;
//   } else if (/[\u0E00-\u0E7F]+/.test(username.value)) {
//     usernameError.value = "Thai characters are not supported";
//     isValid = false;
//   } else {
//     usernameError.value = "";
//   }

//   if (!password.value) {
//     errorMessage.value;
//     isValid = false;
//   } else if (password.value.length < 6) {
//     passwordError.value = "Password must be at least 6 characters";
//     isValid = false;
//   } else if (!passwordRegex.test(password.value)) {
//     passwordError.value =
//       "Password must have uppercase lowercase number and special characters";
//     isValid = false;
//   } else {
//     passwordError.value = "";
//   }

//   watch(username, (newValue) => {
//   if (newValue.length > 20) {
//     username.value = newValue.slice(0, 20);
//   }
// });
}

const register = async (event: Event) => {
  try {
    event.preventDefault();
    validateForm();

    if (isValid) {
      showDialog.value = false;
      // Proceed with registration
      const res = await authStore.register(
        password.value,
        username.value,
        email.value,
        name.value,
        tel.value
     
      );
      console.log(res);

      if (res === null) {
        console.log("Setting error message and showing dialog");
        errorMessage.value = "Email already registered";
        showDialog.value = true;
        
      }
      if (res != null && res === true) {
    // Display a simple native JavaScript alert
    alert('Registration Successful! You can now log in with your credentials.');

    // Redirect to login page
    router.push('/');
}
    }else{
      showDialog.value = true;
    }
  } catch (error) {
    errorMessage.value = "Email already registered";
    showDialog.value = true;
  }
};

</script>
<template>
     <div class="login-container">
      <div class="image-container">
        <!-- Background image here -->
      </div>
      
      <div class="form-container">
        <img src="../images/logo.png" style="height: 10vw;width: 23vh; margin-left: 37%;"/>
        <h2 style="text-align: center; font-size: 500%;">Register</h2>
        <form >
            <v-card >
                <v-row style="margin: 0px 40px 0px 40px;">
                    <v-col>
                        <div class="">
                            <label style="font-size: 150%;">Email:</label>
                                <v-text-field
                                v-model="email"
                type="email"
                placeholder="email"
                class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full"
                                 ></v-text-field>
                         </div>
                    </v-col>
                </v-row >
                <v-row style="margin: 0px 40px 0px 40px;">
                    <v-col>
                        <div class="">
                            <label style="font-size: 150%;">Username:</label>
                                <v-text-field
                                v-model="username"
                type="text"
                placeholder="username"
                class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full"
                                 ></v-text-field>
                         </div>
                    </v-col>
                    <v-col>
                        <div class="">
                            <label style="font-size: 150%;">Password:</label>
                                <v-text-field
                                v-model="password"
                                :type="showPassword ? 'text' : 'password'"
                placeholder="password"
                class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full"
                                 ></v-text-field>
                         </div>
                    </v-col>
                </v-row>
                <v-row style="margin: 0px 40px 0px 40px;">
                    <v-col>
                        <div class="">
                            <label style="font-size: 150%;">Name-Surname:</label>
                                <v-text-field
                                v-model="name"
                type="text"
                placeholder="name-surname"
                class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full"
                                 ></v-text-field>
                         </div>
                    </v-col>
                    <v-col>
                        <div class="">
                            <label style="font-size: 150%;">Tel:</label>
                                <v-text-field
                                v-model="tel"
                type="text"
                placeholder="tel"
                class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full"
                                 ></v-text-field>                        
                                 </div>
     
                    </v-col>
                    
                </v-row>
                <div class="mt-2 px-7 py-3" >
              <p class="text-sm text-gray-500" style="color: red; text-align: center;">{{ errorMessage }}</p>
            </div>
            <div>
                <button style="margin-bottom:40px ; border-color: #22668D; background-color: #427D9D;"   @click="register" >Submit   </button>.
                <button style="margin-bottom:40px ; border-color: #22668D; background-color: #FF0000;"  >Cancel   </button>
              </div>
              </v-card>
        </form>
      </div>
    </div>
</template>
  <style scoped>
  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .image-container {
    background-image: url('../images/login.jpg');
    background-size: cover;
    width: 50%;
    height: 100%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    
  }
  
  .form-container {
    width: 50%;
    padding: 2em;
    box-sizing: border-box;
  }
  
  .input-container {
    margin-bottom: 1em;
  }
  
  input {
    width: 100%;
    padding: 0.5em;
    margin-top: 0.5em;
  }
  
  button {
    width: 50%;
    padding: 0.5em;
    background-color: #007bff;
    color: white;
    
    margin-left: 25%;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  a {
    display: block;
    text-align: center;
    margin-top: 1em;
    color: #007bff;
    text-decoration: none;
  }
  </style>
  
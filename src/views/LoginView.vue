<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { onMounted, ref } from "vue";
const showPassword = ref(false); // Initially, the password is hidden

const username = ref("");
const password = ref("");
const authStore = useAuthStore();
const errorMessage = ref("");
const showDialog = ref(false);

const login = async (event: Event) => {
    event.preventDefault();
    showDialog.value = false;
    errorMessage.value = "";

    if (!username.value || !password.value) {
        errorMessage.value = "โปรดระบุชื่อและรหัสผ่าน";
        showDialog.value = true;
        return;
    }
try {
   const res =  await authStore.login(username.value, password.value);
 if(res == null){
    errorMessage.value = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
    showDialog.value = true;
  }
    } catch (error) {
      errorMessage.value ="ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
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
        <h2 style="text-align: center; font-size: 300%;">Login</h2>
        <form >
          <!-- <div class="input-container"> -->
            <label style="font-size: 200%;">User name:</label>
            <v-text-field
                v-model="username"
                type="text"
                :rules="[
                        (v) => !!v || 'โปรดระบุชื่อผู้ใช้'
                      ]" required
                label="Username"
            ></v-text-field>
          <!-- </div> -->
          <!-- <div class="input-container"> -->
            <label style="font-size: 200%;">Password:</label>
            <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Password"
                :rules="[
                        (v) => !!v || 'โปรดระบุรหัสผ่าน'
                      ]" required
            ></v-text-field>
            <div class="mt-2 px-7 py-3" >
              <p class="text-sm text-gray-500" style="color: red; text-align: center;">{{ errorMessage }}</p>
            </div>
          <!-- </div> -->
          <v-col>
                  <button  type="submit" style="border-color: #22668D; background-color: #427D9D; "   @click="login" >Sign in</button>
          </v-col>
          
          <a href="/Register">Register?</a>
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
  
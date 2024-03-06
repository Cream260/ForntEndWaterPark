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
        errorMessage.value = "Username and password are required.";
        showDialog.value = true;
        return;
    }
try {
   const res =  await authStore.login(username.value, password.value);
 if(res == null){
    errorMessage.value = "Your username or password is incorrect. Please try again.";
    showDialog.value = true;
  }
    } catch (error) {
      errorMessage.value ="Your username or password is incorrect. Please try again.";
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
        <h2 style="text-align: center; font-size: 500%;">Login</h2>
        <form >
          <div class="input-container">
            <label style="font-size: 200%;">User name:</label>
            <v-text-field
                v-model="username"
                type="text"
                :rules="[
                        (v) => !!v || 'Username is required'
                      ]" required
                label="Username"
            ></v-text-field>
          </div>
          <div class="input-container">
            <label style="font-size: 200%;">Password:</label>
            <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Password"
                :rules="[
                        (v) => !!v || 'Password is required'
                      ]" required
            ></v-text-field>
            <div class="mt-2 px-7 py-3" >
              <p class="text-sm text-gray-500" style="color: red; text-align: center;">{{ errorMessage }}</p>
            </div>
          </div>
          <v-col>
                  <button  type="submit" style="border-color: #22668D; background-color: #427D9D;"   @click="login" >Sign in</button>
          </v-col>
          
          <a href="#">Forgot Password?</a>
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
  
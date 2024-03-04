<script set lang="ts">
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import type { VForm } from "vuetify/components";

const authStore = useAuthStore()
const userName = ref('')
const password = ref('')
const valid = ref(true)
const form = ref<InstanceType<typeof VForm> | null>(null)
const login = async () => {
const { valid } = await form.value!.validate()
if (valid) {
  authStore.login(userName.value, password.value)
}
}
const reset = () => {
form.value?.reset()
}
</script>
<template>
    <div class="login-container">
      <div class="image-container">
        <!-- Background image here -->
      </div>
      <div class="form-container">
        <h2 style="text-align: center; font-size: 500%;">Login</h2>
        <form @submit.prevent="submitForm">
          <div class="input-container">
            <label style="font-size: 200%;">User name:</label>
            <v-text-field
                v-model="userName"
                :rules="[
                        (v) => !!v || 'Username is required'
                      ]" required
                label="User name"
            ></v-text-field>
          </div>
          <div class="input-container">
            <label style="font-size: 200%;">Password:</label>
            <v-text-field
                v-model="password"
                :rules="[
                        (v) => !!v || 'Password is required'
                      ]" required
            ></v-text-field>
          </div>
          <v-col>
                <button type="submit" style="border-color: #22668D; background-color: #427D9D;" @click = "login" >Sign in</button>
            
          </v-col>
          
          <a href="#">Forgot Password?</a>
        </form>
      </div>
    </div>
  </template>
  <script>
  export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log(`Login for ${this.username}`);
    }
  }
};
</script>

  
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
  
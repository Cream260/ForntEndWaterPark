<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { ref, watch } from "vue";
import router from "@/router";
import { mdiEyeOffOutline } from "@mdi/js";

const username = ref("");
const password = ref("");
const email = ref("");
const name = ref("");
const tel = ref("");
const showPassword = ref(false);
const authStore = useAuthStore();
const usernameError = ref("");
const passwordError = ref("");
const phoneError = ref("");
const emailError = ref("");
const showDialog = ref(false);
const errorMessage = ref("");
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
let isValid = true;

const redirectToHome = () => {
  const router = useRouter();
  router.push('/');
};
const validateForm = () => {
  isValid = true;
  showDialog.value = false;
  if (!email.value) {
    emailError.value = "โปรดใส่อีเมล์";
    isValid = false;
  } else if (
    !/^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/.test(email.value)
  ) {
    emailError.value = "Gmail หรือ Hotmail เท่านั้น";
    isValid = false;
  } else {
    emailError.value = "";
  }


  // Updated Username validation
  if (!username.value) {
    usernameError.value = "โปรดใส่ชื่อผู้ใช้";
    isValid = false;
  } else if (username.value.length < 5 || username.value.length > 20) {
    usernameError.value = "ชื่อผู้ใช้ต้องไม่ต่ำกว่า 8 - 20 ตัวอักษร";
    isValid = false;
  } else {
    usernameError.value = "";
  }

  if (!password.value) {
    passwordError.value = "โปรดใส่รหัสผ่าน";
    isValid = false;
  } else if (password.value.length < 6) {
    passwordError.value = "รหัสผ่านต้องไม่ต่ำกว่า 6 ตักอักษร";
    isValid = false;
  } else if (!passwordRegex.test(password.value)) {
    passwordError.value =
      "รหัสผ่านจะต้องมีตัวเลขตัวพิมพ์ใหญ่ตัวพิมพ์เล็กและอักขระพิเศษ";
    isValid = false;
  } else {
    passwordError.value = "";
  }

  if (!tel.value) {
    phoneError.value = "โปรดใส่หมายเลขโทรศัพท์";
    isValid = false;
  } else if (!/^\d{10}$/.test(tel.value)) {
    phoneError.value = "โปรดใส่หมายเลขโทรศัพท์ที่ถูกต้อง";
    isValid = false;
  } else {
    phoneError.value = "";
  }

  watch(username, (newValue) => {
    if (newValue.length > 20) {
      username.value = newValue.slice(0, 20);
    }
  });
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
        errorMessage.value = "อีเมล์ที่ลงทะเบียนไว้แล้ว";
        showDialog.value = true;

      }
      if (res != null && res === true) {
        // Display a simple native JavaScript alert
        alert('การลงทะเบียนสำเร็จ! ตอนนี้คุณสามารถเข้าสู่ระบบด้วยข้อมูลประจำตัวของคุณ');

        // Redirect to login page
        router.push('/');
      }
    } else {
      showDialog.value = true;
    }
  } catch (error) {
    errorMessage.value = "อีเมล์ที่ลงทะเบียนไว้แล้ว";
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
      <img src="../images/logo.png" style="height: 10vw;width: 23vh; margin-left: 37%;" />
      <h2 style="text-align: center; font-size: 500%;">Register</h2>
      <form>
        <v-card>
          <v-row style="margin: 0px 40px 0px 40px;">
            <v-col>
              <div class="">
                <label style="font-size: 150%;">Email:</label>
                <v-text-field v-model="email" type="email" placeholder="email"
                  class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full"></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row style="margin: 0px 40px 0px 40px;">
            <v-col>
              <div class="">
                <label style="font-size: 150%;">Username:</label>
                <v-text-field v-model="username" type="text" placeholder="username"
                  class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full"></v-text-field>
              </div>
            </v-col>
            <!-- <v-col>
                        <div class="">
                            <label style="font-size: 150%;">Password:</label>
                                <v-text-field
                                v-model="password"
                                :type="showPassword ? 'text' : 'password'"
                placeholder="password"
                class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full">
                
                                 </v-text-field>      -->
            <!-- <button
                @click.prevent="showPassword = !showPassword" style="float: right; background-color: #808080;" >
                <i :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'"  >Show Password</i>
              </button>  -->
            <!-- </div>
                    </v-col> -->
            <v-col>
              <div>
                <label style="font-size: 150%;">Password:</label>
                <v-text-field v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="password"
                  class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full">
                  <template v-slot:append>
                    <v-btn :icon="mdiEyeOffOutline" @click.prevent="showPassword = !showPassword"></v-btn>
                  </template>
                </v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row style="margin: 0px 40px 0px 40px;">
            <v-col>
              <div class="">
                <label style="font-size: 150%;">Name-Surname:</label>
                <v-text-field v-model="name" type="text" placeholder="name-surname"
                  class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full">
                  <i class="fi fi-rr-eye-crossed"></i> </v-text-field>
              </div>
            </v-col>
            <v-col>
              <div class="">
                <label style="font-size: 150%;">Tel:</label>
                <v-text-field v-model="tel" type="text" placeholder="tel"
                  class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full"></v-text-field>
              </div>

            </v-col>

          </v-row>
          <div v-if="usernameError || emailError || passwordError || errorMessage || phoneError"
            class="border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3 text-center">
            <ul class="mt-1 list-disc list-inside" style="color: #FF0000;">
              <p v-if="errorMessage">{{ errorMessage }}</p>
              <p v-if="usernameError">{{ usernameError }}</p>
              <p v-if="emailError">{{ emailError }}</p>
              <p v-if="passwordError">{{ passwordError }}</p>
              <p v-if="phoneError">{{ phoneError }}</p>
            </ul>
          </div>
          <div>
            <button style="margin-bottom:40px ; border-color: #22668D; background-color: #427D9D;"
              @click="register">Submit
            </button>
            <router-link to="/">
              <button style="margin-bottom: 40px; border-color: #22668D; background-color: #FF0000; float: left;"
                @click="redirectToHome">Cancel</button>
            </router-link>
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
<script>


</script>
<template>
    < <div class="login-container">
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
                                     type="text"
                                         label="email"
                                 ></v-text-field>
                         </div>
                    </v-col>
                </v-row >
                <v-row style="margin: 0px 40px 0px 40px;">
                    <v-col>
                        <div class="">
                            <label style="font-size: 150%;">Username:</label>
                                <v-text-field
                                     type="text"
                                         label="username"
                                 ></v-text-field>
                         </div>
                    </v-col>
                    <v-col>
                        <div class="">
                            <label style="font-size: 150%;">Password:</label>
                                <v-text-field
                                     type="text"
                                         label="password"
                                 ></v-text-field>
                         </div>
                    </v-col>
                </v-row>
                <v-row style="margin: 0px 40px 0px 40px;">
                    <v-col>
                        <div class="">
                            <label style="font-size: 150%;">Name-Surname:</label>
                                <v-text-field
                                     type="text"
                                         label="name-surname"
                                 ></v-text-field>
                         </div>
                    </v-col>
                    <v-col>
                        <div class="">
                            <label style="font-size: 150%;">Tel:</label>
                                <v-text-field
                                     type="text"
                                         label="tel"
                                 ></v-text-field>
                         </div>
                    </v-col>
                </v-row>
                <button style="margin-bottom:40px ; border-color: #22668D; background-color: #427D9D;"   @click="sign" >submit   </button>
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
  
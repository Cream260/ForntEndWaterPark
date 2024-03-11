<script setup lang="ts">
import { useEventStore } from '@/stores/event.store';
import { onMounted, ref, defineProps } from 'vue';

const props = defineProps<{
  eventName: string,
  eventImg: string,
}>();

// Your existing code
onMounted(() => {
  // Your logic here if needed
});

</script>

<template>
  <div>
    <v-row>
      <!-- LifeGuard Page Card -->
      <v-col cols="4" offset="0.5">
        <router-link to="/LifeGuard">
          <v-card class="card">
            <img src="../images/lifeGuard.jpg">
            <div class="card-text">
              <h2>Life Guard</h2>
              <p>3 หลักสูตร</p>
            </div>
          </v-card>
        </router-link>
      </v-col>

      <!-- FirstAid Page Card -->
      <v-col cols="4" offset="0.5"> <!-- Adjust offset here -->
        <router-link to="/FirstAid">
          <v-card class="card">
            <img src="../images/Safety.jpg">
            <div class="card-text">
              <h2>First Aid</h2>
              <p>3 หลักสูตร</p>
            </div>
          </v-card>
        </router-link>
      </v-col>

      <!-- Swim Page Card -->
      <v-col cols="4" offset="0.5"> <!-- Adjust offset here -->
        <router-link to="/Swim">
          <v-card class="card">
            <img src="../images/swim.jpg">
            <div class="card-text">
              <h2>Swim</h2>
              <p>3 หลักสูตร</p>
            </div>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

  <style scoped>
  .card {
    max-width: 200px;
    height: 100%;
    border-radius: 10% 10% 10% 10%;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    font-family: 'Sarabun', sans-serif; /* Assuming Sarabun is the font you want to use */
    
  }
  
  .card img {
    width: 100%;
    display: block; /* Remove any space below the image */

  }
  
  .card-text {
    background-color: #FFFBF5; /* Or any color you prefer */
    padding: 10px;
    text-align: center; 
    margin: 0;
    
    /*margin-left: 10%;*/
    /* Center the text */
  }
  
  .card-text h2 {
    margin: 0;
    color: #164159; /* Adjust the color as needed */
    font-size: 28px; /* Adjust the size as needed */
  }
  
  .card-text p {
    margin: 0;
    color: #164159; /* Adjust the color as needed */
    font-size: 16px; /* Adjust the size as needed */
  }
  </style>
  
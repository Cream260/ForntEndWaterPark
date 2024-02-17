<script>
  // 
</script>

<template>
  <v-list-item to="/Event">
    <v-card class="card" >
      <img src="@/images/Event/Safety.jpg" height="63.7%" width="80%" />
      <div class="card-text">
        <h2>ปฐมพยาบาล</h2>
        <p >3 หลักสูตร</p>
      </div>
    </v-card>
  </v-list-item>
      

    
  </template>

  <style scoped>
  .card {
    max-width: 300px;
    height: 90%;
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
  
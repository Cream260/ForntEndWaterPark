<template>
  <div class="info-box">
    <h2 style="font-size: 20px;">สิ่งที่คุณจะได้เรียนรู้</h2>
    <ul class="info-list">
      <li v-for="(item, index) in infoItems" :key="index">
        <span class="bullet-point">•</span>{{ item }}
      </li>
      <div class="image-container" >
          <img class="corner-image" src="../../images/Event/education.png" style="margin-top: 50%;">
      </div>
    </ul>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        infoItems: [
          'การเฝ้าระวัง',
          'การเตรียมตัวในกรณีฉุกเฉิน',
          'ทักษะการกู้ชีพ',
          'การลงไปในน้ำ, ความเสี่ยงในการช่วยเหลือและลำดับขั้นของการบาดเจ็บและการจมน้ำ',
          'เทคนิคการทำ CPR และ AED',
          'และอื่น ๆ อีกมากมาย'
        ]
      };
    }
  };
  
  </script>
  
  <style scoped>
  .info-box {
    font-family: 'Kanit', sans-serif;
    border-radius: 15px;
    padding: 10px;
    
    width: fit-content;
  }
  
  .info-list {
    list-style: none;
    margin-top: 10px;
  }
  
  .info-list li {
    margin-bottom: 10px;
    line-height: 1.6;
    font-size: 12px;
  }
  
  .bullet-point {
    color: #555;
    margin-right: 5px;
  }
  
  h2 {
    margin-top: 0;
    color: #333;
    font-size: 22px;
  }

  .image-container {
    
    position: absolute;
    bottom: 0.5px; /* Adjust as necessary */
    right: 10px; /* Adjust as necessary */
  }
  .corner-image {
    
    width: 50px; /* Adjust as necessary */
    height: auto;
    /* Add more styles if needed */
  }
  </style>
  
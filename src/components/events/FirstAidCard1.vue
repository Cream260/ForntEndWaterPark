<template>
    <div class="info-box">
      <h2 style="font-size: 24px;">สิ่งที่คุณจะได้เรียนรู้</h2>
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
          'เทคนิคการปฐมพยาบาล',
          'การจัดการอาการบาดเจ็บที่กระดูกสันหลัง',
          'เทคนิคการทํา CPR และ AED',
          'การจัดการทางเดินหายใจกู้ภัย',
          'การดูแลเด็กโดยเฉพาะ',
          'เทคนิคการดูแลทุติยภูมิ'
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .info-box {
    font-family: 'Kanit', sans-serif;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: fit-content;
  }
  
  .info-list {
    list-style: none;
    margin-top: 10px;
  }
  
  .info-list li {
    margin-bottom: 10px;
    line-height: 1.6;
    font-size: 16px;
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
    bottom: 1px; /* Adjust as necessary */
    right: 10px; /* Adjust as necessary */
  }
  .corner-image {
    
    width: 65px; /* Adjust as necessary */
    height: auto;
    /* Add more styles if needed */
  }
  </style>
  